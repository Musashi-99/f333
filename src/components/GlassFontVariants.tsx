import GlassSurface from './GlassSurface';

import type React from 'react';

type GlassFontVariantProps = {
  children?: React.ReactNode;
  fontSize?: number | string;
  fontWeight?: number;
  fontFamily?: string;
  letterSpacing?: string;
  textTransform?: string;
  className?: string;
} & Record<string, unknown>;

const GlassFontVariant = ({
  children,
  fontSize = 16,
  fontWeight = 400,
  fontFamily = 'system-ui, -apple-system, sans-serif',
  letterSpacing = 'normal',
  textTransform = 'none',
  className = '',
  ...props
}: GlassFontVariantProps) => {
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

const GlassFont1 = (props: Record<string, unknown>) => (
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

const GlassFont2 = (props: Record<string, unknown>) => (
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

const GlassFont3 = (props: Record<string, unknown>) => (
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

const GlassFont4 = (props: Record<string, unknown>) => (
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

const GlassFont5 = (props: Record<string, unknown>) => (
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