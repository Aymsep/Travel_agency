import React,{useState,useEffect,createContext,useContext} from 'react'
import { delete_All_products,delete_product } from '../Api/api'

const Context = createContext()

export const StateContext = ({children})=>{
    const deleteAllProduct = () =>{
        delete_All_products().then(()=>{
            console.log('all products deleted')
        })
    }

    const removeproduct  = (e) =>{
        try{
            let id = e.target.closest('.alltr').dataset.id
            delete_product(id).then(()=>{
                return e.target.closest('.alltr').remove()
            })
        }catch(err){    
            console.log('all products deleted')
        }
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