import { useNavigate } from 'react-router-dom'
import TopBar from '../components/TopBar'
import BottomNav from '../components/BottomNav'

const MAIN_TOURNAMENTS = [
  {
    id: 'v1-classique',
    tag: '⚔️ 1V1 CLASSIQUE',
    title: '1V1\nCLASSIQUE',
    subtitle: 'Affronte un adversaire en duel direct',
    price: '1 300',
    unit: 'FCFA / joueur',
    gradient: 'linear-gradient(135deg, #1a0a0e, #200a14)',
    border: 'rgba(232,25,44,0.4)',
    icon: '🎮',
    available: true,
  },
  {
    id: '5v5-squad',
    tag: '🛡️ 5V5 SQUAD',
    title: '5V5\nSQUAD',
    subtitle: 'Forme ton équipe et domine le terrain',
    price: '5 000',
    unit: 'FCFA / équipe',
    gradient: 'linear-gradient(135deg, #0a0a1a, #10051a)',
    border: 'rgba(139,92,246,0.4)',
    icon: '👥',
    available: true,
  },
]

const MINI_TOURNAMENTS = [
  {
    id: '1v1-sniper',
    icon: '🎯',
    iconBg: 'rgba(232,25,44,0.15)',
    name: '1V1 SNIPER',
    desc: 'Précision maximale',
    format: '1 contre 1',
    price: '800 FCFA/joueur',
    available: true,
  },
  {
    id: '1v1-shotgun',
    icon: '💥',
    iconBg: 'rgba(245,166,35,0.15)',
    name: '1V1 SHOTGUN',
    desc: 'Combat rapproché',
    format: '1 contre 1',
    price: '800 FCFA/joueur',
    available: true,
  },
  {
    id: '5v5-rd',
    icon: '💣',
    iconBg: 'rgba(139,92,246,0.15)',
    name: '5V5 RECHERCHE & DESTRUCTION',
    desc: 'Tactique et coordination',
    format: 'Équipe de 5',
    price: '4 000 FCFA/équipe',
    available: true,
  },
  {
    id: '5v5-controle',
    icon: '🏴',
    iconBg: 'rgba(0,214,143,0.15)',
    name: '5V5 CONTRÔLE',
    desc: 'Dominez les zones',
    format: 'Équipe de 5',
    price: '4 000 FCFA/équipe',
    available: true,
  },
]

const COMING_SOON = [
  { icon: '👤', name: 'Solo BR', desc: 'Battle Royale Solo' },
  { icon: '👥', name: 'Duo BR', desc: 'Battle Royale Duo' },
  { icon: '🪂', name: 'Squad BR', desc: 'Battle Royale Squad' },
]

