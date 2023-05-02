import { Navigate } from "react-router";

export default function Protected({isAuthenticated, children}){
    console.log(isAuthenticated);
    if (isAuthenticated == false){
        return <Navigate to='../login' replace/>
    }
    return children;
}