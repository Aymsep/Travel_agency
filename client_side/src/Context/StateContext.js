import React,{useState,useEffect,createContext,useContext} from 'react'
import { delete_All_products } from '../Api/api'

const Context = createContext()

export const StateContext = ({children})=>{
    const deleteAllProduct = () =>{
        delete_All_products().then(()=>{
            console.log('all products deleted')
        })
    }

    const removeproduct  = (e) =>{
        e.target.closest('.alltr').remove();
    }

















    return(
        <Context.Provider
        value={{
        deleteAllProduct,
        removeproduct
        }}
        >
            {children}
        </Context.Provider>
    )
}
export const useStateContext = () => useContext(Context)
