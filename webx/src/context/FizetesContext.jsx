import { createContext, useState } from "react";

const fizetesContext = createContext();

export const FizetesContext = ({ children }) => {
    const szalmodok = [
        {id:1, tipus:"Házhozszállítás"},
        {id:2, tipus:"GLS csomagpont"},
        {id:3, tipus:"GLS csomagautomata"},
        {id:4, tipus:"Átvétel az üzletben"},
        {id:5, tipus:"Magyar posta"},
    ]
    return <fizetesContext.Provider value={
        {
            szalmodok
        }
    }>{children}</fizetesContext.Provider>
}

export default fizetesContext