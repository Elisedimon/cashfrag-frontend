import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(localStorage.getItem('token'))
  const [balance, setBalance] = useState(() => {
    const savedBalance = localStorage.getItem('balance')
    return savedBalance ? Number(savedBalance) : 0 // Solde initial à 0 FCFA si non trouvé
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const savedUser = localStorage.getItem('user')
    if (savedUser && token) {
      setUser(JSON.parse(savedUser))
    }
    setLoading(false)
  }, [token])

  const login = (userData, userToken) => {
    setUser(userData)
    setToken(userToken)
    localStorage.setItem('token', userToken)
    localStorage.setItem('user', JSON.stringify(userData))
  }

  const logout = () => {
    setUser(null)
    setToken(null)
    setBalance(0)
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    localStorage.removeItem('balance')
  }

  // Fonction pour recharger le compte profil
  const depositMoney = (amount) => {
    setBalance((prev) => {
      const newBalance = prev + amount
      localStorage.setItem('balance', newBalance)
      return newBalance
    })
  }

  // Fonction pour débiter lors d'une inscription
  const deductMoney = (amount) => {
    let success = false
    setBalance((prev) => {
      if (prev >= amount) {
        const newBalance = prev - amount
        localStorage.setItem('balance', newBalance)
        success = true
        return newBalance
      }
      return prev
    })
    return success
  }

  return (
    <AuthContext.Provider value={{ user, token, balance, login, logout, depositMoney, deductMoney, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
