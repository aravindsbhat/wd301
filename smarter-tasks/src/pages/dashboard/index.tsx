import type React from "react";

const Dashboard : React.FC = () => {
    return (
        <div className="min-h-screen items-center justify-center bg-gray-100">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Dashboard</h1>
            <h2 className="text-xl text-center text-gray-600">User details</h2>
            <div className="UserDetails text-lg">
                <p className="text-gray-700">Name: {JSON.parse(localStorage.getItem("userData") || "").name}</p>
                <p className="text-gray-700">Email Id: {JSON.parse(localStorage.getItem("userData") || "").email}</p>
            </div>
            <a href="/signin" id="logout-link" onClick={() => localStorage.removeItem("userData")} className="mt-6 inline-block text-blue-600 hover:underline">Logout</a>
        </div>
    );
}
export default Dashboard;