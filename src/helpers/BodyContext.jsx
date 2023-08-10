import React, { createContext, useState, useContext } from 'react'
import { EnData, EsData } from '../data/Data'
const LanguageContext = createContext()

//this is a custom hook for use the context
export const useBodyContext = () => useContext(LanguageContext)

//this is the context provider
function Context({ children }) {
  const [Language, setLanguage] = useState('en')
  const [bgColor, setBgColor] = useState(true)
  const AllData = Language === 'en' ? EnData : EsData

  return (
    <LanguageContext.Provider
      value={{ bgColor, setBgColor, Language, AllData, setLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export default Context