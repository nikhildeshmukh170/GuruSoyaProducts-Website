import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {


    const[cartItems, setCartItems] = useState({});
    const url = "http://localhost:4000"
    const[token,setToken] = useState("")
    const[item_list,setItemList] = useState([])

    const addToCart = (itemId) => {
        if(!cartItems[itemId]) {
            setCartItems((prev) => ({...prev,[itemId]:1}))
        }
        else{
            setCartItems((prev) => ({...prev,[itemId]:prev[itemId]+1}))
        }
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                let itemInfo = item_list.find((product) => product.item_id === item);
                totalAmount += itemInfo.item_rate * cartItems[item];
            }
        }
        return totalAmount;
    }

    const fetchProdList = async () => {
        const response = await axios.get(url+"/api/product/list");
        setItemList(response.data.data)
    }

    useEffect(() => {
        
        async function loadData(){
            await fetchProdList();
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"));
            }
        }
        loadData();
    })

    const contextValue = {
        item_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;