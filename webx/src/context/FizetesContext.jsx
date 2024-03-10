import { createContext, useState } from "react";

const fizetesContext = createContext();

export const FizetesContext = ({ children }) => {
    const szalmodok = [
        {id:1, tipus:"Házhozszállítás", ár:1990},
        {id:2, tipus:"GLS csomagpont", ár: 990},
        {id:3, tipus:"GLS csomagautomata", ár:990},
        {id:4, tipus:"Átvétel az üzletben", ár:0},
        {id:5, tipus:"Magyar posta", ár: 1990},
    ];
    const fizmodok = [
        {id:1, tipus:"Átvétel során", ár:0},
        {id:2, tipus:"Banki átutalás", ár:0},
    ]
    return <fizetesContext.Provider value={
        {
            szalmodok,
            fizmodok
        }
    }>{children}</fizetesContext.Provider>
}

export default fizetesContext