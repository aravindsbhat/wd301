import type React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage : React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-4xl font-bold mb-4">404 Not Found</h1>
            <p className="text-lg text-gray-600 mb-4">The page you are looking for does not exist.</p>
            <button onClick={()=>navigate("/home")} className="backToHomeButton">Go Back to Home</button>
        </div>
    );
}

export default NotFoundPage;