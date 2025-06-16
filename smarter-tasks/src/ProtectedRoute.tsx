import type { JSX } from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({children}:{children: JSX.Element}) {
    const auth = localStorage.getItem("Authenticated");
    if(auth === 'true') return <>{children}</>;
    else return <Navigate to="/signin"/>;
}