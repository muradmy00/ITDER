import { useRef } from "react";
import { createContext, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";


export const OrderContext = createContext(null)

const OrderProvider = ({children}) => {

    const [examID, setExamID] = useState(null)
    const [open, setOpen] = useState(true)
    const sidebarRef = useRef(null);
    
  
    const [cartItems, setCartItems] = useState({});

    const addToCart = async (itemId, size) => {

        if (size) {

            toast.error('Select Product');
            return;

        }

        let cartData = structuredClone(cartItems)

        if (cartData[itemId]) {

            if (cartData[itemId][size]) {

                cartData[itemId][size] += 1;
            }
            else {
                cartData[itemId][size] = 1;
            }

        }
        else {

            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }

        setCartItems(cartData);

    }


    const getCartCount = () => {

        let totalCount = 0;
        for (const items in cartItems) {
            for (const item in cartItems[items]) {

                try {

                    if (cartItems[items][item] > 0) {

                        totalCount += cartItems[items][item];

                    }

                } catch (error) {
                    console.log(error)
                }
            }
        }

        return totalCount;
    }


    const updateQuantity = (productId, size, newQuantity) => {
        setCartItems((prevItems) => {
            const updatedCart = { ...prevItems };
            if (!updatedCart[productId]) {
                updatedCart[productId] = {};
            }
            updatedCart[productId][size] = newQuantity;
            return updatedCart;
        });
    };



    const getCartAmount = () => {

        let totalAmount = 0;
        for (const items in cartItems) {
            let itemInfo = products.find((product) => product._id === items);

            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {

                        totalAmount += itemInfo.price * cartItems[items][item];

                    }
                } catch (error) {

                    console.log(error);

                }
            }
        }

        return totalAmount;

    }


    const info = {
        examID,
        setExamID,
        open,
        setOpen,
        sidebarRef,
        getCartCount,
        getCartAmount,
        updateQuantity,
        addToCart, 
        cartItems,
        products



    }
    return (
        <OrderContext.Provider value={info} >
            {children}
        </OrderContext.Provider>
    );
};

export default OrderProvider;