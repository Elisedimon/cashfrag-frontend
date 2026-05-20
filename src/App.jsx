import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Leaderboard from './pages/Leaderboard'
import Chat from './pages/Chat'
import Profile from './pages/Profile'
import TournamentDetail from './pages/TournamentDetail'
import TournamentRegister from './pages/TournamentRegister'
import Success from './pages/Success'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/tournament/:id" element={<TournamentDetail />} />
        <Route path="/register/:id" element={<TournamentRegister />} />
        <Route path="/success/:id" element={<Success />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
