import React, { useState } from 'react';
import despia from 'despia-native';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Smartphone, Camera, Bell, MapPin, Vibrate, Share2 } from 'lucide-react';
import { toast } from 'sonner';

export const DespiaDemo = () => {
  const [appVersion, setAppVersion] = useState<string>('');

  const handleLightHaptic = () => {
    despia('lighthaptic://');
    toast.success('Light haptic feedback triggered');
  };

  const handleMediumHaptic = () => {
    despia('mediumhaptic://');
    toast.success('Medium haptic feedback triggered');
  };

  const handleHeavyHaptic = () => {
    despia('heavyhaptic://');
    toast.success('Heavy haptic feedback triggered');
  };

  const handleGetAppVersion = async () => {
    try {
      const result = await despia('getappversion://', ['versionNumber']);
      setAppVersion(result.versionNumber || 'N/A');
      toast.success(`App version: ${result.versionNumber}`);
    } catch (error) {
      toast.error('Failed to get app version');
    }
  };

  const handleTakeScreenshot = () => {
    despia('takescreenshot://');
    toast.success('Screenshot captured');
  };

  const handleShare = () => {
    despia('share://text=Check out this awesome app!');
    toast.success('Share sheet opened');
  };

  const handleNotification = () => {
    despia('localnotification://title=Hello&body=This is a test notification');
    toast.success('Local notification sent');
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Smartphone className="w-6 h-6" />
            Despia Native Features
          </CardTitle>
          <CardDescription>
            Access native device features directly from your web app
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Haptic Feedback */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Vibrate className="w-5 h-5" />
                  Haptic Feedback
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button onClick={handleLightHaptic} variant="outline" className="w-full">
                  Light Haptic
                </Button>
                <Button onClick={handleMediumHaptic} variant="outline" className="w-full">
                  Medium Haptic
                </Button>
                <Button onClick={handleHeavyHaptic} variant="outline" className="w-full">
                  Heavy Haptic
                </Button>
              </CardContent>
            </Card>

            {/* App Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Smartphone className="w-5 h-5" />
                  App Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button onClick={handleGetAppVersion} variant="outline" className="w-full">
                  Get App Version
                </Button>
                {appVersion && (
                  <p className="text-sm text-muted-foreground">Version: {appVersion}</p>
                )}
              </CardContent>
            </Card>

            {/* Screenshot */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Camera className="w-5 h-5" />
                  Screenshot
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Button onClick={handleTakeScreenshot} variant="outline" className="w-full">
                  Take Screenshot
                </Button>
              </CardContent>
            </Card>

            {/* Share */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Share2 className="w-5 h-5" />
                  Share
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Button onClick={handleShare} variant="outline" className="w-full">
                  Open Share Sheet
                </Button>
              </CardContent>
            </Card>

            {/* Notifications */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Bell className="w-5 h-5" />
                  Notifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Button onClick={handleNotification} variant="outline" className="w-full">
                  Send Local Notification
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-6 p-4 bg-muted rounded-lg">
            <h3 className="font-semibold mb-2">Note:</h3>
            <p className="text-sm text-muted-foreground">
              These features work when your app is deployed as a native iOS or Android app through Despia. 
              In a web browser, the commands will be queued but won't execute native functionality.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
