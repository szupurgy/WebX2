import { createContext, useMemo, useState } from "react";

const arContext = createContext();

export const ArContext = ({ children }) => {
    const [ar, setAr] = useState(0);
    const [total, setTotal] = useState(0);
    const [cart, setCart] = useState(null);

    useMemo(()=>{
        setCart(JSON.parse(localStorage.getItem('cart')) || []);
    },[])

    useMemo(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
        setTotal(cart?.reduce((all,item)=> all = all + (item.ar * item.darab),0))
    }, [cart])
    return <arContext.Provider value={
        {
            ar,
            setAr,
            total,
            setCart,
            cart
        }
    }>{children}</arContext.Provider>
}

export default arContext