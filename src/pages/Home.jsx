import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { getTournaments } from '../services/api'
import TopBar from '../components/TopBar'
import TournamentCard from '../components/TournamentCard'
import BottomNav from '../components/BottomNav'

export default function Home() {
  const navigate = useNavigate()
  const { user } = useAuth()
  const [tournaments, setTournaments] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getTournaments()
      .then(res => setTournaments(res.data.tournaments))
      .catch(err => console.error(err))
      .finally(() => setLoading(false))
  }, [])

  const featured = tournaments[0]
  const upcoming = tournaments.slice(1, 4)

  const iconMap = { classic: '🎯', flash: '⚡', vip: '🏆', free: '🆓' }
  const bgMap = {
    classic: 'rgba(232,25,44,0.15)',
    flash: 'rgba(245,166,35,0.15)',
    vip: 'rgba(139,92,246,0.15)',
    free: 'rgba(0,214,143,0.12)',
  }

  const formatTournament = (t) => ({
    id: t.id,
    icon: iconMap[t.type] || '🎯',
    iconBg: bgMap[t.type] || 'rgba(232,25,44,0.15)',
    name: t.name,
    game: t.game,
    format: t.format,
    time: new Date(t.starts_at).toLocaleDateString('fr-FR', { weekday: 'short', hour: '2-digit', minute: '2-digit' }),
    prize: `${t.prize_pool.toLocaleString()}f`,
    spots: `${t.max_players - t.current_players} places restantes`,
    spotsColor: (t.max_players - t.current_players) <= 5 ? 'var(--red)' : undefined,
  })

  return (
    <div style={{ paddingBottom: 80 }}>
      <TopBar />

      {loading ? (
        <div style={{ textAlign: 'center', padding: 40, color: 'var(--text3)' }}>Chargement...</div>
      ) : (
        <>
          {featured && (
            <div onClick={() => navigate(`/tournament/${featured.id}`)} style={{
              margin: '0 16px 20px',
              background: 'linear-gradient(135deg, #1a0a0e, #200a14)',
              border: '1px solid rgba(232,25,44,0.3)',
              borderRadius: 16, padding: 20,
              position: 'relative', overflow: 'hidden', cursor: 'pointer',
            }}>
              <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: 2, color: 'var(--red2)', textTransform: 'uppercase', marginBottom: 8 }}>
                🔥 TOURNOI VEDETTE
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 700, color: 'var(--text)', lineHeight: 1.1, marginBottom: 10 }}>
                {featured.name.toUpperCase()}
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 32, fontWeight: 700, color: 'var(--gold)', marginBottom: 4 }}>
                {featured.prize_pool.toLocaleString()} FCFA
              </div>
              <div style={{ fontSize: 12, color: 'var(--text3)', marginBottom: 16 }}>
                Prize Pool · {featured.max_players} joueurs max
              </div>
              <div style={{ position: 'absolute', right: 20, top: '50%', transform: 'translateY(-50%)', fontSize: 48, opacity: 0.12 }}>🎮</div>
              <button style={{
                background: 'var(--red)', color: '#fff',
                fontFamily: 'var(--font-display)',
                fontSize: 14, fontWeight: 700, letterSpacing: '1.5px',
                padding: '10px 24px', borderRadius: 8, textTransform: 'uppercase',
              }}>REJOINDRE</button>
            </div>
          )}

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 16px', marginBottom: 12 }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase' }}>
              TOURNOIS À VENIR
            </div>
            <div style={{ fontSize: 12, color: 'var(--red)', cursor: 'pointer' }} onClick={() => navigate('/tournaments')}>
              VOIR TOUT →
            </div>
          </div>

          <div style={{ padding: '0 16px', display: 'flex', flexDirection: 'column', gap: 10 }}>
            {upcoming.map(t => <TournamentCard key={t.id} tournament={formatTournament(t)} />)}
          </div>
        </>
      )}

      <BottomNav />
    </div>
  )
}