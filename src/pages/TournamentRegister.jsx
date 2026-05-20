import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import TopBar from '../components/TopBar'
import BottomNav from '../components/BottomNav'
import DepositModal from '../components/DepositModal'

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

export default function TournamentRegister() {
  const { id } = useParams()
  const navigate = useNavigate()
  const tournament = TOURNAMENTS_DATA[id]

  // Consommation du solde et des fonctions globales du profil
  const { balance, deductMoney, depositMoney } = useAuth()

  const [form, setForm] = useState({ pseudo: '', codm: '', phone: '' })
  const [isDepositModalOpen, setIsDepositModalOpen] = useState(false)
  const [error, setError] = useState('')

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
    setError('')

    // 1. Vérification si le solde profil est supérieur ou égal au prix du tournoi
    if (balance < tournament.price) {
      setError('Solde insuffisant dans votre portefeuille profil !')
      return
    }

    // 2. Déduction du solde en direct
    const paymentSuccess = deductMoney(tournament.price)
    
    if (paymentSuccess) {
      navigate(`/success/${id}`)
    } else {
      setError('Une erreur est survenue lors du paiement.')
    }
  }

  const isTeam = tournament.format === 'Équipe de 5'
  const hasEnoughFunds = balance >= tournament.price

  return (
    <div style={{ paddingBottom: 100, background: 'var(--bg)', minHeight: '100vh' }}>
      <TopBar showBack title="Inscription" />

      {/* Header tournoi */}
      <div style={{
        margin: '16px 16px 20px',
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

      {/* Affichage du solde actuel du portefeuille joueur */}
      <div style={{
        margin: '0 16px 20px', padding: '14px 16px', background: 'var(--card)',
        borderRadius: 14, border: '1px solid var(--border)', display: 'flex', 
        justifyContent: 'space-between', alignItems: 'center'
      }}>
        <div>
          <div style={{ fontSize: 11, color: 'var(--text3)', letterSpacing: 1 }}>VOTRE SOLDE PROFIL</div>
          <div style={{ fontSize: 18, fontWeight: 700, color: hasEnoughFunds ? 'var(--green)' : 'var(--red)', marginTop: 2 }}>
            {balance.toLocaleString()} FCFA
          </div>
        </div>
        <button 
          onClick={() => setIsDepositModalOpen(true)}
          style={{ 
            background: 'var(--green)', border: 'none', borderRadius: 8, 
            padding: '8px 14px', color: '#fff', fontSize: 11, 
            fontFamily: 'var(--font-display)', fontWeight: 700, cursor: 'pointer' 
          }}
        >
          + RECHARGER
        </button>
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
                fontSize: 14, fontFamily: 'var(--font-body)', boxSizing: 'border-box'
              }}
            />
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
            <span>Frais d'inscription</span>
            <span style={{ fontFamily: 'var(--font-display)', color: 'var(--gold)' }}>
              {tournament.price.toLocaleString()} FCFA
            </span>
          </div>
        </div>

        {error && (
          <div style={{ color: 'var(--red)', fontSize: 13, textAlign: 'center', marginBottom: 12, fontWeight: 600 }}>
            ⚠️ {error}
          </div>
        )}

        <button
          onClick={handleConfirm}
          disabled={!form.pseudo || !form.phone}
          style={{
            width: '100%',
            background: !form.pseudo || !form.phone ? 'var(--text3)' : (hasEnoughFunds ? tournament.color : 'var(--red)'),
            color: '#fff',
            fontFamily: 'var(--font-display)',
            fontSize: 16, fontWeight: 700, letterSpacing: 2,
            padding: 16, borderRadius: 12,
            textTransform: 'uppercase', border: 'none',
            cursor: !form.pseudo || !form.phone ? 'not-allowed' : 'pointer',
          }}
        >
          {hasEnoughFunds ? "CONFIRMER AVEC MON SOLDE" : "SOLDE INSUFFISANT"}
        </button>

        <div style={{
          textAlign: 'center', fontSize: 12,
          color: 'var(--text3)', marginTop: 12,
        }}>
          Le montant sera directement prélevé de votre compte profil.
        </div>
      </div>

      {/* Fenêtre modale de rechargement */}
      <DepositModal 
        isOpen={isDepositModalOpen} 
        onClose={() => setIsDepositModalOpen(false)} 
        onDepositSuccess={(amount) => depositMoney(amount)} 
      />

      <BottomNav />
    </div>
  )
}
