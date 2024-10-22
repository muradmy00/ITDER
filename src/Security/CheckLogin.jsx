/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

const CheckLogin = ({children}) => {
    const token = localStorage.getItem("token")
    if(!token){
        return (
            toast.error('You are not login') &&
            <Navigate to='/login'></Navigate>
        )
    }
    else{
        return children
    }
};

export default CheckLogin;