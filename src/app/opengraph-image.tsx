import { ImageResponse } from 'next/og';
 
// Route segment config
export const runtime = 'edge';
 
// Image metadata
export const alt = 'SoftSell - Buy & Sell Software Licenses';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';
 
// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      // Background
      <div
        style={{
          fontSize: 128,
          background: 'linear-gradient(to bottom, #eef7ff, #ffffff)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px',
        }}
      >
        {/* Logo and brand */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '40px' }}>
          <div style={{ 
            background: '#1a6cf8',
            width: '120px',
            height: '120px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '16px',
            color: 'white',
            fontWeight: 'bold',
            marginRight: '24px',
          }}>
            S
          </div>
          <div style={{ 
            fontSize: '80px',
            fontWeight: 'bold',
            color: '#23252e'
          }}>
            SoftSell
          </div>
        </div>
        
        {/* Tagline */}
        <div style={{ 
          fontSize: '48px',
          fontWeight: 'bold',
          color: '#464c5e',
          textAlign: 'center',
          maxWidth: '900px'
        }}>
          Buy & Sell Software Licenses at Unbeatable Prices
        </div>
        
        {/* Highlight */}
        <div style={{ 
          marginTop: '40px',
          background: '#1a6cf8',
          color: 'white',
          padding: '16px 32px',
          borderRadius: '16px',
          fontSize: '40px',
          fontWeight: 'bold'
        }}>
          Save up to 70% on software costs
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}