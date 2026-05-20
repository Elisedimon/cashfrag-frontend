import { useNavigate } from 'react-router-dom'
import TopBar from '../components/TopBar'
import BottomNav from '../components/BottomNav'

const MINI = [
  { id: '1v1-sniper', icon: '🎯', accent: 'var(--red)', bg: 'rgba(255,31,53,0.12)', name: '1V1 SNIPER', meta: '1 contre 1 · Précision max', price: '800f/joueur' },
  { id: '1v1-shotgun', icon: '💥', accent: 'var(--gold)', bg: 'rgba(255,182,39,0.12)', name: '1V1 SHOTGUN', meta: '1 contre 1 · Combat rapproché', price: '800f/joueur' },
  { id: '5v5-rd', icon: '💣', accent: 'var(--purple)', bg: 'rgba(124,92,252,0.12)', name: '5V5 R&D', meta: 'Équipe de 5 · Tactique', price: '4 000f/équipe' },
  { id: '5v5-controle', icon: '🏴', accent: 'var(--cyan)', bg: 'rgba(0,212,255,0.12)', name: '5V5 CONTRÔLE', meta: 'Équipe de 5 · Zones', price: '4 000f/équipe' },
]

const SOON = [
  { icon: '👤', name: 'Solo Battle Royale' },
  { icon: '👥', name: 'Duo Battle Royale' },
  { icon: '🪂', name: 'Squad Battle Royale' },
]

