import { useNavigate } from 'react-router-dom'
import TopBar from '../components/TopBar'
import BottomNav from '../components/BottomNav'

const MINI_TOURNAMENTS = [
  {
    id: '1v1-sniper',
    icon: '🎯',
    iconBg: 'rgba(232,25,44,0.15)',
    name: '1V1 SNIPER',
    desc: 'Précision maximale',
    format: '1 contre 1',
    price: '800 FCFA/joueur',
  },
  {
    id: '1v1-shotgun',
    icon: '💥',
    iconBg: 'rgba(245,166,35,0.15)',
    name: '1V1 SHOTGUN',
    desc: 'Combat rapproché',
    format: '1 contre 1',
    price: '800 FCFA/joueur',
  },
  {
    id: '5v5-rd',
    icon: '💣',
    iconBg: 'rgba(139,92,246,0.15)',
    name: '5V5 RECHERCHE & DESTRUCTION',
    desc: 'Tactique et coordination',
    format: 'Équipe de 5',
    price: '4 000 FCFA/équipe',
  },
  {
    id: '5v5-controle',
    icon: '🏴',
    iconBg: 'rgba(0,214,143,0.15)',
    name: '5V5 CONTRÔLE',
    desc: 'Dominez les zones',
    format: 'Équipe de 5',
    price: '4 000 FCFA/équipe',
  },
]

const COMING_SOON = [
  { icon: '👤', name: 'Solo Battle Royale', desc: 'Bientôt disponible' },
  { icon: '👥', name: 'Duo Battle Royale', desc: 'Bientôt disponible' },
  { icon: '🪂', name: 'Squad Battle Royale', desc: 'Bientôt disponible' },
]

