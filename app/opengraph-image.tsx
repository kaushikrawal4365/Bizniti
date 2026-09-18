import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'BizNiti — Strategy that moves';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0b0f19',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          color: '#ffffff',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              background: '#0f52ba',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#d8f26b',
              fontWeight: 900,
              fontSize: '24px',
            }}
          >
            BN
          </div>
          <span style={{ fontSize: '28px', fontWeight: 800, letterSpacing: '-0.03em' }}>
            BizNiti
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div
            style={{
              fontSize: '64px',
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: '-0.04em',
              maxWidth: '900px',
            }}
          >
            Strategy that <span style={{ color: '#0f52ba' }}>moves.</span>
          </div>
          <p
            style={{
              fontSize: '24px',
              color: 'rgba(255, 255, 255, 0.65)',
              maxWidth: '800px',
              lineHeight: 1.4,
            }}
          >
            Digital strategy, website experiences and marketing systems built to move businesses forward with clarity.
          </p>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid rgba(255, 255, 255, 0.15)',
            paddingTop: '32px',
          }}
        >
          <span style={{ fontSize: '18px', color: '#d8f26b', fontWeight: 700 }}>
            bizniti-v1.vercel.app
          </span>
          <span style={{ fontSize: '18px', color: 'rgba(255, 255, 255, 0.4)' }}>
            Digital Growth Partner
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
