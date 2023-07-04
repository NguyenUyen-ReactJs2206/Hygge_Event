import { createContext, useState } from 'react'

interface AppConTextInterface {
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const initialAppContext: AppConTextInterface = {
  loading: true,
  setLoading: () => null
}
export const AppContext = createContext<AppConTextInterface>(initialAppContext)

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState<boolean>(initialAppContext.loading)

  return <AppContext.Provider value={{ loading, setLoading }}>{children}</AppContext.Provider>
}
