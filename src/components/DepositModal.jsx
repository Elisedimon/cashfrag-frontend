import { useState } from 'react'

const PAYMENT_METHODS = [
  { id: 'wave', icon: '🌊', label: 'Wave', bg: 'rgba(0,120,255,0.12)', color: '#0078ff' },
  { id: 'orange', icon: '🍊', label: 'Orange Money', bg: 'rgba(255,120,0,0.12)', color: '#ff7800' },
  { id: 'mtn', icon: '📱', label: 'MTN Mobile Money', bg: 'rgba(255,200,0,0.12)', color: '#ffc800' },
]

export default function DepositModal({ isOpen, onClose, onDepositSuccess }) {
  const [amount, setAmount] = useState('')
  const [selectedMethod, setSelectedMethod] = useState(null)
  const [phoneNumber, setPhoneNumber] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  if (!isOpen) return null

  const handlePaymentSubmit = (e) => {
    e.preventDefault()
    if (!amount || !selectedMethod || !phoneNumber) return

    setIsLoading(true)

    // Simulation de l'appel API de paiement (Wave/Orange/MTN)
    setTimeout(() => {
      setIsLoading(false)
      onDepositSuccess(Number(amount))
      setAmount('')
      setPhoneNumber('')
      setSelectedMethod(null)
      onClose()
    }, 2000)
  }

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 999,
      background: 'rgba(0, 0, 0, 0.75)', backdropFilter: 'blur(4px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16
    }}>
      <div style={{
        background: 'var(--card)', border: '1px solid var(--border)',
        borderRadius: 20, width: '100%', maxWidth: 400, padding: 20,
        position: 'relative', boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
      }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 700, color: 'var(--text)' }}>
            RECHARGER MON COMPTE
          </div>
          <button onClick={onClose} style={{
            background: 'rgba(255,255,255,0.05)', border: 'none', color: 'var(--text2)',
            width: 30, height: 30, borderRadius: '50%', cursor: 'pointer', fontWeight: 'bold'
          }}>✕</button>
        </div>

        <form onSubmit={handlePaymentSubmit}>
          {/* Champ Montant */}
          <div style={{ marginBottom: 16 }}>
            <label style={{ fontSize: 11, color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: 1 }}>Montant (FCFA)</label>
            <input
              type="number"
              required
              placeholder="Ex: 2500"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              style={{
                width: '100%', height: 46, background: 'var(--bg)', border: '1px solid var(--border2)',
                borderRadius: 10, padding: '0 14px', fontSize: 16, color: 'var(--text)', outline: 'none', marginTop: 6, boxSizing: 'border-box'
              }}
            />
          </div>

          {/* Sélection de la méthode */}
          <div style={{ marginBottom: 16 }}>
            <label style={{ fontSize: 11, color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: 1 }}>Moyen de paiement</label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 6 }}>
              {PAYMENT_METHODS.map((m) => (
                <div
                  key={m.id}
                  onClick={() => setSelectedMethod(m)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 12, background: 'var(--bg)',
                    border: `1px solid ${selectedMethod?.id === m.id ? m.color : 'var(--border2)'}`,
                    borderRadius: 10, padding: 10, cursor: 'pointer', transition: '0.2s'
                  }}
                >
                  <div style={{ width: 32, height: 32, borderRadius: 8, background: m.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {m.icon}
                  </div>
                  <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)', flex: 1 }}>{m.label}</span>
                  <div style={{
                    width: 16, height: 16, borderRadius: '50%', border: `2px solid ${selectedMethod?.id === m.id ? m.color : 'var(--border3)'}`,
                    background: selectedMethod?.id === m.id ? m.color : 'transparent'
                  }} />
                </div>
              ))}
            </div>
          </div>

          {/* Numéro de téléphone */}
          {selectedMethod && (
            <div style={{ marginBottom: 20 }}>
              <label style={{ fontSize: 11, color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: 1 }}>
                Numéro de débit {selectedMethod.label}
              </label>
              <input
                type="tel"
                required
                placeholder="Ex: +229 XX XX XX XX"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                style={{
                  width: '100%', height: 46, background: 'var(--bg)', border: '1px solid var(--border2)',
                  borderRadius: 10, padding: '0 14px', fontSize: 14, color: 'var(--text)', outline: 'none', marginTop: 6, boxSizing: 'border-box'
                }}
              />
            </div>
          )}

          {/* Bouton d'action */}
          <button
            type="submit"
            disabled={isLoading || !amount || !selectedMethod || !phoneNumber}
            style={{
              width: '100%', height: 48, background: 'var(--green)', color: '#fff',
              border: 'none', borderRadius: 10, fontFamily: 'var(--font-display)',
              fontSize: 14, fontWeight: 700, letterSpacing: 1, cursor: isLoading ? 'not-allowed' : 'pointer',
              textTransform: 'uppercase', opacity: (!amount || !selectedMethod || !phoneNumber) ? 0.5 : 1
            }}
          >
            {isLoading ? 'Traitement en cours...' : 'Valider le dépôt'}
          </button>
        </form>
      </div>
    </div>
  )
}
