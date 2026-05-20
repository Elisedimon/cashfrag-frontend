import { useParams, useNavigate } from 'react-router-dom'

const NAMES = {
  'v1-classique': { name: '1V1 CLASSIQUE', price: '1 300 FCFA' },
  '5v5-squad': { name: '5V5 SQUAD', price: '1 000 FCFA' },
  '1v1-sniper': { name: '1V1 SNIPER', price: '800 FCFA' },
  '1v1-shotgun': { name: '1V1 SHOTGUN', price: '800 FCFA' },
  '5v5-rd': { name: '5V5 R&D', price: '4 000 FCFA' },
  '5v5-controle': { name: '5V5 CONTRÔLE', price: '4 000 FCFA' },
}

export default function Success() {
  const { id } = useParams()
  const navigate = useNavigate()
  const t = NAMES[id] || { name: 'Tournoi', price: '' }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'radial-gradient(ellipse at 50% 20%, rgba(0,229,160,0.15) 0%, transparent 60%), var(--bg)',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      gap: 14, padding: '40px 24px', textAlign: 'center',
    }}>
      <div style={{ fontSize: 70 }}>🎉</div>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: 38, fontWeight: 900, color: 'var(--text)' }}>
        INSCRIT !
      </div>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 700, color: 'var(--green)' }}>
        {t.name}
      </div>
      <div style={{
        background: 'var(--card)', border: '1px solid var(--border)',
        borderRadius: 14, padding: '16px 20px',
        fontSize: 13, color: 'var(--text2)',
        lineHeight: 2, maxWidth: 300,
      }}>
        ✅ Inscription confirmée<br />
        📱 Un admin te contacte bientôt<br />
        💰 Prépare ton paiement de{' '}
        <span style={{ color: 'var(--gold)', fontWeight: 700 }}>{t.price}</span>
      </div>
      <button
        onClick={() => navigate('/home')}
        style={{
          marginTop: 8,
          background: 'linear-gradient(135deg, var(--red), #cc0018)',
          color: '#fff', fontFamily: 'var(--font-display)',
          fontSize: 14, fontWeight: 800, letterSpacing: 1.5,
          padding: '12px 28px', borderRadius: 10, border: 'none',
          textTransform: 'uppercase',
          boxShadow: '0 4px 16px rgba(255,31,53,0.4)',
        }}
      >RETOUR À L'ACCUEIL</button>
    </div>
  )
}