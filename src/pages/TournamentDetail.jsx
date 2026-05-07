import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import TopBar from '../components/TopBar'
import BottomNav from '../components/BottomNav'

const REWARDS = [
  { place: '🥇 1ère place', amount: '32 500f', color: 'var(--gold)' },
  { place: '🥈 2ème place', amount: '19 500f', color: 'var(--text2)' },
  { place: '🥉 3ème place', amount: '13 000f', color: 'var(--gold2)' },
]

const PAYMENT_METHODS = [
  { icon: '🌊', label: 'Wave', bg: 'rgba(0,120,255,0.12)' },
  { icon: '🍊', label: 'Orange Money', bg: 'rgba(255,120,0,0.12)' },
  { icon: '📱', label: 'MTN Mobile Money', bg: 'rgba(255,200,0,0.12)' },
  { icon: '💰', label: 'Portefeuille (12 500f)', bg: 'rgba(0,214,143,0.12)' },
]

export default function TournamentDetail() {
  const navigate = useNavigate()
  const [seconds, setSeconds] = useState(2 * 3600 + 14 * 60 + 33)
  const [showModal, setShowModal] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [selectedPayment, setSelectedPayment] = useState(0)

  // Countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(s => s > 0 ? s - 1 : 0)
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const formatTime = (s) => {
    const h = Math.floor(s / 3600)
    const m = Math.floor((s % 3600) / 60)
    const sec = s % 60
    return `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(sec).padStart(2,'0')}`
  }

  const handleConfirm = () => {
    setShowModal(false)
    setShowSuccess(true)
  }

  return (
    <div style={{ paddingBottom: 80, position: 'relative' }}>
      <TopBar showBack title="Détail du Tournoi" />

      {/* Hero */}
      <div style={{
        margin: 16,
        background: 'linear-gradient(135deg, #1a0a0e, #16051a)',
        border: '1px solid rgba(139,92,246,0.2)',
        borderRadius: 16, padding: 20,
        textAlign: 'center',
      }}>
        <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: 2, color: 'var(--red)', textTransform: 'uppercase', marginBottom: 10 }}>
          CALL OF DUTY MOBILE · SOLO
        </div>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 700, color: 'var(--text)', marginBottom: 10 }}>
          GRAND PRIX AFRICA OPEN
        </div>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 40, fontWeight: 700, color: 'var(--gold)', marginBottom: 4 }}>
          65 000 FCFA
        </div>
        <div style={{ fontSize: 11, color: 'var(--text3)', marginBottom: 16 }}>Prize Pool total</div>

        {/* Stats */}
        <div style={{ display: 'flex', borderTop: '1px solid var(--border)', paddingTop: 14 }}>
          {[['50', 'Joueurs max'], ['1300f', 'Inscription'], ['38', 'Inscrits']].map(([val, lbl], i) => (
            <div key={i} style={{
              flex: 1, textAlign: 'center',
              borderLeft: i > 0 ? '1px solid var(--border)' : 'none',
            }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, color: 'var(--text)' }}>{val}</div>
              <div style={{ fontSize: 10, color: 'var(--text3)' }}>{lbl}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Countdown */}
      <div style={{
        margin: '0 16px 16px',
        background: 'var(--card)',
        border: '1px solid var(--border)',
        borderRadius: 12, padding: '14px 18px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <div>
          <div style={{ fontSize: 10, color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: 6 }}>
            DÉBUT DANS
          </div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 700, color: 'var(--red)', letterSpacing: 2 }}>
            {formatTime(seconds)}
          </div>
        </div>
        <span style={{ fontSize: 28, opacity: 0.5 }}>⏱️</span>
      </div>

      {/* Récompenses */}
      <div style={{ padding: '0 16px' }}>
        <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: 2, color: 'var(--text3)', textTransform: 'uppercase', marginBottom: 10 }}>
          RÉCOMPENSES
        </div>
        {REWARDS.map((r, i) => (
          <div key={i} style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            background: 'var(--card)', border: '1px solid var(--border)',
            borderRadius: 10, padding: '13px 16px', marginBottom: 8,
          }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)' }}>{r.place}</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 700, color: r.color }}>{r.amount}</div>
          </div>
        ))}
      </div>

      {/* Bouton inscription */}
      <button
        onClick={() => setShowModal(true)}
        style={{
          margin: '20px 16px',
          width: 'calc(100% - 32px)',
          background: 'var(--red)', color: '#fff',
          fontFamily: 'var(--font-display)',
          fontSize: 16, fontWeight: 700, letterSpacing: 2,
          padding: 16, borderRadius: 12,
          textTransform: 'uppercase', display: 'block',
        }}
      >S'INSCRIRE — 1300 FCFA</button>

      {/* Modal paiement */}
      {showModal && (
        <div
          onClick={e => e.target === e.currentTarget && setShowModal(false)}
          style={{
            position: 'fixed', top: 0, left: '50%', transform: 'translateX(-50%)',
            width: '100%', maxWidth: 430,
            height: '100%', background: 'rgba(0,0,0,0.7)',
            display: 'flex', alignItems: 'flex-end', zIndex: 100,
          }}
        >
          <div style={{
            width: '100%', background: 'var(--bg2)',
            borderRadius: '24px 24px 0 0',
            padding: '16px 20px 40px',
            border: '1px solid var(--border2)',
          }}>
            <div style={{ width: 36, height: 4, background: 'var(--border2)', borderRadius: 2, margin: '0 auto 20px' }} />
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 700, color: 'var(--text)', marginBottom: 6 }}>
              Paiement de l'inscription
            </div>
            <div style={{ fontSize: 12, color: 'var(--text3)', marginBottom: 20 }}>
              Choisissez votre moyen de paiement
            </div>

            {PAYMENT_METHODS.map((m, i) => (
              <div
                key={i}
                onClick={() => setSelectedPayment(i)}
                style={{
                  display: 'flex', alignItems: 'center', gap: 14,
                  background: 'var(--card)',
                  border: `1px solid ${selectedPayment === i ? 'var(--red)' : 'var(--border)'}`,
                  borderRadius: 12, padding: '14px 16px',
                  cursor: 'pointer', marginBottom: 10,
                }}
              >
                <div style={{ width: 40, height: 40, borderRadius: 10, background: m.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>
                  {m.icon}
                </div>
                <div style={{ flex: 1, fontSize: 14, fontWeight: 600, color: 'var(--text)' }}>{m.label}</div>
                <div style={{
                  width: 18, height: 18, borderRadius: '50%',
                  background: selectedPayment === i ? 'var(--red)' : 'transparent',
                  border: `2px solid ${selectedPayment === i ? 'var(--red)' : 'var(--border2)'}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 10, color: '#fff',
                }}>
                  {selectedPayment === i ? '✓' : ''}
                </div>
              </div>
            ))}

            {/* Résumé */}
            <div style={{ background: 'var(--card)', borderRadius: 12, padding: '14px 16px', marginBottom: 16 }}>
              {[['Frais d\'inscription', '1 300 FCFA'], ['Total à payer', '1 300 FCFA']].map(([lbl, val], i) => (
                <div key={i} style={{
                  display: 'flex', justifyContent: 'space-between',
                  fontSize: i === 1 ? 15 : 13,
                  fontWeight: i === 1 ? 700 : 400,
                  color: i === 1 ? 'var(--text)' : 'var(--text2)',
                  marginBottom: i === 0 ? 8 : 0,
                }}>
                  <span>{lbl}</span>
                  <span style={{ fontFamily: 'var(--font-display)', color: 'var(--gold)' }}>{val}</span>
                </div>
              ))}
            </div>

            <button
              onClick={handleConfirm}
              style={{
                width: '100%', background: 'var(--red)', color: '#fff',
                fontFamily: 'var(--font-display)',
                fontSize: 16, fontWeight: 700, letterSpacing: 2,
                padding: 16, borderRadius: 12, textTransform: 'uppercase',
              }}
            >CONFIRMER — 1300 FCFA</button>
          </div>
        </div>
      )}

      {/* Écran succès */}
      {showSuccess && (
        <div style={{
          position: 'fixed', top: 0, left: '50%', transform: 'translateX(-50%)',
          width: '100%', maxWidth: 430, height: '100%',
          background: 'var(--bg)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          gap: 16, zIndex: 200,
        }}>
          <div style={{ fontSize: 64 }}>🎮</div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 700, color: 'var(--text)' }}>INSCRIT !</div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, color: 'var(--red)' }}>Grand Prix Africa Open</div>
          <div style={{ fontSize: 14, color: 'var(--text3)', textAlign: 'center', padding: '0 40px' }}>
            Ton inscription est confirmée. Un SMS de confirmation t'a été envoyé.
          </div>
          <button
            onClick={() => { setShowSuccess(false); navigate('/tournaments') }}
            style={{
              marginTop: 8, background: 'var(--red)', color: '#fff',
              fontFamily: 'var(--font-display)',
              fontSize: 14, fontWeight: 700, letterSpacing: '1.5px',
              padding: '10px 24px', borderRadius: 8, textTransform: 'uppercase',
            }}
          >VOIR MES TOURNOIS</button>
        </div>
      )}

      <BottomNav />
    </div>
  )
}