import { useParams, useNavigate } from 'react-router-dom'
import TopBar from '../components/TopBar'
import BottomNav from '../components/BottomNav'

// On réutilise la même structure de données pour rester cohérent
const TOURNAMENTS_DATA = {
  'v1-classique': {
    name: '1V1 CLASSIQUE',
    format: '1 contre 1',
    price: 1300,
    priceLabel: '1 300 FCFA / joueur',
    icon: '⚔️',
    color: 'var(--red)',
    maxPlayers: 50,
    joinedPlayers: 38,
  },
  '5v5-squad': {
    name: '5V5 SQUAD',
    format: 'Équipe de 5',
    price: 5000,
    priceLabel: '5 000 FCFA / équipe',
    icon: '🛡️',
    color: 'var(--purple)',
    maxPlayers: 16,
    joinedPlayers: 8,
  },
  '1v1-sniper': {
    name: '1V1 SNIPER',
    format: '1 contre 1',
    price: 800,
    priceLabel: '800 FCFA / joueur',
    icon: '🎯',
    color: 'var(--red)',
    maxPlayers: 32,
    joinedPlayers: 14,
  },
  '1v1-shotgun': {
    name: '1V1 SHOTGUN',
    format: '1 contre 1',
    price: 800,
    priceLabel: '800 FCFA / joueur',
    icon: '💥',
    color: 'var(--gold)',
    maxPlayers: 32,
    joinedPlayers: 20,
  },
  '5v5-rd': {
    name: '5V5 RECHERCHE & DESTRUCTION',
    format: 'Équipe de 5',
    price: 4000,
    priceLabel: '4 000 FCFA / équipe',
    icon: '💣',
    color: 'var(--purple)',
    maxPlayers: 16,
    joinedPlayers: 12,
  },
  '5v5-controle': {
    name: '5V5 CONTRÔLE',
    format: 'Équipe de 5',
    price: 4000,
    priceLabel: '4 000 FCFA / équipe',
    icon: '🏴',
    color: 'var(--green)',
    maxPlayers: 16,
    joinedPlayers: 6,
  },
}

