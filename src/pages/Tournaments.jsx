import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TopBar from '../components/TopBar'
import TournamentCard from '../components/TournamentCard'
import BottomNav from '../components/BottomNav'

const ALL_TOURNAMENTS = [
  { id: 1, icon: '🎯', iconBg: 'rgba(232,25,44,0.15)', name: 'GRAND PRIX AFRICA OPEN', game: 'CODM', format: 'Solo', time: "Aujourd'hui 19h", prize: '65 000f', spots: '12 places', spotsColor: 'var(--red)' },
  { id: 2, icon: '🎯', iconBg: 'rgba(232,25,44,0.15)', name: 'WEEKLY CLASH #12', game: 'CODM', format: 'Solo', time: 'Demain 20h', prize: '26 000f', spots: '8 places' },
  { id: 3, icon: '⚡', iconBg: 'rgba(245,166,35,0.15)', name: 'FLASH CUP', game: 'CODM', format: 'Duo', time: 'Ce soir 21h', prize: '13 000f', spots: '3 places', spotsColor: 'var(--red)' },
  { id: 4, icon: '🏆', iconBg: 'rgba(139,92,246,0.15)', name: 'VIP TOURNAMENT', game: 'CODM', format: 'Squad', time: 'Samedi', prize: '130 000f', spots: 'VIP uniquement', spotsColor: 'var(--purple)' },
  { id: 5, icon: '🆓', iconBg: 'rgba(0,214,143,0.12)', name: 'TOURNOI DÉCOUVERTE', game: 'CODM', format: 'Solo', time: 'Dimanche 15h', prize: '5 000f', spots: 'Gratuit', spotsColor: 'var(--green)' },
  { id: 6, icon: '⚽', iconBg: 'rgba(245,166,35,0.12)', name: 'FIFA BATTLE', game: 'FIFA', format: 'Duo', time: 'Vendredi 18h', prize: '18 000f', spots: '20 places' },
]

const FILTERS = ['Tous', 'Solo', 'Duo', 'Squad', 'VIP', 'Gratuit']

export default function Tournaments() {
  const [activeFilter, setActiveFilter] = useState('Tous')

  const filtered = ALL_TOURNAMENTS.filter(t => {
    if (activeFilter === 'Tous') return true
    if (activeFilter === 'VIP') return t.name.includes('VIP')
    if (activeFilter === 'Gratuit') return t.spots === 'Gratuit'
    return t.format === activeFilter
  })

  return (
    <div style={{ paddingBottom: 80 }}>
      <TopBar />

      {/* Filtres */}
      <div style={{
        display: 'flex', gap: 8,
        padding: '0 16px 16px',
        overflowX: 'auto',
      }}>
        {FILTERS.map(f => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            style={{
              flexShrink: 0,
              padding: '6px 16px',
              borderRadius: 20,
              fontSize: 12, fontWeight: 600,
              cursor: 'pointer',
              border: '1px solid var(--border2)',
              background: activeFilter === f ? 'var(--red)' : 'transparent',
              color: activeFilter === f ? '#fff' : 'var(--text2)',
              transition: 'all 0.2s',
            }}
          >{f}</button>
        ))}
      </div>

      {/* Liste */}
      <div style={{ padding: '0 16px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {filtered.map(t => <TournamentCard key={t.id} tournament={t} />)}
      </div>

      <BottomNav />
    </div>
  )
}