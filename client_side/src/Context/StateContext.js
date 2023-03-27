import React,{useState,useEffect,createContext,useContext} from 'react'

const Context = createContext()

export const StateContext = ({children})=>{
    function hey(){
        console.log('hey clicked')
    }
    return(
        <Context.Provider
        value={{hey}}
        >
            {children}
        </Context.Provider>
    )
}
export const useStateContext = () => useContext(Context)
