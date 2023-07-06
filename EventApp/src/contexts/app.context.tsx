import { createContext, useState } from 'react'

interface AppConTextInterface {
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  handleNextPage: () => void
}

const initialAppContext: AppConTextInterface = {
  loading: true,
  setLoading: () => null,
  handleNextPage: () => null
}
export const AppContext = createContext<AppConTextInterface>(initialAppContext)

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState<boolean>(initialAppContext.loading)
  const handleNextPage = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }

  return <AppContext.Provider value={{ loading, setLoading, handleNextPage }}>{children}</AppContext.Provider>
}
