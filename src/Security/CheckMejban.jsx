/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import useUser from "./useUser";
import Loader from "../Utils/Loader/Loader";

const CheckMejban
 = ({ children }) => {
  const token = localStorage.getItem("token");
  const [userData, isLoading] = useUser();
  if (isLoading) {
    return <Loader />;
  }
  const access = userData.userPermissionData?.some(
    (item) => item.name === "mejban-list"
  );


  if (!token) {
    return (
      toast.error("You are not Login") && <Navigate to="/login"></Navigate>
    );
  } else if (!access) {
    return (
      toast.error("You are not Admin") && <Navigate to="/login"></Navigate>
    );
  } else {
    return children;
  }
};

export default CheckMejban
;
