import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import TopBar from '../components/TopBar'
import BottomNav from '../components/BottomNav'

const CHATS = {
  general: [
    { sys: true, txt: '🎮 Bienvenue ! Seuls les joueurs inscrits peuvent écrire.' },
    { me: false, av: 'D', nm: 'DarkBoss', txt: 'Qui est prêt pour le 1v1 ce soir ? 🔥' },
    { me: true, txt: 'Je suis là ! Pseudo : KingSlayer229' },
    { me: false, av: 'A', nm: 'AlphaSniper', txt: "Quelqu'un pour un 1v1 Sniper ?" },
    { sys: true, txt: '⚔️ Match #007 généré — KingSlayer229 vs DarkBoss' },
    { me: false, av: 'D', nm: 'DarkBoss', txt: 'GG prêt ! On joue sur quelle map ?' },
  ],
  match: [
    { sys: true, txt: '⚔️ Match #007 — KingSlayer229 vs DarkBoss' },
    { me: false, av: 'D', nm: 'DarkBoss', txt: 'Salut ! On joue sur Rust ?' },
    { me: true, txt: 'Ok pour Rust. Dans 5 minutes ?' },
    { me: false, av: 'D', nm: 'DarkBoss', txt: 'Parfait. GG à toi 😎' },
  ],
  team: [
    { sys: true, txt: '🛡️ Équipe ALPHA SQUAD — 4/5 membres' },
    { me: false, av: 'N', nm: 'NightWolf', txt: 'Il nous faut encore un membre !' },
    { me: true, txt: 'Code équipe : ALPHA-7829' },
    { me: false, av: 'F', nm: 'Fury229', txt: 'Je rejoins ! Code entré ✅' },
    { sys: true, txt: '✅ Équipe complète — 5/5 membres !' },
  ],
}

export default function Chat() {
  const [activeTab, setActiveTab] = useState('general')
  const [messages, setMessages] = useState(CHATS.general)
  const [input, setInput] = useState('')
  const boxRef = useRef(null)

  useEffect(() => {
    if (boxRef.current) boxRef.current.scrollTop = boxRef.current.scrollHeight
  }, [messages])

  const switchTab = (tab) => {
    setActiveTab(tab)
    setMessages(CHATS[tab])
  }

  const sendMsg = () => {
    if (!input.trim()) return
    setMessages(prev => [...prev, { me: true, txt: input }])
    setInput('')
  }

  const submitResult = () => {
    setMessages(prev => [...prev, { sys: true, txt: '📸 KingSlayer229 a soumis son résultat — En attente de validation admin' }])
  }

  const tabs = [
    { key: 'general', label: '💬 Général' },
    { key: 'match', label: '⚔️ Mon Match' },
    { key: 'team', label: '🛡️ Mon Équipe' },
  ]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', background: 'var(--bg)', paddingBottom: 80 }}>
      <TopBar />

      {/* Tabs */}
      <div style={{ display: 'flex', gap: 8, padding: '0 16px 14px', overflowX: 'auto', scrollbarWidth: 'none', flexShrink: 0 }}>
        {tabs.map(t => (
          <button key={t.key} onClick={() => switchTab(t.key)} style={{
            flexShrink: 0, padding: '7px 16px', borderRadius: 20,
            fontSize: 11, fontWeight: 700, letterSpacing: 1,
            border: `1px solid ${activeTab === t.key ? 'var(--red)' : 'var(--border2)'}`,
            background: activeTab === t.key ? 'var(--red)' : 'transparent',
            color: activeTab === t.key ? '#fff' : 'var(--text2)',
            textTransform: 'uppercase',
          }}>{t.label}</button>
        ))}
      </div>

      {/* Messages */}
      <div ref={boxRef} style={{ flex: 1, padding: '0 16px', display: 'flex', flexDirection: 'column', gap: 10, overflowY: 'auto', scrollbarWidth: 'none' }}>
        {messages.map((m, i) => {
          if (m.sys) return (
            <div key={i} style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ background: 'rgba(255,182,39,0.1)', border: '1px solid rgba(255,182,39,0.2)', color: 'var(--gold)', borderRadius: 10, padding: '9px 12px', fontSize: 11, textAlign: 'center', maxWidth: 280 }}>{m.txt}</div>
            </div>
          )
          if (m.me) return (
            <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'flex-end', flexDirection: 'row-reverse' }}>
              <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'linear-gradient(135deg,var(--red),var(--purple))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, color: '#fff', flexShrink: 0 }}>K</div>
              <div style={{ maxWidth: 220, padding: '9px 12px', background: 'linear-gradient(135deg,var(--red),#cc0018)', color: '#fff', borderRadius: '14px 4px 14px 14px', fontSize: 12, lineHeight: 1.5 }}>{m.txt}</div>
            </div>
          )
          return (
            <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'flex-end' }}>
              <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--card)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, color: 'var(--text2)', flexShrink: 0 }}>{m.av}</div>
              <div>
                <div style={{ fontSize: 9, color: 'var(--text3)', marginBottom: 3 }}>{m.nm}</div>
                <div style={{ maxWidth: 220, padding: '9px 12px', background: 'var(--card2)', color: 'var(--text)', borderRadius: '4px 14px 14px 14px', fontSize: 12, lineHeight: 1.5 }}>{m.txt}</div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Submit result */}
      <div style={{ padding: '10px 16px 8px', flexShrink: 0 }}>
        <button onClick={submitResult} style={{
          width: '100%', background: 'rgba(255,182,39,0.1)', border: '1px solid rgba(255,182,39,0.3)',
          borderRadius: 10, padding: 11, color: 'var(--gold)',
          fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 700,
          letterSpacing: 1, marginBottom: 8,
        }}>📸 SOUMETTRE MON RÉSULTAT</button>
      </div>

      {/* Input */}
      <div style={{ padding: '0 16px 8px', display: 'flex', gap: 8, flexShrink: 0 }}>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyPress={e => e.key === 'Enter' && sendMsg()}
          placeholder="Écris un message..."
          style={{ flex: 1, background: 'var(--card)', border: '1px solid var(--border2)', borderRadius: 20, padding: '10px 16px', color: 'var(--text)', fontSize: 13, fontFamily: 'var(--font-body)' }}
        />
        <button onClick={sendMsg} style={{ width: 38, height: 38, borderRadius: '50%', background: 'var(--red)', border: 'none', color: '#fff', fontSize: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>➤</button>
      </div>

      <BottomNav />
    </div>
  )
}