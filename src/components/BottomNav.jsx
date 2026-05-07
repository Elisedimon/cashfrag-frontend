import { useNavigate, useLocation } from 'react-router-dom'

const tabs = [
  { path: '/home', icon: '🔥', label: 'Accueil' },
  { path: '/tournaments', icon: '🏆', label: 'Tournois' },
  { path: '/leaderboard', icon: '📊', label: 'Classement' },
  { path: '/profile', icon: '👤', label: 'Profil' },
]

export default function BottomNav() {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <nav style={{
      display: 'flex',
      background: 'var(--bg2)',
      borderTop: '1px solid var(--border)',
      padding: '10px 0 24px',
      position: 'fixed',
      bottom: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      width: '100%',
      maxWidth: '430px',
      zIndex: 100,
    }}>
      {tabs.map(tab => {
        const active = location.pathname === tab.path
        return (
          <div
            key={tab.path}
            onClick={() => navigate(tab.path)}
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '4px',
              cursor: 'pointer',
              padding: '4px 0',
            }}
          >
            <span style={{ fontSize: '20px' }}>{tab.icon}</span>
            <span style={{
              fontSize: '10px',
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              color: active ? 'var(--red)' : 'var(--text3)',
            }}>
              {tab.label}
            </span>
          </div>
        )
      })}
    </nav>
  )
}