import React,{createContext,useContext,useState} from 'react'

const BodyContext = createContext()

export const useBody=()=>useContext(BodyContext)

function BodyContext() {
    
  return (
    <BodyContext.provider value={{}}>BodyContext</BodyContext.provider>
  )
}

export default BodyContext