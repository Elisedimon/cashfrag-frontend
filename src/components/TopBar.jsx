import { useNavigate } from 'react-router-dom'

export default function TopBar({ showBack = false, title = null }) {
  const navigate = useNavigate()

  return (
    <div style={{
      padding: '52px 20px 16px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: 'var(--bg)',
      position: 'sticky',
      top: 0,
      zIndex: 50,
    }}>
      {showBack ? (
        <div
          onClick={() => navigate(-1)}
          style={{
            width: 36, height: 36,
            borderRadius: 10,
            background: 'var(--card)',
            border: '1px solid var(--border)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', fontSize: 18,
          }}
        >←</div>
      ) : (
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 700 }}>
          <span style={{ color: 'var(--red)' }}>CASH</span>
          <span style={{ color: 'var(--text)' }}>FRAG</span>
        </div>
      )}

      {title && (
        <div style={{
          fontFamily: 'var(--font-display)',
          fontSize: 18, fontWeight: 700,
          letterSpacing: '1.5px',
          textTransform: 'uppercase',
          color: 'var(--text)',
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
        }}>{title}</div>
      )}

      <div
        onClick={() => navigate('/profile')}
        style={{
          width: 38, height: 38, borderRadius: '50%',
          background: 'linear-gradient(135deg, #e8192c, #8b5cf6)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'var(--font-display)',
          fontSize: 16, fontWeight: 700, color: '#fff',
          cursor: 'pointer',
        }}
      >K</div>
    </div>
  )
}