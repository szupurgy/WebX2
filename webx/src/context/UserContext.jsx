import { createContext, useMemo, useState } from "react";
import axios from "axios";
const userContext = createContext();

export const UserContext = ({ children }) => {
    const [token, setToken] = useState(null);
    const [user, setUser] = useState(null);
    useMemo(() => {
        if (token != null) {
            axios.get("http://localhost:8000/user/me", {
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${token}`
                }
            },)
                .then(({ data }) => {
                    setUser(data)
                })
        }
    }, [token])

    return <userContext.Provider value={
        {
            token,
            user,
            setToken,
            setUser
        }
    }>{children}</userContext.Provider>
}

export default userContext