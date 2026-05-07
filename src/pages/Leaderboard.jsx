import TopBar from '../components/TopBar'
import BottomNav from '../components/BottomNav'

const TOP3 = [
  { rank: '🥈', initial: 'D', name: 'DarkBoss', amount: '+87k', avatarBg: 'linear-gradient(135deg,#8a9bb5,#b0c4d8)', barH: 35, barBg: 'rgba(138,155,181,0.2)', barBorder: 'rgba(138,155,181,0.3)' },
  { rank: '👑', initial: 'K', name: 'KingSlayer', amount: '+134k', avatarBg: 'linear-gradient(135deg,#f5a623,#ffc851)', barH: 50, barBg: 'rgba(245,166,35,0.2)', barBorder: 'rgba(245,166,35,0.3)' },
  { rank: '🥉', initial: 'Z', name: 'ZeroMiss', amount: '+64k', avatarBg: 'linear-gradient(135deg,#9c6b3c,#c48a56)', barH: 25, barBg: 'rgba(156,107,60,0.15)', barBorder: 'rgba(156,107,60,0.25)' },
]

const OTHERS = [
  { rank: 4, initial: 'A', name: 'AlphaSniper', wins: '9 victoires', amount: '+52 000f' },
  { rank: 5, initial: 'G', name: 'GhostCI', wins: '7 victoires', amount: '+41 000f' },
  { rank: 6, initial: 'N', name: 'NightWolf', wins: '6 victoires', amount: '+33 500f' },
  { rank: 7, initial: 'F', name: 'Fury229', wins: '5 victoires', amount: '+26 000f' },
  { rank: 8, initial: 'X', name: 'XcelGamer', wins: '5 victoires', amount: '+21 000f' },
]

export default function Leaderboard() {
  return (
    <div style={{ paddingBottom: 80 }}>
      <TopBar />

      <div style={{ textAlign: 'center', padding: '0 16px 4px' }}>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, color: 'var(--text)' }}>
          🏆 CLASSEMENT
        </div>
        <div style={{ fontSize: 12, color: 'var(--text3)' }}>Top joueurs — Mai 2026</div>
      </div>

      {/* Podium */}
      <div style={{
        display: 'flex', alignItems: 'flex-end',
        justifyContent: 'center', gap: 12,
        padding: '20px 0 16px',
      }}>
        {TOP3.map((p, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
            <span style={{ fontSize: 18 }}>{p.rank}</span>
            <div style={{
              width: i === 1 ? 56 : 44,
              height: i === 1 ? 56 : 44,
              borderRadius: '50%',
              background: p.avatarBg,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--font-display)',
              fontSize: i === 1 ? 20 : 17, fontWeight: 700, color: '#fff',
            }}>{p.initial}</div>
            <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--text2)' }}>{p.name}</div>
            <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--gold)' }}>{p.amount}</div>
            <div style={{
              width: 70, borderRadius: '4px 4px 0 0',
              height: p.barH,
              background: p.barBg,
              border: `1px solid ${p.barBorder}`,
            }} />
          </div>
        ))}
      </div>

      {/* Liste */}
      <div style={{ padding: '0 16px', display: 'flex', flexDirection: 'column', gap: 8 }}>
        {OTHERS.map((p, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: 12,
            background: 'var(--card)', border: '1px solid var(--border)',
            borderRadius: 10, padding: '12px 14px',
          }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text3)', width: 18, textAlign: 'center' }}>{p.rank}</div>
            <div style={{
              width: 34, height: 34, borderRadius: '50%',
              background: 'var(--bg3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 700, color: 'var(--text2)',
            }}>{p.initial}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)' }}>{p.name}</div>
              <div style={{ fontSize: 11, color: 'var(--text3)' }}>{p.wins}</div>
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 700, color: 'var(--green)' }}>{p.amount}</div>
          </div>
        ))}
      </div>

      <BottomNav />
    </div>
  )
}