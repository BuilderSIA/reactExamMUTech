import { createContext, useContext, useState } from "react";







export const AppContext = createContext()

export const AppProvider = ({ children }) => {
    const [user, setUser] = useState()


    return (
        <AppContext.Provider>
            {children}
        </AppContext.Provider>
    )
}

export const UseGlobalContext = () => {
    return useContext(AppContext)
}