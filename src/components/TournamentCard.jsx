import { useNavigate } from 'react-router-dom'

export default function TournamentCard({ tournament }) {
  const navigate = useNavigate()
  const { id, icon, iconBg, name, game, format, time, prize, spots, spotsColor } = tournament

  return (
    <div
      onClick={() => navigate(`/tournament/${id}`)}
      style={{
        background: 'var(--card)',
        border: '1px solid var(--border)',
        borderRadius: 12,
        padding: '14px 16px',
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        cursor: 'pointer',
      }}
    >
      <div style={{
        width: 44, height: 44, borderRadius: 10,
        background: iconBg,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 20, flexShrink: 0,
      }}>{icon}</div>

      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          fontFamily: 'var(--font-display)',
          fontSize: 15, fontWeight: 700,
          color: 'var(--text)', marginBottom: 2,
        }}>{name}</div>
        <div style={{ fontSize: 11, color: 'var(--text3)' }}>
          {game} · {format} · {time}
        </div>
      </div>

      <div style={{ textAlign: 'right', flexShrink: 0 }}>
        <div style={{
          fontFamily: 'var(--font-display)',
          fontSize: 15, fontWeight: 700,
          color: 'var(--gold)', marginBottom: 2,
        }}>{prize}</div>
        <div style={{ fontSize: 11, color: spotsColor || 'var(--text3)' }}>
          {spots}
        </div>
      </div>
    </div>
  )
}