export default function Home() {
  const navigate = useNavigate()

  return (
    <div style={{ paddingBottom: 90, background: 'var(--bg)', minHeight: '100vh' }}>
      <TopBar />

      {/* BANNER 1v1 */}
      <div style={{ padding: '0 16px 12px' }}>
        <div onClick={() => navigate('/tournament/v1-classique')} style={{
          borderRadius: 22, overflow: 'hidden', position: 'relative',
          minHeight: 190, cursor: 'pointer', marginBottom: 12,
          background: 'linear-gradient(135deg, #0d0005, #1e0010, #2a0018)',
          border: '1px solid rgba(255,31,53,0.2)',
        }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,31,53,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,31,53,0.05) 1px,transparent 1px)', backgroundSize: '28px 28px' }} />
          <div style={{ position: 'absolute', top: -50, right: -50, width: 180, height: 180, borderRadius: '50%', background: 'radial-gradient(circle,rgba(255,31,53,0.35) 0%,transparent 70%)' }} />
          <div style={{ position: 'relative', zIndex: 2, padding: '22px 20px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(255,31,53,0.15)', border: '1px solid rgba(255,31,53,0.4)', borderRadius: 20, padding: '4px 12px', marginBottom: 12 }}>
              <div style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--red)' }} />
              <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: 2, color: '#ff4d5e', textTransform: 'uppercase' }}>DUEL INTENSE</span>
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 44, fontWeight: 900, lineHeight: 0.9, marginBottom: 8, letterSpacing: -1 }}>
              <span style={{ color: '#fff' }}>1V1 </span>
              <span style={{ color: 'var(--red)', textShadow: '0 0 20px rgba(255,31,53,0.6)' }}>CLASH</span>
            </div>
            <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.45)', letterSpacing: '1.5px', marginBottom: 18, textTransform: 'uppercase' }}>
              AFFRONTE TON ADVERSAIRE · PROUVE TON SKILL
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 3 }}>MISE PAR JOUEUR</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 900, color: 'var(--gold)' }}>1 300 <span style={{ fontSize: 13 }}>FCFA</span></div>
              </div>
              <button style={{ background: 'linear-gradient(135deg, var(--red), #cc0018)', border: 'none', borderRadius: 10, padding: '11px 20px', color: '#fff', fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 800, letterSpacing: '1.5px', boxShadow: '0 4px 16px rgba(255,31,53,0.45)' }}>JOUER →</button>
            </div>
          </div>
        </div>

        {/* BANNER 5v5 */}
        <div onClick={() => navigate('/tournament/5v5-squad')} style={{
          borderRadius: 22, overflow: 'hidden', position: 'relative',
          minHeight: 190, cursor: 'pointer',
          background: 'linear-gradient(135deg, #03001a, #0a0530, #120840)',
          border: '1px solid rgba(124,92,252,0.2)',
        }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(124,92,252,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(124,92,252,0.06) 1px,transparent 1px)', backgroundSize: '28px 28px' }} />
          <div style={{ position: 'absolute', top: -50, right: -50, width: 180, height: 180, borderRadius: '50%', background: 'radial-gradient(circle,rgba(124,92,252,0.4) 0%,transparent 70%)' }} />
          <div style={{ position: 'relative', zIndex: 2, padding: '22px 20px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(124,92,252,0.15)', border: '1px solid rgba(124,92,252,0.4)', borderRadius: 20, padding: '4px 12px', marginBottom: 12 }}>
              <div style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--purple)' }} />
              <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: 2, color: '#a78bfa', textTransform: 'uppercase' }}>GUERRE D'ÉQUIPE</span>
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 44, fontWeight: 900, lineHeight: 0.9, marginBottom: 8, letterSpacing: -1 }}>
              <span style={{ color: '#fff' }}>5V5 </span>
              <span style={{ color: 'var(--purple)', textShadow: '0 0 20px rgba(124,92,252,0.6)' }}>SQUAD</span>
            </div>
            <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.45)', letterSpacing: '1.5px', marginBottom: 18, textTransform: 'uppercase' }}>
              FORME TON ÉQUIPE · DOMINE LE TERRAIN
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 3 }}>MISE PAR JOUEUR</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 900, color: 'var(--gold)' }}>1 000 <span style={{ fontSize: 13 }}>FCFA</span></div>
              </div>
              <button style={{ background: 'linear-gradient(135deg, var(--purple), #5a3cc4)', border: 'none', borderRadius: 10, padding: '11px 20px', color: '#fff', fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 800, letterSpacing: '1.5px', boxShadow: '0 4px 16px rgba(124,92,252,0.45)' }}>JOUER →</button>
            </div>
          </div>
        </div>
      </div>

      {/* AUTRES MODES */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 16px', marginBottom: 10 }}>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 12, fontWeight: 700, letterSpacing: 3, color: 'var(--text2)', textTransform: 'uppercase' }}>AUTRES MODES</div>
        <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, var(--red), transparent)', marginLeft: 12 }} />
      </div>

      <div style={{ padding: '0 16px', display: 'flex', flexDirection: 'column', gap: 9 }}>
        {MINI.map(t => (
          <div key={t.id} onClick={() => navigate(`/tournament/${t.id}`)} style={{
            background: 'linear-gradient(135deg, var(--card), var(--bg3))',
            border: '1px solid var(--border)', borderRadius: 14,
            padding: '13px 14px', display: 'flex', alignItems: 'center',
            gap: 12, cursor: 'pointer', position: 'relative', overflow: 'hidden',
          }}>
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 3, background: t.accent, borderRadius: '2px 0 0 2px' }} />
            <div style={{ width: 44, height: 44, borderRadius: 11, background: t.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>{t.icon}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 700, color: 'var(--text)', marginBottom: 2 }}>{t.name}</div>
              <div style={{ fontSize: 10, color: 'var(--text3)' }}>{t.meta}</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 700, color: 'var(--gold)', marginBottom: 3 }}>{t.price}</div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 9, fontWeight: 700, color: 'var(--green)' }}>
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--green)', display: 'inline-block' }} />LIVE
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* BIENTÔT */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '22px 16px 10px' }}>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 12, fontWeight: 700, letterSpacing: 3, color: 'var(--text2)', textTransform: 'uppercase' }}>BIENTÔT</div>
        <div style={{ fontSize: 9, background: 'rgba(255,182,39,0.1)', border: '1px solid rgba(255,182,39,0.2)', color: 'var(--gold)', padding: '3px 10px', borderRadius: 20, fontWeight: 700, letterSpacing: 1 }}>🔒 PROCHAINEMENT</div>
      </div>

      <div style={{ padding: '0 16px', display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 16 }}>
        {SOON.map((t, i) => (
          <div key={i} style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 14, padding: '13px 14px', display: 'flex', alignItems: 'center', gap: 12, opacity: 0.4 }}>
            <div style={{ width: 44, height: 44, borderRadius: 11, background: 'rgba(255,255,255,0.04)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>{t.icon}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 700, color: 'var(--text2)' }}>{t.name}</div>
              <div style={{ fontSize: 10, color: 'var(--text3)' }}>Bientôt disponible</div>
            </div>
            <div style={{ fontSize: 9, background: 'rgba(255,255,255,0.05)', color: 'var(--text3)', padding: '3px 9px', borderRadius: 20, fontWeight: 700 }}>🔒</div>
          </div>
        ))}
      </div>

      <BottomNav />
    </div>
  )
}