export default function Home() {
  const navigate = useNavigate()

  return (
    <div style={{ paddingBottom: 90, background: 'var(--bg)', minHeight: '100vh' }}>
      <TopBar />

      {/* ===== BANNER 1 — 1V1 ===== */}
      <div style={{ padding: '0 16px 14px' }}>
        <div
          onClick={() => navigate('/register/v1-classique')}
          style={{
            borderRadius: 24,
            overflow: 'hidden',
            position: 'relative',
            cursor: 'pointer',
            minHeight: 200,
            background: 'linear-gradient(135deg, #0d0005 0%, #1a0010 40%, #2d0020 100%)',
            border: '1px solid rgba(232,25,44,0.25)',
            boxShadow: '0 0 40px rgba(232,25,44,0.15), inset 0 0 60px rgba(232,25,44,0.05)',
          }}
        >
          {/* Grille futuriste */}
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: `
              linear-gradient(rgba(232,25,44,0.06) 1px, transparent 1px),
              linear-gradient(90deg, rgba(232,25,44,0.06) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px',
          }} />

          {/* Cercles lumineux */}
          <div style={{
            position: 'absolute',
            top: -60, right: -60,
            width: 200, height: 200,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(232,25,44,0.3) 0%, transparent 70%)',
          }} />
          <div style={{
            position: 'absolute',
            bottom: -40, left: -40,
            width: 150, height: 150,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(232,25,44,0.15) 0%, transparent 70%)',
          }} />

          {/* Contenu */}
          <div style={{ position: 'relative', zIndex: 2, padding: '28px 24px' }}>
            {/* Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              background: 'rgba(232,25,44,0.2)',
              border: '1px solid rgba(232,25,44,0.5)',
              borderRadius: 20,
              padding: '4px 12px',
              marginBottom: 14,
            }}>
              <div style={{
                width: 6, height: 6,
                borderRadius: '50%',
                background: '#e8192c',
                boxShadow: '0 0 6px #e8192c',
              }} />
              <span style={{
                fontSize: 10, fontWeight: 700,
                letterSpacing: 2, color: '#ff4455',
                textTransform: 'uppercase',
              }}>DUEL INTENSE</span>
            </div>

            {/* Titre */}
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: 42, fontWeight: 700,
              lineHeight: 0.95,
              marginBottom: 10,
              letterSpacing: -1,
            }}>
              <span style={{
                color: '#fff',
                textShadow: '0 0 30px rgba(255,255,255,0.3)',
              }}>1V1 </span>
              <span style={{
                color: '#e8192c',
                textShadow: '0 0 20px rgba(232,25,44,0.8)',
              }}>CLASH</span>
            </div>

            <div style={{
              fontSize: 12, color: 'rgba(255,255,255,0.5)',
              marginBottom: 20, letterSpacing: 1,
            }}>
              AFFRONTE TON ADVERSAIRE · PROUVE TON SKILL
            </div>

            {/* Prix + Bouton */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)', marginBottom: 2 }}>
                  MISE PAR JOUEUR
                </div>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 26, fontWeight: 700,
                  color: '#f5a623',
                  textShadow: '0 0 15px rgba(245,166,35,0.6)',
                }}>1 300 <span style={{ fontSize: 14 }}>FCFA</span></div>
              </div>

              <button style={{
                background: 'linear-gradient(135deg, #e8192c, #ff4455)',
                border: 'none',
                borderRadius: 12,
                padding: '12px 22px',
                color: '#fff',
                fontFamily: 'var(--font-display)',
                fontSize: 14, fontWeight: 700,
                letterSpacing: 1.5,
                cursor: 'pointer',
                boxShadow: '0 4px 20px rgba(232,25,44,0.5)',
                textTransform: 'uppercase',
              }}>JOUER →</button>
            </div>
          </div>
        </div>
      </div>

      {/* ===== BANNER 2 — 5V5 ===== */}
      <div style={{ padding: '0 16px 24px' }}>
        <div
          onClick={() => navigate('/register/5v5-squad')}
          style={{
            borderRadius: 24,
            overflow: 'hidden',
            position: 'relative',
            cursor: 'pointer',
            minHeight: 200,
            background: 'linear-gradient(135deg, #04001a 0%, #0d0530 40%, #150a40 100%)',
            border: '1px solid rgba(139,92,246,0.25)',
            boxShadow: '0 0 40px rgba(139,92,246,0.15), inset 0 0 60px rgba(139,92,246,0.05)',
          }}
        >
          {/* Grille futuriste */}
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: `
              linear-gradient(rgba(139,92,246,0.07) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139,92,246,0.07) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px',
          }} />

          {/* Cercles lumineux */}
          <div style={{
            position: 'absolute',
            top: -60, right: -60,
            width: 220, height: 220,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(139,92,246,0.35) 0%, transparent 70%)',
          }} />
          <div style={{
            position: 'absolute',
            bottom: -50, left: -50,
            width: 180, height: 180,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(99,52,206,0.2) 0%, transparent 70%)',
          }} />

          {/* Contenu */}
          <div style={{ position: 'relative', zIndex: 2, padding: '28px 24px' }}>
            {/* Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              background: 'rgba(139,92,246,0.2)',
              border: '1px solid rgba(139,92,246,0.5)',
              borderRadius: 20,
              padding: '4px 12px',
              marginBottom: 14,
            }}>
              <div style={{
                width: 6, height: 6,
                borderRadius: '50%',
                background: '#8b5cf6',
                boxShadow: '0 0 6px #8b5cf6',
              }} />
              <span style={{
                fontSize: 10, fontWeight: 700,
                letterSpacing: 2, color: '#a78bfa',
                textTransform: 'uppercase',
              }}>GUERRE D'ÉQUIPE</span>
            </div>

            {/* Titre */}
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: 42, fontWeight: 700,
              lineHeight: 0.95,
              marginBottom: 10,
              letterSpacing: -1,
            }}>
              <span style={{
                color: '#fff',
                textShadow: '0 0 30px rgba(255,255,255,0.3)',
              }}>5V5 </span>
              <span style={{
                color: '#8b5cf6',
                textShadow: '0 0 20px rgba(139,92,246,0.8)',
              }}>SQUAD</span>
            </div>

            <div style={{
              fontSize: 12, color: 'rgba(255,255,255,0.5)',
              marginBottom: 20, letterSpacing: 1,
            }}>
              FORME TON ÉQUIPE · DOMINE LE TERRAIN
            </div>

            {/* Prix + Bouton */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)', marginBottom: 2 }}>
                  MISE PAR ÉQUIPE
                </div>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 26, fontWeight: 700,
                  color: '#f5a623',
                  textShadow: '0 0 15px rgba(245,166,35,0.6)',
                }}>5 000 <span style={{ fontSize: 14 }}>FCFA</span></div>
              </div>

              <button style={{
                background: 'linear-gradient(135deg, #7c3aed, #8b5cf6)',
                border: 'none',
                borderRadius: 12,
                padding: '12px 22px',
                color: '#fff',
                fontFamily: 'var(--font-display)',
                fontSize: 14, fontWeight: 700,
                letterSpacing: 1.5,
                cursor: 'pointer',
                boxShadow: '0 4px 20px rgba(139,92,246,0.5)',
                textTransform: 'uppercase',
              }}>JOUER →</button>
            </div>
          </div>
        </div>
      </div>

      {/* ===== AUTRES TOURNOIS ===== */}
      <div style={{
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', padding: '0 16px', marginBottom: 12,
      }}>
        <div style={{
          fontFamily: 'var(--font-display)',
          fontSize: 13, fontWeight: 700,
          letterSpacing: 3, textTransform: 'uppercase',
          color: 'var(--text2)',
        }}>AUTRES MODES</div>
        <div style={{
          width: 40, height: 1,
          background: 'linear-gradient(90deg, var(--red), transparent)',
        }} />
      </div>

      <div style={{ padding: '0 16px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {MINI_TOURNAMENTS.map((t) => (
          <div
            key={t.id}
            onClick={() => navigate(`/register/${t.id}`)}
            style={{
              background: 'linear-gradient(135deg, var(--card), var(--bg3))',
              border: '1px solid var(--border)',
              borderRadius: 16,
              padding: '14px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Ligne colorée à gauche */}
            <div style={{
              position: 'absolute',
              left: 0, top: 0, bottom: 0,
              width: 3,
              background: t.iconBg.includes('232') ? 'var(--red)' :
                          t.iconBg.includes('245') ? 'var(--gold)' :
                          t.iconBg.includes('139') ? 'var(--purple)' : 'var(--green)',
              borderRadius: '3px 0 0 3px',
            }} />

            <div style={{
              width: 46, height: 46,
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
                color: 'var(--text)', marginBottom: 3,
              }}>{t.name}</div>
              <div style={{ fontSize: 11, color: 'var(--text3)' }}>
                {t.format} · {t.desc}
              </div>
            </div>

            <div style={{ textAlign: 'right', flexShrink: 0 }}>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: 13, fontWeight: 700,
                color: 'var(--gold)', marginBottom: 4,
              }}>{t.price}</div>
              <div style={{
                fontSize: 9, fontWeight: 700,
                color: 'var(--green)',
                letterSpacing: 1,
                textTransform: 'uppercase',
              }}>● LIVE</div>
            </div>
          </div>
        ))}
      </div>

      {/* ===== BIENTÔT DISPONIBLE ===== */}
      <div style={{
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', padding: '24px 16px 12px',
      }}>
        <div style={{
          fontFamily: 'var(--font-display)',
          fontSize: 13, fontWeight: 700,
          letterSpacing: 3, textTransform: 'uppercase',
          color: 'var(--text2)',
        }}>BIENTÔT</div>
        <div style={{
          fontSize: 9, fontWeight: 700,
          background: 'rgba(245,166,35,0.1)',
          border: '1px solid rgba(245,166,35,0.2)',
          color: 'var(--gold)',
          padding: '3px 10px', borderRadius: 20,
          letterSpacing: 2, textTransform: 'uppercase',
        }}>🔒 PROCHAINEMENT</div>
      </div>

      <div style={{ padding: '0 16px', display: 'flex', flexDirection: 'column', gap: 8 }}>
        {COMING_SOON.map((t, i) => (
          <div key={i} style={{
            background: 'var(--card)',
            border: '1px solid var(--border)',
            borderRadius: 14,
            padding: '14px 16px',
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            opacity: 0.45,
          }}>
            <div style={{
              width: 46, height: 46,
              borderRadius: 12,
              background: 'rgba(255,255,255,0.04)',
              display: 'flex', alignItems: 'center',
              justifyContent: 'center', fontSize: 20,
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
              fontSize: 9,
              background: 'rgba(255,255,255,0.05)',
              color: 'var(--text3)',
              padding: '4px 10px', borderRadius: 20,
              fontWeight: 700, letterSpacing: 1,
            }}>🔒</div>
          </div>
        ))}
      </div>

      <div style={{ height: 16 }} />
      <BottomNav />
    </div>
  )
}