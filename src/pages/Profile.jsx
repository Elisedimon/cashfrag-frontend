import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import BottomNav from '../components/BottomNav'

export default function Profile() {
  const navigate = useNavigate()
  const { user, logout } = useAuth()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  const pseudo = user?.pseudo || 'KingSlayer229'
  const initial = pseudo[0].toUpperCase()

  return (
    <div style={{ paddingBottom: 80 }}>
      <div style={{
        padding: '52px 20px 24px',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', background: 'var(--bg)',
      }}>
        <div style={{
          width: 72, height: 72, borderRadius: '50%',
          background: 'linear-gradient(135deg, #e8192c, #8b5cf6)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'var(--font-display)', fontSize: 30, fontWeight: 700,
          color: '#fff', marginBottom: 12,
        }}>{initial}</div>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, color: 'var(--text)', marginBottom: 4 }}>
          {pseudo}
        </div>
        <div style={{ fontSize: 12, color: 'var(--text3)', marginBottom: 10 }}>
          {user?.country || 'Bénin'}
        </div>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          background: 'rgba(245,166,35,0.12)', border: '1px solid rgba(245,166,35,0.3)',
          borderRadius: 20, padding: '4px 14px',
          fontSize: 12, fontWeight: 700, color: 'var(--gold)', letterSpacing: 1,
        }}>⭐ {user?.level || 'Bronze'}</div>
      </div>

      {/* Stats */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, padding: '0 16px' }}>
        {[
          { val: user?.wins || 0, label: 'Victoires', color: 'var(--green)' },
          { val: user?.tournaments_played || 0, label: 'Tournois joués', color: 'var(--text)' },
          { val: user?.wins && user?.tournaments_played ? Math.round((user.wins / user.tournaments_played) * 100) + '%' : '0%', label: 'Taux victoire', color: 'var(--red)' },
          { val: (user?.total_earned || 0).toLocaleString() + 'f', label: 'Total gagné', color: 'var(--gold)' },
        ].map((s, i) => (
          <div key={i} style={{
            flex: '1 1 calc(50% - 5px)',
            background: 'var(--card)', border: '1px solid var(--border)',
            borderRadius: 12, padding: 12, textAlign: 'center',
          }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, color: s.color, lineHeight: 1, marginBottom: 4 }}>
              {s.val}
            </div>
            <div style={{ fontSize: 10, color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: 1 }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* Portefeuille */}
      <div style={{
        margin: '16px 16px 0',
        background: 'linear-gradient(135deg, #0d1a0f, #0a1a12)',
        border: '1px solid rgba(0,214,143,0.2)',
        borderRadius: 14, padding: '18px 20px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <div>
          <div style={{ fontSize: 10, color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: 6 }}>
            MON PORTEFEUILLE
          </div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 30, fontWeight: 700, color: 'var(--green)' }}>
            {(user?.wallet_balance || 0).toLocaleString()}
          </div>
          <div style={{ fontSize: 12, color: 'var(--text3)' }}>FCFA disponibles</div>
        </div>
        <button style={{
          background: 'var(--green)', color: '#0a1a12',
          fontFamily: 'var(--font-display)',
          fontSize: 13, fontWeight: 700, letterSpacing: 1,
          padding: '10px 18px', borderRadius: 10, textTransform: 'uppercase',
        }}>RETIRER</button>
      </div>

      {/* Déconnexion */}
      <div style={{ padding: '24px 16px 0' }}>
        <button onClick={handleLogout} style={{
          width: '100%', background: 'transparent',
          border: '1px solid var(--border2)', borderRadius: 12, padding: 14,
          color: 'var(--text3)', fontSize: 14, fontWeight: 500,
          fontFamily: 'var(--font-body)',
        }}>🚪 Se déconnecter</button>
      </div>

      <BottomNav />
    </div>
  )
}