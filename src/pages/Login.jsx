import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { loginUser, registerUser } from '../services/api'

export default function Login() {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [isRegister, setIsRegister] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({
    pseudo: '', email: '', password: '', codm_username: '', country: 'Bénin'
  })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async () => {
    setError('')
    setLoading(true)
    try {
      let res
      if (isRegister) {
        res = await registerUser(form)
      } else {
        res = await loginUser({ pseudo: form.pseudo, password: form.password })
      }
      login(res.data.user, res.data.token)
      navigate('/home')
    } catch (err) {
      setError(err.response?.data?.message || 'Erreur de connexion')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{
      minHeight: '100vh', background: 'var(--bg)',
      display: 'flex', flexDirection: 'column',
      justifyContent: 'center', padding: '40px 24px',
    }}>
      <div style={{
        fontFamily: 'var(--font-display)', fontSize: 48, fontWeight: 700,
        letterSpacing: 2, textAlign: 'center', marginBottom: 8,
      }}>
        <span style={{ color: 'var(--red)' }}>CASH</span>
        <span style={{ color: 'var(--text)' }}>FRAG</span>
      </div>
      <div style={{
        textAlign: 'center', fontSize: 11, color: 'var(--text3)',
        letterSpacing: 3, textTransform: 'uppercase', marginBottom: 40,
      }}>Gaming · Tournois · Gains</div>

      {/* Onglets */}
      <div style={{ display: 'flex', marginBottom: 24, background: 'var(--card)', borderRadius: 10, padding: 4 }}>
        {['Connexion', 'Inscription'].map((label, i) => (
          <button key={i} onClick={() => { setIsRegister(i === 1); setError('') }} style={{
            flex: 1, padding: '10px', borderRadius: 8, fontSize: 13, fontWeight: 600,
            background: isRegister === (i === 1) ? 'var(--red)' : 'transparent',
            color: isRegister === (i === 1) ? '#fff' : 'var(--text3)',
            transition: 'all 0.2s',
          }}>{label}</button>
        ))}
      </div>

      {/* Champs */}
      {[
        { label: 'Pseudo CODM', name: 'pseudo', placeholder: 'KingSlayer229', type: 'text' },
        ...(isRegister ? [
          { label: 'Email', name: 'email', placeholder: 'ton@email.com', type: 'email' },
          { label: 'Pseudo in-game CODM', name: 'codm_username', placeholder: 'Pseudo exact CODM', type: 'text' },
          { label: 'Pays', name: 'country', placeholder: 'Bénin', type: 'text' },
        ] : []),
        { label: 'Mot de passe', name: 'password', placeholder: '••••••••', type: 'password' },
      ].map((field) => (
        <div key={field.name} style={{ marginBottom: 14 }}>
          <div style={{ fontSize: 11, color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: 6 }}>
            {field.label}
          </div>
          <input
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            value={form[field.name]}
            onChange={handleChange}
            style={{
              width: '100%', background: 'var(--card)',
              border: '1px solid var(--border2)', borderRadius: 10,
              padding: '14px 16px', color: 'var(--text)',
              fontSize: 14, fontFamily: 'var(--font-body)',
            }}
          />
        </div>
      ))}

      {/* Erreur */}
      {error && (
        <div style={{
          background: 'rgba(232,25,44,0.1)', border: '1px solid rgba(232,25,44,0.3)',
          borderRadius: 8, padding: '10px 14px', marginBottom: 14,
          fontSize: 13, color: 'var(--red)',
        }}>{error}</div>
      )}

      <button
        onClick={handleSubmit}
        disabled={loading}
        style={{
          width: '100%', background: loading ? 'var(--text3)' : 'var(--red)',
          color: '#fff', fontFamily: 'var(--font-display)',
          fontSize: 16, fontWeight: 700, letterSpacing: 2,
          padding: 16, borderRadius: 12, textTransform: 'uppercase', marginTop: 8,
        }}
      >{loading ? 'CHARGEMENT...' : (isRegister ? "S'INSCRIRE" : 'CONNEXION')}</button>
    </div>
  )
}