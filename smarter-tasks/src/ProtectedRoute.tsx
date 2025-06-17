import type { JSX } from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({children}:{children: JSX.Element}) {
    const auth = !!localStorage.getItem("authToken");
    if(auth) return <>{children}</>;
    else return <Navigate to="/signin"/>;
}