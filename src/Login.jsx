import React from "react";
import { useState } from "react";
import './CSS/Login.css'


function Login(){
    const [hover, setHover] = useState(false);
    return(
        <>
        <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-sm mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: "#1A3D63" }}>Login</h2>

            <div className="mb-4 text-center">
                <span className="text-gray-600">New to TeachMeNow?</span>
                <a href="SigUp.jsx" className="text-blue-500 font-semibold hover:underline ml-1" style={{ color: "#1A3D63" }}>Sign up</a>
            </div>

            <form>
                <div className="mb-4">
                    <input type="email" placeHolder="Email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="mb-6">
                    <input type="password" placeHolder="Password" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                </div>
                <button
                    type="submit"
                    className="w-full text-white py-2 rounded-md font-bold transition-colors duration-300"
                    style={{ backgroundColor: hover ? "#153654" : "#1A3D63" }}
                    onMouseOver={() => setHover(true)}
                    onMouseOut={() => setHover(false)}
                >
                    Log in
                </button>
            </form>

            <div className="flex justify-between text-sm mt-4">
                <a href="#" className="text-blue-500 hover:underline">Forgot your password?</a>
                <a href="#" className="text-blue-500 hover:underline">Problems logging in?</a>
            </div>

            <div className="mt-6 space-y-3">
                <button type="button" className="w-full flex items-center justify-center border rounded-md py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-300">
                    <img src="https://seekvectors.com/files/download/Microsoft-02.png" alt="Microsoft" className="w-7 h-7 mr-4" />
                    <span>Login with Microsoft</span>
                </button>
                <button type="button" className="w-full flex items-center justify-center border rounded-md py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-300">
                    <img src="https://th.bing.com/th/id/R.16597b58fb4d4fa8ebcf5a013fc19b0a?rik=a0DcRRp3bMzLow&pid=ImgRaw&r=0" alt="Google" className="w-5 h-5 mr-6" />
                    <span>Login with Google</span>
                </button>
                <button type="button" className="w-full flex items-center justify-center border rounded-md py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-300">
                    <img src="https://static.vecteezy.com/system/resources/previews/018/930/698/original/facebook-logo-facebook-icon-transparent-free-png.png" alt="Facebook" className="w-8 h-8 mr-4" />
                    <span>Login with Facebook</span>
                </button>
            </div>
        </div>
  


    </>

    )
}

export default Login;