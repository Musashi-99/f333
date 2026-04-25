import React from 'react'

export type IntelligenceCoreVideoProps = {
  src: string
  size?: number | string
  glow?: boolean
  posterSrc?: string
  maskSrc?: string
  className?: string
}

export function IntelligenceCoreVideo({
  src,
  size = 340,
  glow = true,
  posterSrc,
  maskSrc,
  className,
}: IntelligenceCoreVideoProps) {
  const [failed, setFailed] = React.useState(false)

  const pxSize = typeof size === 'number' ? `${size}px` : size

  const maskStyle = maskSrc
    ? ({
        WebkitMaskImage: `url("${maskSrc}")`,
        maskImage: `url("${maskSrc}")`,
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskSize: 'cover',
        maskSize: 'cover',
        WebkitMaskPosition: 'center',
        maskPosition: 'center',
      } as React.CSSProperties)
    : undefined

  return (
    <div
      className={['relative', className].filter(Boolean).join(' ')}
      style={{
        width: pxSize,
        height: pxSize,
      }}
    >
      {glow ? (
        <>
          <div className="absolute -inset-8 rounded-full bg-[rgba(0,255,255,0.10)] blur-[32px]" />
          <div className="absolute -inset-12 rounded-full bg-[rgba(125,255,255,0.08)] blur-[60px]" />
          <div className="absolute inset-0 rounded-full shadow-[0_0_90px_rgba(64,255,255,0.26)]" />
        </>
      ) : null}

      <div className="absolute -inset-[14%] rounded-full border border-[rgba(178,252,227,0.28)] blur-[0.2px] opacity-70 animate-[spin_14s_linear_infinite]" />
      <div className="absolute -inset-[6%] rounded-full border border-[rgba(255,255,255,0.10)] opacity-40 animate-[spin_22s_linear_infinite_reverse]" />

      <div
        className="absolute inset-0 overflow-hidden rounded-full bg-black/30"
        style={maskStyle}
      >
        {!failed ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={posterSrc}
            onError={() => setFailed(true)}
            onStalled={() => setFailed(true)}
            className="absolute inset-0 size-full object-cover [transform:translateZ(0)]"
          >
            <source src={src} type="video/mp4" />
          </video>
        ) : null}

        {failed && posterSrc ? (
          <img
            alt=""
            src={posterSrc}
            className="absolute inset-0 size-full object-cover pointer-events-none"
          />
        ) : null}
      </div>
    </div>
  )
}

