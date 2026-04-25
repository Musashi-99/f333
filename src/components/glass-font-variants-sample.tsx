/*
  This is a sample file for glass font variants.
  It demonstrates how to apply liquid glass effects to different font styles.
  
  Files: GlassSurface.tsx, GlassSurface.css, GlassFontVariants.tsx
  
  GlassSurface.tsx:
  --------------------------------------------------
  eslint-disable react-hooks/exhaustive-deps
  import { useEffect, useState, useRef, useId } from 'react';
  import './GlassSurface.css';

  const GlassSurface = ({
    children,
    width = 200,
    height = 80,
    borderRadius = 20,
    borderWidth = 0.07,
    brightness = 50,
    opacity = 0.93,
    blur = 11,
    displace = 0,
    backgroundOpacity = 0,
    saturation = 1,
    distortionScale = -180,
    redOffset = 0,
    greenOffset = 10,
    blueOffset = 20,
    xChannel = 'R',
    yChannel = 'G',
    mixBlendMode = 'difference',
    className = '',
    style = {}
  }) => {
    const uniqueId = useId().replace(/:/g, '-');
    const filterId = `glass-filter-${uniqueId}`;
    const redGradId = `red-grad-${uniqueId}`;
    const blueGradId = `blue-grad-${uniqueId}`;

    const [svgSupported, setSvgSupported] = useState(false);

    const containerRef = useRef(null);
    const feImageRef = useRef(null);
    const redChannelRef = useRef(null);
    const greenChannelRef = useRef(null);
    const blueChannelRef = useRef(null);
    const gaussianBlurRef = useRef(null);

    const generateDisplacementMap = () => {
      const rect = containerRef.current?.getBoundingClientRect();
      const actualWidth = rect?.width || 400;
      const actualHeight = rect?.height || 200;
      const edgeSize = Math.min(actualWidth, actualHeight) * (borderWidth * 0.5);

      const svgContent = `
        <svg viewBox="0 0 ${actualWidth} ${actualHeight}" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="${redGradId}" x1="100%" y1="0%" x2="0%" y2="0%">
              <stop offset="0%" stop-color="#0000"/>
              <stop offset="100%" stop-color="red"/>
            </linearGradient>
            <linearGradient id="${blueGradId}" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#0000"/>
              <stop offset="100%" stop-color="blue"/>
            </linearGradient>
          </defs>
          <rect x="0" y="0" width="${actualWidth}" height="${actualHeight}" fill="black"></rect>
          <rect x="0" y="0" width="${actualWidth}" height="${actualHeight}" rx="${borderRadius}" fill="url(#${redGradId})" />
          <rect x="0" y="0" width="${actualWidth}" height="${actualHeight}" rx="${borderRadius}" fill="url(#${blueGradId})" style="mix-blend-mode: ${mixBlendMode}" />
          <rect x="${edgeSize}" y="${edgeSize}" width="${actualWidth - edgeSize * 2}" height="${actualHeight - edgeSize * 2}" rx="${borderRadius}" fill="hsl(0 0% ${brightness}% / ${opacity})" style="filter:blur(${blur}px)" />
        </svg>
      `;

      return `data:image/svg+xml,${encodeURIComponent(svgContent)}`;
    };

    const updateDisplacementMap = () => {
      feImageRef.current?.setAttribute('href', generateDisplacementMap());
    };

    useEffect(() => {
      updateDisplacementMap();
      [
        { ref: redChannelRef, offset: redOffset },
        { ref: greenChannelRef, offset: greenOffset },
        { ref: blueChannelRef, offset: blueOffset }
      ].forEach(({ ref, offset }) => {
        if (ref.current) {
          ref.current.setAttribute('scale', (distortionScale + offset).toString());
          ref.current.setAttribute('xChannelSelector', xChannel);
          ref.current.setAttribute('yChannelSelector', yChannel);
        }
      });

      gaussianBlurRef.current?.setAttribute('stdDeviation', displace.toString());
    }, [
      width,
      height,
      borderRadius,
      borderWidth,
      brightness,
      opacity,
      blur,
      displace,
      distortionScale,
      redOffset,
      greenOffset,
      blueOffset,
      xChannel,
      yChannel,
      mixBlendMode
    ]);

    useEffect(() => {
      if (!containerRef.current) return;

      const resizeObserver = new ResizeObserver(() => {
        setTimeout(updateDisplacementMap, 0);
      });

      resizeObserver.observe(containerRef.current);

      return () => {
        resizeObserver.disconnect();
      };
    }, []);

    useEffect(() => {
      if (!containerRef.current) return;

      const resizeObserver = new ResizeObserver(() => {
        setTimeout(updateDisplacementMap, 0);
      });

      resizeObserver.observe(containerRef.current);

      return () => {
        resizeObserver.disconnect();
      };
    }, []);

    useEffect(() => {
      setTimeout(updateDisplacementMap, 0);
    }, [width, height]);

    useEffect(() => {
      setSvgSupported(supportsSVGFilters());
    }, []);

    const supportsSVGFilters = () => {
      if (typeof window === 'undefined' || typeof document === 'undefined') {
        return false;
      }

      const isWebkit = /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent);
      const isFirefox = /Firefox/.test(navigator.userAgent);

      if (isWebkit || isFirefox) {
        return false;
      }

      const div = document.createElement('div');
      div.style.backdropFilter = `url(#${filterId})`;

      return div.style.backdropFilter !== '';
    };

    const containerStyle = {
      ...style,
      width: typeof width === 'number' ? `${width}px` : width,
      height: typeof height === 'number' ? `${height}px` : height,
      borderRadius: `${borderRadius}px`,
      '--glass-frost': backgroundOpacity,
      '--glass-saturation': saturation,
      '--filter-id': `url(#${filterId})`
    };

    return (
      <div
        ref={containerRef}
        className={`glass-surface ${svgSupported ? 'glass-surface--svg' : 'glass-surface--fallback'} ${className}`}
        style={containerStyle}
      >
        <svg className="glass-surface__filter" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id={filterId} colorInterpolationFilters="sRGB" x="0%" y="0%" width="100%" height="100%">
              <feImage ref={feImageRef} x="0" y="0" width="100%" height="100%" preserveAspectRatio="none" result="map" />

              <feDisplacementMap ref={redChannelRef} in="SourceGraphic" in2="map" id="redchannel" result="dispRed" />
              <feColorMatrix
                in="dispRed"
                type="matrix"
                values="1 0 0 0 0
                        0 0 0 0 0
                        0 0 0 0 0
                        0 0 0 1 0"
                result="red"
              />

              <feDisplacementMap
                ref={greenChannelRef}
                in="SourceGraphic"
                in2="map"
                id="greenchannel"
                result="dispGreen"
              />
              <feColorMatrix
                in="dispGreen"
                type="matrix"
                values="0 0 0 0 0
                        0 1 0 0 0
                        0 0 0 0 0
                        0 0 0 1 0"
                result="green"
              />

              <feDisplacementMap ref={blueChannelRef} in="SourceGraphic" in2="map" id="bluechannel" result="dispBlue" />
              <feColorMatrix
                in="dispBlue"
                type="matrix"
                values="0 0 0 0 0
                        0 0 0 0 0
                        0 0 1 0 0
                        0 0 0 1 0"
                result="blue"
              />

              <feBlend in="red" in2="green" mode="screen" result="rg" />
              <feBlend in="rg" in2="blue" mode="screen" result="output" />
              <feGaussianBlur ref={gaussianBlurRef} in="output" stdDeviation="0.7" />
            </filter>
          </defs>
        </svg>

        <div className="glass-surface__content">{children}</div>
      </div>
    );
  };

  export default GlassSurface;

  --------------------------------------------------

  GlassSurface.css:
  --------------------------------------------------
  .glass-surface {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: opacity 0.26s ease-out;
  }

  .glass-surface__filter {
    width: 100%;
    height: 100%;
    pointer-events: none;
    position: absolute;
    inset: 0;
    opacity: 0;
    z-index: -1;
  }

  .glass-surface__content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    border-radius: inherit;
    position: relative;
    z-index: 1;
  }

  .glass-surface--svg {
    background: light-dark(hsl(0 0% 100% / var(--glass-frost, 0)), hsl(0 0% 0% / var(--glass-frost, 0)));
    backdrop-filter: var(--filter-id, url(#glass-filter)) saturate(var(--glass-saturation, 1));
    box-shadow:
      0 0 2px 1px light-dark(color-mix(in oklch, black, transparent 85%), color-mix(in oklch, white, transparent 65%))
        inset,
      0 0 10px 4px light-dark(color-mix(in oklch, black, transparent 90%), color-mix(in oklch, white, transparent 85%))
        inset,
      0px 4px 16px rgba(17, 17, 26, 0.05),
      0px 8px 24px rgba(17, 17, 26, 0.05),
      0px 16px 56px rgba(17, 17, 26, 0.05),
      0px 4px 16px rgba(17, 17, 26, 0.05) inset,
      0px 8px 24px rgba(17, 17, 26, 0.05) inset,
      0px 16px 56px rgba(17, 17, 26, 0.05) inset;
  }

  .glass-surface--fallback {
    background: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(12px) saturate(1.8) brightness(1.1);
    -webkit-backdrop-filter: blur(12px) saturate(1.8) brightness(1.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow:
      0 8px 32px 0 rgba(31, 38, 135, 0.2),
      0 2px 16px 0 rgba(31, 38, 135, 0.1),
      inset 0 1px 0 0 rgba(255, 255, 255, 0.4),
      inset 0 -1px 0 0 rgba(255, 255, 255, 0.2);
  }

  @media (prefers-color-scheme: dark) {
    .glass-surface--fallback {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(12px) saturate(1.8) brightness(1.2);
      -webkit-backdrop-filter: blur(12px) saturate(1.8) brightness(1.2);
      border: 1px solid rgba(255, 255, 255, 0.2);
      box-shadow:
        inset 0 1px 0 0 rgba(255, 255, 255, 0.2),
        inset 0 -1px 0 0 rgba(255, 255, 255, 0.1);
    }
  }

  @supports not (backdrop-filter: blur(10px)) {
    .glass-surface--fallback {
      background: rgba(255, 255, 255, 0.4);
      box-shadow:
        inset 0 1px 0 0 rgba(255, 255, 255, 0.5),
        inset 0 -1px 0 0 rgba(255, 255, 255, 0.3);
    }

    .glass-surface--fallback::before {
      content: '';
      position: absolute;
      inset: 0;
      background: rgba(255, 255, 255, 0.15);
      border-radius: inherit;
      z-index: -1;
    }
  }

  @supports not (backdrop-filter: blur(10px)) {
    @media (prefers-color-scheme: dark) {
      .glass-surface--fallback {
        background: rgba(0, 0, 0, 0.4);
      }

      .glass-surface--fallback::before {
        background: rgba(255, 255, 255, 0.05);
      }
    }
  }

  .glass-surface:focus-visible {
    outline: 2px solid light-dark(#007aff, #0a84ff);
    outline-offset: 2px;
  }

  --------------------------------------------------

  GlassFontVariants.tsx:
  --------------------------------------------------
  import GlassSurface from './GlassSurface';

  const GlassFontVariant = ({
    children,
    fontSize = 16,
    fontWeight = 400,
    fontFamily = 'system-ui, -apple-system, sans-serif',
    letterSpacing = 'normal',
    textTransform = 'none',
    className = '',
    ...props
  }) => {
    const style = {
      fontSize: typeof fontSize === 'number' ? `${fontSize}px` : fontSize,
      fontWeight,
      fontFamily,
      letterSpacing,
      textTransform,
      color: 'inherit',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
    };

    return (
      <GlassSurface className={className} {...props}>
        <span style={style}>{children}</span>
      </GlassSurface>
    );
  };

  const GlassFont1 = (props) => (
    <GlassFontVariant
      fontSize={48}
      fontWeight={900}
      letterSpacing="-0.02em"
      borderRadius={16}
      width={320}
      height={80}
      {...props}
    />
  );

  const GlassFont2 = (props) => (
    <GlassFontVariant
      fontSize={36}
      fontWeight={700}
      letterSpacing="-0.01em"
      borderRadius={14}
      width={280}
      height={72}
      {...props}
    />
  );

  const GlassFont3 = (props) => (
    <GlassFontVariant
      fontSize={24}
      fontWeight={600}
      letterSpacing="0"
      borderRadius={12}
      width={220}
      height={64}
      {...props}
    />
  );

  const GlassFont4 = (props) => (
    <GlassFontVariant
      fontSize={18}
      fontWeight={500}
      letterSpacing="0.01em"
      borderRadius={10}
      width={180}
      height={56}
      {...props}
    />
  );

  const GlassFont5 = (props) => (
    <GlassFontVariant
      fontSize={14}
      fontWeight={400}
      letterSpacing="0.02em"
      borderRadius={8}
      width={140}
      height={48}
      {...props}
    />
  );

  export { GlassFontVariant, GlassFont1, GlassFont2, GlassFont3, GlassFont4, GlassFont5 };
  export default GlassFontVariant;

  Usage Example:
  --------------------------------------------------
  import { GlassFont1, GlassFont2, GlassFont3, GlassFont4, GlassFont5 } from './components/GlassFontVariants';

  function App() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '40px' }}>
        <GlassFont1>LIQUID GLASS</GlassFont1>
        <GlassFont2>LIQUID GLASS</GlassFont2>
        <GlassFont3>LIQUID GLASS</GlassFont3>
        <GlassFont4>LIQUID GLASS</GlassFont4>
        <GlassFont5>LIQUID GLASS</GlassFont5>
      </div>
    );
  }

  export default App;
*/