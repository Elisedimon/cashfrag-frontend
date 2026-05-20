import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import TopBar from '../components/TopBar'
import BottomNav from '../components/BottomNav'

const TOURNAMENTS_DATA = {
  'v1-classique': {
    name: '1V1 CLASSIQUE',
    format: '1 contre 1',
    price: 1300,
    priceLabel: '1 300 FCFA / joueur',
    icon: '⚔️',
    color: 'var(--red)',
    rules: [
      'Match en mode Multijoueur',
      'Map au choix des joueurs',
      '10 kills pour gagner',
      'Screenshot du score obligatoire',
      'Résultat à envoyer dans les 30min',
    ]
  },
  '5v5-squad': {
    name: '5V5 SQUAD',
    format: 'Équipe de 5',
    price: 5000,
    priceLabel: '5 000 FCFA / équipe',
    icon: '🛡️',
    color: 'var(--purple)',
    rules: [
      'Match en mode Multijoueur 5v5',
      'Format Best of 3',
      "Map imposée par l'admin",
      'Screenshot de chaque manche obligatoire',
      'Le capitaine envoie les résultats',
    ]
  },
  '1v1-sniper': {
    name: '1V1 SNIPER',
    format: '1 contre 1',
    price: 800,
    priceLabel: '800 FCFA / joueur',
    icon: '🎯',
    color: 'var(--red)',
    rules: [
      'Snipers uniquement',
      '10 kills pour gagner',
      'Map Awoken ou Crossfire',
      'Screenshot obligatoire',
    ]
  },
  '1v1-shotgun': {
    name: '1V1 SHOTGUN',
    format: '1 contre 1',
    price: 800,
    priceLabel: '800 FCFA / joueur',
    icon: '💥',
    color: 'var(--gold)',
    rules: [
      'Shotguns uniquement',
      '10 kills pour gagner',
      'Map courte obligatoire',
      'Screenshot obligatoire',
    ]
  },
  '5v5-rd': {
    name: '5V5 RECHERCHE & DESTRUCTION',
    format: 'Équipe de 5',
    price: 4000,
    priceLabel: '4 000 FCFA / équipe',
    icon: '💣',
    color: 'var(--purple)',
    rules: [
      'Mode Recherche & Destruction',
      'Best of 5 manches',
      "Map imposée par l'admin",
      "Le capitaine coordonne l'équipe",
      'Screenshot de chaque manche',
    ]
  },
  '5v5-controle': {
    name: '5V5 CONTRÔLE',
    format: 'Équipe de 5',
    price: 4000,
    priceLabel: '4 000 FCFA / équipe',
    icon: '🏴',
    color: 'var(--green)',
    rules: [
      'Mode Contrôle de zone',
      'Best of 3',
      "Map imposée par l'admin",
      "Le capitaine coordonne l'équipe",
      'Screenshot de chaque manche',
    ]
  },
}

const PAYMENT_METHODS = [
  { id: 'wave', icon: '🌊', label: 'Wave', bg: 'rgba(0,120,255,0.12)' },
  { id: 'orange', icon: '🍊', label: 'Orange Money', bg: 'rgba(255,120,0,0.12)' },
  { id: 'mtn', icon: '📱', label: 'MTN Mobile Money', bg: 'rgba(255,200,0,0.12)' },
]

