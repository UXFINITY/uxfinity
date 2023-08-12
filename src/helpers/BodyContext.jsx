import React, { createContext, useState, useContext } from 'react'
import { EnData, EsData } from '../data/Data'
const BodyContext = createContext()

//this is a custom hook for use the context
export const useBodyContext = () => useContext(BodyContext)

//this is the context provider
function Context({ children }) {
  const [Language, setLanguage] = useState('en')
  const [bgColor, setBgColor] = useState(true)
  const AllData = Language === 'en' ? EnData : EsData

  return (
    <BodyContext.Provider
      value={{ bgColor, setBgColor, Language, AllData, setLanguage }}
    >
      {children}
    </BodyContext.Provider>
  )
}

export default Context
