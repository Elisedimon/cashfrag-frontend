import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { loginUser, registerUser } from '../services/api'

export default function Login() {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [isReg, setIsReg] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({ pseudo: '', email: '', password: '', country: 'Bénin' })

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async () => {
    setError(''); setLoading(true)
    try {
      const res = isReg ? await registerUser(form) : await loginUser({ pseudo: form.pseudo, password: form.password })
      login(res.data.user, res.data.token)
      navigate('/home')
    } catch (err) {
      setError(err.response?.data?.message || 'Erreur de connexion')
    } finally { setLoading(false) }
  }

  const inp = { width: '100%', background: 'var(--card)', border: '1px solid var(--border2)', borderRadius: 10, padding: '13px 16px', color: 'var(--text)', fontSize: 14, fontFamily: 'var(--font-body)' }

  return (
    <div style={{ minHeight: '100vh', background: 'radial-gradient(ellipse at 50% 0%, rgba(255,31,53,0.15) 0%, transparent 60%), var(--bg)', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '40px 24px' }}>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: 56, fontWeight: 900, textAlign: 'center', letterSpacing: 2, marginBottom: 6 }}>
        <span style={{ color: 'var(--red)' }}>CASH</span><span style={{ color: '#fff' }}>FRAG</span>
      </div>
      <div style={{ textAlign: 'center', fontSize: 11, color: 'var(--text3)', letterSpacing: 4, textTransform: 'uppercase', marginBottom: 48 }}>
        Gaming · Tournois · Gains
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', marginBottom: 22, background: 'var(--card)', borderRadius: 10, padding: 4 }}>
        {['Connexion', 'Inscription'].map((label, i) => (
          <button key={i} onClick={() => { setIsReg(i === 1); setError('') }} style={{
            flex: 1, padding: 9, borderRadius: 8, fontSize: 12, fontWeight: 600, border: 'none',
            background: isReg === (i === 1) ? 'var(--red)' : 'transparent',
            color: isReg === (i === 1) ? '#fff' : 'var(--text3)',
          }}>{label}</button>
        ))}
      </div>

      <div style={{ marginBottom: 14 }}>
        <div style={{ fontSize: 10, color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 6 }}>Pseudo CODM</div>
        <input name="pseudo" value={form.pseudo} onChange={handleChange} placeholder="KingSlayer229" style={inp} />
      </div>

      {isReg && <>
        <div style={{ marginBottom: 14 }}>
          <div style={{ fontSize: 10, color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 6 }}>Email</div>
          <input name="email" value={form.email} onChange={handleChange} placeholder="ton@email.com" type="email" style={inp} />
        </div>
        <div style={{ marginBottom: 14 }}>
          <div style={{ fontSize: 10, color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 6 }}>Pays</div>
          <input name="country" value={form.country} onChange={handleChange} placeholder="Bénin" style={inp} />
        </div>
      </>}

      <div style={{ marginBottom: 14 }}>
        <div style={{ fontSize: 10, color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 6 }}>Mot de passe</div>
        <input name="password" value={form.password} onChange={handleChange} placeholder="••••••••" type="password" style={inp} />
      </div>

      {error && (
        <div style={{ background: 'rgba(255,31,53,0.1)', border: '1px solid rgba(255,31,53,0.3)', borderRadius: 8, padding: '10px 14px', marginBottom: 14, fontSize: 13, color: 'var(--red)' }}>{error}</div>
      )}

      <button onClick={handleSubmit} disabled={loading} style={{
        width: '100%', background: loading ? 'var(--text3)' : 'linear-gradient(135deg, var(--red), #cc0018)',
        color: '#fff', fontFamily: 'var(--font-display)', fontSize: 17, fontWeight: 800,
        letterSpacing: 2, padding: 15, borderRadius: 12, border: 'none', textTransform: 'uppercase',
        marginTop: 8, boxShadow: '0 4px 24px rgba(255,31,53,0.4)',
      }}>{loading ? 'CHARGEMENT...' : (isReg ? "S'INSCRIRE" : 'CONNEXION')}</button>

      <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '20px 0' }}>
        <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
        <span style={{ fontSize: 11, color: 'var(--text3)' }}>ou</span>
        <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
      </div>

      {['📱 Mobile Money', '🎮 Compte CODM'].map((label, i) => (
        <button key={i} onClick={() => navigate('/home')} style={{
          width: '100%', background: 'var(--card)', border: '1px solid var(--border2)',
          borderRadius: 12, padding: 13, color: 'var(--text)', fontSize: 13,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          gap: 10, marginBottom: 10, fontFamily: 'var(--font-body)',
        }}>{label}</button>
      ))}
    </div>
  )
}