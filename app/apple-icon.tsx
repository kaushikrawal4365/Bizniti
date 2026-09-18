import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
  width: 180,
  height: 180,
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 110,
          background: '#0b0f19',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#d8f26b',
          borderRadius: 36,
          fontWeight: 900,
          fontFamily: 'sans-serif',
          letterSpacing: '-0.05em',
        }}
      >
        <span style={{ color: '#0f52ba' }}>B</span>N
      </div>
    ),
    {
      ...size,
    }
  );
}
