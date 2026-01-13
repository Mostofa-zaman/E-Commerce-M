import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
let ApiData = createContext()

const ContextApi = ({children}) => {
    let [info , setInfo] = useState([])
    let getData = () =>{
       axios.get("https://dummyjson.com/products").then((res)=>{
        setInfo(res.data.products)
       })
    }
    useEffect(()=>{
        getData()
    },[])
  return (
    <>
      <ApiData.Provider value={info}>
        {children}
      </ApiData.Provider>
    </>
  )
}

export { ContextApi, ApiData }