export default function Home() {
  const navigate = useNavigate()

  const handleTournamentClick = (tournament) => {
    navigate(`/tournament/${tournament.id}`)
  }

  return (
    <div style={{ paddingBottom: 80, background: 'var(--bg)', minHeight: '100vh' }}>
      <TopBar />

      {/* ===== 2 GRANDS BANNERS ===== */}
      <div style={{ padding: '0 16px', display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 24 }}>
        {MAIN_TOURNAMENTS.map((t) => (
          <div
            key={t.id}
            onClick={() => handleTournamentClick(t)}
            style={{
              background: t.gradient,
              border: `1px solid ${t.border}`,
              borderRadius: 20,
              padding: '24px 20px',
              position: 'relative',
              overflow: 'hidden',
              cursor: 'pointer',
              minHeight: 160,
            }}
          >
            {/* Cercle décoratif */}
            <div style={{
              position: 'absolute',
              top: -40, right: -40,
              width: 160, height: 160,
              borderRadius: '50%',
              background: t.border,
              opacity: 0.3,
            }} />

            {/* Tag */}
            <div style={{
              display: 'inline-block',
              fontSize: 10, fontWeight: 700,
              letterSpacing: 2,
              color: t.id === '5v5-squad' ? 'var(--purple)' : 'var(--red)',
              textTransform: 'uppercase',
              marginBottom: 10,
              background: t.id === '5v5-squad' ? 'rgba(139,92,246,0.15)' : 'rgba(232,25,44,0.15)',
              padding: '4px 10px',
              borderRadius: 20,
            }}>{t.tag}</div>

            {/* Titre */}
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: 36, fontWeight: 700,
              color: 'var(--text)',
              lineHeight: 1,
              marginBottom: 8,
              whiteSpace: 'pre-line',
            }}>{t.title}</div>

            {/* Sous-titre */}
            <div style={{
              fontSize: 12, color: 'var(--text3)',
              marginBottom: 16,
            }}>{t.subtitle}</div>

            {/* Prix */}
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: 28, fontWeight: 700,
                color: 'var(--gold)',
              }}>{t.price}</div>
              <div style={{ fontSize: 12, color: 'var(--text3)' }}>{t.unit}</div>
            </div>

            {/* Bouton */}
            <button style={{
              marginTop: 16,
              background: t.id === '5v5-squad' ? 'var(--purple)' : 'var(--red)',
              color: '#fff',
              fontFamily: 'var(--font-display)',
              fontSize: 13, fontWeight: 700,
              letterSpacing: 1.5,
              padding: '10px 22px',
              borderRadius: 8,
              textTransform: 'uppercase',
              border: 'none',
              cursor: 'pointer',
            }}>S'INSCRIRE →</button>

            {/* Icône décorative */}
            <div style={{
              position: 'absolute',
              right: 20, bottom: 20,
              fontSize: 52,
              opacity: 0.08,
            }}>{t.icon}</div>
          </div>
        ))}
      </div>

      {/* ===== MINI TOURNOIS ===== */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 16px',
        marginBottom: 12,
      }}>
        <div style={{
          fontFamily: 'var(--font-display)',
          fontSize: 15, fontWeight: 700,
          letterSpacing: 2,
          textTransform: 'uppercase',
          color: 'var(--text)',
        }}>AUTRES TOURNOIS</div>
      </div>

      <div style={{ padding: '0 16px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {MINI_TOURNAMENTS.map((t) => (
          <div
            key={t.id}
            onClick={() => handleTournamentClick(t)}
            style={{
              background: 'var(--card)',
              border: '1px solid var(--border)',
              borderRadius: 14,
              padding: '14px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              cursor: 'pointer',
            }}
          >
            <div style={{
              width: 48, height: 48,
              borderRadius: 12,
              background: t.iconBg,
              display: 'flex', alignItems: 'center',
              justifyContent: 'center',
              fontSize: 22, flexShrink: 0,
            }}>{t.icon}</div>

            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: 14, fontWeight: 700,
                color: 'var(--text)', marginBottom: 2,
              }}>{t.name}</div>
              <div style={{ fontSize: 11, color: 'var(--text3)' }}>
                {t.format} · {t.desc}
              </div>
            </div>

            <div style={{ textAlign: 'right', flexShrink: 0 }}>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: 13, fontWeight: 700,
                color: 'var(--gold)',
              }}>{t.price}</div>
              <div style={{
                fontSize: 10,
                color: 'var(--green)',
                fontWeight: 600,
                marginTop: 2,
              }}>DISPONIBLE</div>
            </div>
          </div>
        ))}
      </div>

      {/* ===== BIENTÔT DISPONIBLE ===== */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '24px 16px 12px',
      }}>
        <div style={{
          fontFamily: 'var(--font-display)',
          fontSize: 15, fontWeight: 700,
          letterSpacing: 2,
          textTransform: 'uppercase',
          color: 'var(--text)',
        }}>BIENTÔT DISPONIBLE</div>
        <div style={{
          fontSize: 10,
          background: 'rgba(245,166,35,0.15)',
          color: 'var(--gold)',
          padding: '3px 10px',
          borderRadius: 20,
          fontWeight: 600,
          letterSpacing: 1,
        }}>🔒 PROCHAINEMENT</div>
      </div>

      <div style={{ padding: '0 16px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {COMING_SOON.map((t, i) => (
          <div
            key={i}
            style={{
              background: 'var(--card)',
              border: '1px solid var(--border)',
              borderRadius: 14,
              padding: '14px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              opacity: 0.5,
              cursor: 'not-allowed',
            }}
          >
            <div style={{
              width: 48, height: 48,
              borderRadius: 12,
              background: 'rgba(255,255,255,0.05)',
              display: 'flex', alignItems: 'center',
              justifyContent: 'center',
              fontSize: 22, flexShrink: 0,
            }}>{t.icon}</div>

            <div style={{ flex: 1 }}>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: 14, fontWeight: 700,
                color: 'var(--text2)', marginBottom: 2,
              }}>{t.name}</div>
              <div style={{ fontSize: 11, color: 'var(--text3)' }}>{t.desc}</div>
            </div>

            <div style={{
              fontSize: 10,
              background: 'rgba(255,255,255,0.06)',
              color: 'var(--text3)',
              padding: '4px 10px',
              borderRadius: 20,
              fontWeight: 600,
              letterSpacing: 1,
              flexShrink: 0,
            }}>🔒 BIENTÔT</div>
          </div>
        ))}
      </div>

      <div style={{ height: 24 }} />
      <BottomNav />
    </div>
  )
}