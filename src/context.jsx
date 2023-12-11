import { createContext, useContext, useReducer, useState } from "react";
import { reducer } from "./reducer";
import { data } from "./data";



const initialState = {
    amount: 1,
    loading: false,
    cart: data,
}



export const AppContext = createContext()

export const AppProvider = ({ children }) => {
    const [user, setUser] = useState(true)
    const [state, dispatch] = useReducer(reducer, initialState)


    return (
        <AppContext.Provider value={{
            ...state,
            user
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const UseGlobalContext = () => {
    return useContext(AppContext)
}