export default function TournamentRegister() {
  const { id } = useParams()
  const navigate = useNavigate()
  const tournament = TOURNAMENTS_DATA[id]

  const [selectedPayment, setSelectedPayment] = useState(0)
  const [form, setForm] = useState({ pseudo: '', codm: '', phone: '' })

  if (!tournament) {
    return (
      <div style={{ padding: 40, textAlign: 'center', color: 'var(--text3)' }}>
        Tournoi introuvable
        <br />
        <button onClick={() => navigate('/home')} style={{
          marginTop: 20, background: 'var(--red)', color: '#fff',
          padding: '10px 24px', borderRadius: 8, border: 'none',
          fontFamily: 'var(--font-display)', fontSize: 14, cursor: 'pointer',
        }}>RETOUR</button>
      </div>
    )
  }

  const handleConfirm = () => {
    navigate(`/success/${id}`)
  }

  const isTeam = tournament.format === 'Équipe de 5'

  return (
    <div style={{ paddingBottom: 100 }}>
      <TopBar showBack title="Inscription" />

      {/* Header tournoi */}
      <div style={{
        margin: '0 16px 20px',
        background: 'var(--card)',
        border: `1px solid ${tournament.color}33`,
        borderRadius: 16, padding: '18px 20px',
        display: 'flex', alignItems: 'center', gap: 16,
      }}>
        <div style={{
          width: 56, height: 56, borderRadius: 14,
          background: `${tournament.color}22`,
          display: 'flex', alignItems: 'center',
          justifyContent: 'center', fontSize: 26, flexShrink: 0,
        }}>{tournament.icon}</div>
        <div>
          <div style={{
            fontFamily: 'var(--font-display)',
            fontSize: 18, fontWeight: 700,
            color: 'var(--text)', marginBottom: 4,
          }}>{tournament.name}</div>
          <div style={{ fontSize: 12, color: 'var(--text3)', marginBottom: 4 }}>
            {tournament.format}
          </div>
          <div style={{
            fontFamily: 'var(--font-display)',
            fontSize: 16, fontWeight: 700, color: 'var(--gold)',
          }}>{tournament.priceLabel}</div>
        </div>
      </div>

      {/* Règles */}
      <div style={{ padding: '0 16px', marginBottom: 20 }}>
        <div style={{
          fontSize: 12, fontWeight: 700, letterSpacing: 2,
          color: 'var(--text3)', textTransform: 'uppercase', marginBottom: 10,
        }}>RÈGLES DU TOURNOI</div>
        {tournament.rules.map((rule, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'flex-start',
            gap: 10, marginBottom: 8,
          }}>
            <span style={{ color: tournament.color, fontSize: 14, flexShrink: 0 }}>▸</span>
            <span style={{ fontSize: 13, color: 'var(--text2)', lineHeight: 1.5 }}>{rule}</span>
          </div>
        ))}
      </div>

      {/* Formulaire */}
      <div style={{ padding: '0 16px', marginBottom: 20 }}>
        <div style={{
          fontSize: 12, fontWeight: 700, letterSpacing: 2,
          color: 'var(--text3)', textTransform: 'uppercase', marginBottom: 14,
        }}>TES INFORMATIONS</div>

        {[
          {
            label: isTeam ? "Nom de l'équipe" : 'Ton pseudo CODM',
            key: 'pseudo',
            placeholder: isTeam ? 'TeamAlpha' : 'KingSlayer229'
          },
          {
            label: isTeam ? 'Pseudo du capitaine' : 'Pseudo exact in-game',
            key: 'codm',
            placeholder: 'Pseudo CODM exact'
          },
          {
            label: 'Numéro WhatsApp',
            key: 'phone',
            placeholder: '+229 XX XX XX XX'
          },
        ].map((field) => (
          <div key={field.key} style={{ marginBottom: 14 }}>
            <div style={{
              fontSize: 11, color: 'var(--text3)',
              textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: 6,
            }}>{field.label}</div>
            <input
              value={form[field.key]}
              onChange={e => setForm({ ...form, [field.key]: e.target.value })}
              placeholder={field.placeholder}
              style={{
                width: '100%', background: 'var(--card)',
                border: '1px solid var(--border2)', borderRadius: 10,
                padding: '13px 16px', color: 'var(--text)',
                fontSize: 14, fontFamily: 'var(--font-body)',
              }}
            />
          </div>
        ))}
      </div>

      {/* Moyen de paiement */}
      <div style={{ padding: '0 16px', marginBottom: 20 }}>
        <div style={{
          fontSize: 12, fontWeight: 700, letterSpacing: 2,
          color: 'var(--text3)', textTransform: 'uppercase', marginBottom: 14,
        }}>MOYEN DE PAIEMENT</div>

        {PAYMENT_METHODS.map((m, i) => (
          <div
            key={i}
            onClick={() => setSelectedPayment(i)}
            style={{
              display: 'flex', alignItems: 'center', gap: 14,
              background: 'var(--card)',
              border: `1px solid ${selectedPayment === i ? tournament.color : 'var(--border)'}`,
              borderRadius: 12, padding: '13px 16px',
              cursor: 'pointer', marginBottom: 10,
            }}
          >
            <div style={{
              width: 40, height: 40, borderRadius: 10,
              background: m.bg, display: 'flex',
              alignItems: 'center', justifyContent: 'center', fontSize: 18,
            }}>{m.icon}</div>
            <div style={{ flex: 1, fontSize: 14, fontWeight: 600, color: 'var(--text)' }}>
              {m.label}
            </div>
            <div style={{
              width: 20, height: 20, borderRadius: '50%',
              background: selectedPayment === i ? tournament.color : 'transparent',
              border: `2px solid ${selectedPayment === i ? tournament.color : 'var(--border2)'}`,
              display: 'flex', alignItems: 'center',
              justifyContent: 'center', fontSize: 11, color: '#fff',
            }}>{selectedPayment === i ? '✓' : ''}</div>
          </div>
        ))}
      </div>

      {/* Résumé + Bouton */}
      <div style={{ padding: '0 16px' }}>
        <div style={{
          background: 'var(--card)', border: '1px solid var(--border)',
          borderRadius: 12, padding: '14px 16px', marginBottom: 16,
        }}>
          <div style={{
            display: 'flex', justifyContent: 'space-between',
            fontSize: 13, color: 'var(--text2)', marginBottom: 8,
          }}>
            <span>Tournoi</span>
            <span style={{ color: 'var(--text)' }}>{tournament.name}</span>
          </div>
          <div style={{
            display: 'flex', justifyContent: 'space-between',
            fontSize: 15, fontWeight: 700, color: 'var(--text)',
          }}>
            <span>Total à payer</span>
            <span style={{ fontFamily: 'var(--font-display)', color: 'var(--gold)' }}>
              {tournament.price.toLocaleString()} FCFA
            </span>
          </div>
        </div>

        <button
          onClick={handleConfirm}
          disabled={!form.pseudo || !form.phone}
          style={{
            width: '100%',
            background: !form.pseudo || !form.phone ? 'var(--text3)' : tournament.color,
            color: '#fff',
            fontFamily: 'var(--font-display)',
            fontSize: 16, fontWeight: 700, letterSpacing: 2,
            padding: 16, borderRadius: 12,
            textTransform: 'uppercase', border: 'none',
            cursor: !form.pseudo || !form.phone ? 'not-allowed' : 'pointer',
          }}
        >CONFIRMER L'INSCRIPTION</button>

        <div style={{
          textAlign: 'center', fontSize: 12,
          color: 'var(--text3)', marginTop: 12,
        }}>
          Un admin vous contactera sur WhatsApp pour confirmer
        </div>
      </div>
    </div>
  )
}
