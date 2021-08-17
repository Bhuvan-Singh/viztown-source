import React,{createContext, useState, useEffect} from 'react'
import axiosConfig from '../axiosConfig';
export const CommonContext = createContext();

export default function CommonContextProvider({children}) {
    const [menus,setMenus] = useState([]);
    useEffect(()=>{
        axiosConfig.get('/menus')
        .then(function (response) {
            setMenus(response.data.data);
            console.log("setMenus")
        })
        .catch(function (error) {
            console.log(error);
        })
    },[])
    
    return (
        <CommonContext.Provider value={{menus}}>
            {children}
        </CommonContext.Provider>
    )
}