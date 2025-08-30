import { useEffect, useRef } from 'react';

interface AdSenseProps {
  adSlot: string;
  adFormat?: string;
  fullWidthResponsive?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

const AdSense = ({ 
  adSlot, 
  adFormat = "auto", 
  fullWidthResponsive = true, 
  style = { display: 'block' },
  className = ""
}: AdSenseProps) => {
  const adRef = useRef<HTMLDivElement>(null);
  const loadedRef = useRef(false);

  useEffect(() => {
    // Only load once and use requestAnimationFrame to prevent forced reflows
    if (loadedRef.current) return;
    
    const loadAd = () => {
      try {
        if ((window as any).adsbygoogle && adRef.current) {
          ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
          loadedRef.current = true;
        }
      } catch (err) {
        console.error('AdSense error:', err);
      }
    };

    // Use requestAnimationFrame to avoid forced reflows
    requestAnimationFrame(loadAd);
  }, []);

  return (
    <div 
      ref={adRef}
      className={className}
      style={{ minHeight: '250px', ...style }} // Reserve space to prevent layout shift
    >
      <ins
        className="adsbygoogle"
        style={{ display: 'block', width: '100%', height: '250px' }}
        data-ad-client="ca-pub-9592957331739135"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidthResponsive}
      />
    </div>
  );
};

export default AdSense;