export default function TournamentDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const tournament = TOURNAMENTS_DATA[id]

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

  // --- CALCUL DES RÉCOMPENSES (Prélèvement de 20% invisible) ---
  const totalCashIn = tournament.maxPlayers * tournament.price
  const rewardPool = totalCashIn * 0.8 // 80% restant pour les joueurs

  const firstPlaceReward = Math.round(rewardPool * 0.5)  // 50% au 1er
  const secondPlaceReward = Math.round(rewardPool * 0.3) // 30% au 2e
  const thirdPlaceReward = Math.round(rewardPool * 0.2)  // 20% au 3e

  return (
    <div style={{ paddingBottom: 120, background: 'var(--bg)', minHeight: '100vh' }}>
      <TopBar showBack title="Détail du Tournoi" />

      {/* Conteneur Principal style Maquette */}
      <div style={{ padding: '0 16px', marginTop: 10 }}>
        
        {/* Titre & Prix Principal */}
        <div style={{
          background: 'var(--card)',
          border: '1px solid var(--border)',
          borderRadius: 20,
          padding: '24px 20px',
          textAlign: 'center',
          marginBottom: 20
        }}>
          <div style={{
            fontSize: 11, fontWeight: 700, color: tournament.color,
            letterSpacing: 2, textTransform: 'uppercase', marginBottom: 8
          }}>
            CALL OF DUTY MOBILE • {tournament.format.toUpperCase()}
          </div>
          
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 24, fontWeight: 800, color: 'var(--text)',
            margin: '0 0 16px 0', textTransform: 'uppercase'
          }}>
            {tournament.name}
          </h1>

          <div style={{
            fontFamily: 'var(--font-display)',
            fontSize: 32, fontWeight: 800, color: 'var(--gold)',
            marginBottom: 4
          }}>
            {totalCashIn.toLocaleString()} FCFA
          </div>
          <div style={{ fontSize: 12, color: 'var(--text3)', marginBottom: 24 }}>
            Prize Pool total
          </div>

          {/* Stats Horizontales */}
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
            borderTop: '1px solid var(--border2)', paddingTop: 16
          }}>
            <div>
              <div style={{ fontSize: 18, fontWeight: 700, color: 'var(--text)' }}>
                {tournament.maxPlayers}
              </div>
              <div style={{ fontSize: 11, color: 'var(--text3)', marginTop: 4 }}>
                {tournament.format === 'Équipe de 5' ? 'Équipes max' : 'Joueurs max'}
              </div>
            </div>
            <div style={{ borderLeft: '1px solid var(--border2)', borderRight: '1px solid var(--border2)' }}>
              <div style={{ fontSize: 18, fontWeight: 700, color: 'var(--text)' }}>
                {tournament.price}f
              </div>
              <div style={{ fontSize: 11, color: 'var(--text3)', marginTop: 4 }}>
                Inscription
              </div>
            </div>
            <div>
              <div style={{ fontSize: 18, fontWeight: 700, color: tournament.color }}>
                {tournament.joinedPlayers}
              </div>
              <div style={{ fontSize: 11, color: 'var(--text3)', marginTop: 4 }}>
                Inscrits
              </div>
            </div>
          </div>
        </div>

        {/* Section Compte à Rebours Fictif */}
        <div style={{
          background: 'var(--card)', border: '1px solid var(--border)',
          borderRadius: 16, padding: '14px 20px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          marginBottom: 20
        }}>
          <div>
            <div style={{ fontSize: 11, color: 'var(--text3)', fontWeight: 600 }}>DÉBUT DANS</div>
            <div style={{ fontSize: 22, fontWeight: 700, color: 'var(--red)', fontFamily: 'monospace', marginTop: 2 }}>
              02:14:33
            </div>
          </div>
          <div style={{ fontSize: 24 }}>⏱️</div>
        </div>

        {/* Section Récompenses */}
        <div style={{ marginBottom: 24 }}>
          <div style={{
            fontSize: 12, fontWeight: 700, letterSpacing: 2,
            color: 'var(--text3)', textTransform: 'uppercase', marginBottom: 12
          }}>
            RÉCOMPENSES
          </div>

          {/* 1ère Place */}
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            background: 'var(--card)', border: '1px solid var(--border)',
            borderRadius: 12, padding: '14px 16px', marginBottom: 8
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'var(--text)' }}>
              🥇 <span>1ère place</span>
            </div>
            <div style={{ fontWeight: 700, color: 'var(--gold)', fontSize: 15 }}>
              {firstPlaceReward.toLocaleString()}f
            </div>
          </div>

          {/* 2ème Place */}
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            background: 'var(--card)', border: '1px solid var(--border)',
            borderRadius: 12, padding: '14px 16px', marginBottom: 8
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'var(--text)' }}>
              🥈 <span>2ème place</span>
            </div>
            <div style={{ fontWeight: 700, color: 'var(--text2)', fontSize: 15 }}>
              {secondPlaceReward.toLocaleString()}f
            </div>
          </div>

          {/* 3ème Place */}
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            background: 'var(--card)', border: '1px solid var(--border)',
            borderRadius: 12, padding: '14px 16px', marginBottom: 24
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'var(--text)' }}>
              🥉 <span>3ème place</span>
            </div>
            <div style={{ fontWeight: 700, color: 'var(--orange)', fontSize: 15 }}>
              {thirdPlaceReward.toLocaleString()}f
            </div>
          </div>

          {/* Bouton d'action S'inscrire */}
          <button
            onClick={() => navigate(`/register/${id}`)}
            style={{
              width: '100%',
              background: tournament.color,
              color: '#fff',
              fontFamily: 'var(--font-display)',
              fontSize: 15,
              fontWeight: 700,
              letterSpacing: 1.5,
              padding: '16px',
              borderRadius: 12,
              textTransform: 'uppercase',
              border: 'none',
              cursor: 'pointer',
              boxShadow: `0 4px 20px ${tournament.color}33`
            }}
          >
            S'INSCRIRE — {tournament.price} FCFA
          </button>
        </div>

      </div>

      <BottomNav />
    </div>
  )
}
