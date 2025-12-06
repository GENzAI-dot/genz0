import { useState, useEffect, createContext, useContext, ReactNode } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  signUp: (email: string, password: string, name?: string) => Promise<{ error: any }>;
  signIn: (email: string, password: string) => Promise<{ error: any }>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    
    // Set up auth state listener FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (!mounted) return;
        
        if (import.meta.env.DEV) {
          console.log('Auth state change:', event, session?.user?.id);
        }
        setSession(session);
        setUser(session?.user ?? null);
        setLoading(false);
        
        // Handle auth events
        if (event === 'SIGNED_IN') {
          toast.success('Welcome! You have been signed in successfully.');
        } else if (event === 'SIGNED_OUT') {
          toast.success('You have been signed out successfully.');
        }
      }
    );

    // THEN check for existing session with timeout
    const checkSession = async () => {
      try {
        if (import.meta.env.DEV) {
          console.log('Checking initial session...');
        }
        const { data: { session } } = await supabase.auth.getSession();
        
        if (!mounted) return;
        
        if (import.meta.env.DEV) {
          console.log('Initial session:', session?.user?.id || 'no session');
        }
        setSession(session);
        setUser(session?.user ?? null);
        setLoading(false);
      } catch (error) {
        console.error('Session check error:', error);
        if (mounted) {
          setLoading(false);
        }
      }
    };

    checkSession();

    // Fallback timeout to prevent infinite loading
    const timeout = setTimeout(() => {
      if (mounted && loading) {
        if (import.meta.env.DEV) {
          console.log('Auth timeout - setting loading to false');
        }
        setLoading(false);
      }
    }, 5000);

    return () => {
      mounted = false;
      subscription.unsubscribe();
      clearTimeout(timeout);
    };
  }, []);

  const signUp = async (email: string, password: string, name?: string) => {
    setLoading(true);
    
    // Password validation
    if (password.length < 8) {
      setLoading(false);
      return { error: { message: 'Password must be at least 8 characters long' } };
    }
    
    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/.test(password)) {
      setLoading(false);
      return { error: { message: 'Password must contain uppercase, lowercase, number and special character' } };
    }

    const redirectUrl = `${window.location.origin}/`;
    
    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: redirectUrl,
          data: name ? { full_name: name } : undefined
        }
      });

      setLoading(false);
      
      if (error) {
        if (error.message.includes('already registered')) {
          toast.error('This email is already registered. Please sign in instead.');
        } else {
          toast.error(error.message);
        }
      } else {
        toast.success('Account created successfully! You can now sign in.');
      }
      
      return { error };
    } catch (err: any) {
      setLoading(false);
      if (err.message === 'Failed to fetch' || err.name === 'TypeError') {
        toast.error('Network error. Please check your connection and try again.');
        return { error: { message: 'Network error. Please check your connection and try again.' } };
      }
      toast.error('An unexpected error occurred. Please try again.');
      return { error: { message: 'An unexpected error occurred' } };
    }
  };

  const signIn = async (email: string, password: string) => {
    setLoading(true);
    
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      setLoading(false);
      
      if (error) {
        // Handle specific error cases
        if (error.message === 'Invalid login credentials') {
          toast.error('Invalid email or password. Please try again.');
        } else if (error.message.includes('Email not confirmed')) {
          toast.error('Please confirm your email before signing in.');
        } else {
          toast.error(error.message);
        }
      }
      
      return { error };
    } catch (err: any) {
      setLoading(false);
      // Handle network errors
      if (err.message === 'Failed to fetch' || err.name === 'TypeError') {
        toast.error('Network error. Please check your connection and try again.');
        return { error: { message: 'Network error. Please check your connection and try again.' } };
      }
      toast.error('An unexpected error occurred. Please try again.');
      return { error: { message: 'An unexpected error occurred' } };
    }
  };

  const signOut = async () => {
    setLoading(true);
    await supabase.auth.signOut();
    setLoading(false);
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      session, 
      loading, 
      signUp, 
      signIn, 
      signOut 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};