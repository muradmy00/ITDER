import { useEffect, useState } from "react";
import useUser from "../Security/useUser";


const useHasAccess = () => {
    const [hasAccess, setHasAccess] = useState()
    const [userData, isLoading] = useUser()

    useEffect(() => {
      if(userData){
        setHasAccess(userData.userPermissionData)
        }
    }, [userData])

    return [hasAccess, isLoading];
};

export default useHasAccess;