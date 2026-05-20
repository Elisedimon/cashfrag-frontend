import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function TopBar({ showBack = false, title = null }) {
  const navigate = useNavigate()
  const { user } = useAuth()
  const initial = user?.pseudo?.[0]?.toUpperCase() || 'K'

  return (
    <div style={{
      padding: '48px 20px 14px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: 'var(--bg)',
      position: 'sticky', top: 0, zIndex: 50,
      flexShrink: 0,
    }}>
      {showBack ? (
        <div onClick={() => navigate(-1)} style={{
          width: 34, height: 34, borderRadius: 10,
          background: 'var(--card)', border: '1px solid var(--border2)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer', fontSize: 18, color: 'var(--text)',
        }}>←</div>
      ) : (
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 900, letterSpacing: 1 }}>
          <span style={{ color: 'var(--red)' }}>CASH</span>
          <span style={{ color: '#fff' }}>FRAG</span>
        </div>
      )}

      {title && (
        <div style={{
          fontFamily: 'var(--font-display)', fontSize: 18,
          fontWeight: 800, letterSpacing: '1.5px',
          textTransform: 'uppercase', color: 'var(--text)',
          position: 'absolute', left: '50%', transform: 'translateX(-50%)',
        }}>{title}</div>
      )}

      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        {!showBack && (
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 13, color: 'var(--gold)', fontWeight: 800 }}>
            {(user?.wallet_balance || 0).toLocaleString()}f
          </div>
        )}
        <div onClick={() => navigate('/profile')} style={{
          width: 36, height: 36, borderRadius: '50%',
          background: 'linear-gradient(135deg, var(--red), var(--purple))',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'var(--font-display)', fontSize: 15,
          fontWeight: 800, color: '#fff', cursor: 'pointer',
        }}>{initial}</div>
      </div>
    </div>
  )
}