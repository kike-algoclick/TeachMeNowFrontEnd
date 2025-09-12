import React from "react";
import '../CSS/Login.css'
import {Link} from 'react-router-dom'
import { SignIn, useSignIn } from "@clerk/clerk-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login(){
    const {signIn, setActive, isLoaded} = useSignIn();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [hover, setHover] = useState(false);
    const [errorMsg, setErrorMsg] = useState('')
    const navigate = useNavigate()

   

    const handleLogin = async(e)=>{
       if (!isLoaded) return null;
e.preventDefault()
setErrorMsg('')

if (!email || !password) {
  setErrorMsg("Por favor, completa todos los campos");
  return;
} 

try{
const form = await signIn.create({
  identifier: email.trim(),
  password: password
});

  if (form.status === "complete") {
    await setActive({ session: form.createdSessionId });

    // ← Obtener el rol del usuario después del login exitoso
    const user = form.createdSessionId ? await signIn.reload() : null;

    // Obtener el rol de los metadatos públicos
    const userRole = user?.unsafeMetadata?.role;

    // Redirigir según el rol
    if (userRole === "teacher") {
      navigate("/main-teacher");
    } else if (userRole === "student") {
      navigate("/LandingAlumno");
    } else {
      // Rol por defecto o no definido
      navigate("/"); // o la ruta que prefieras
    }
  } else {
    console.log("Estado Login:", form);
  }
}
catch(err){
  const clerkError = err?.errors?.[0]?.message;
  if (clerkError?.includes("Couldn't find your account")) {
    setErrorMsg("Correo electrónico incorrecto");
  } else if (clerkError?.includes("Password is incorrect")) {
    setErrorMsg("Contraseña incorrecta");
  } else {
 console.log(clerkError)
  }

}
}


  

    

    return (
      <>
        <div className="bg-[url(/LoginImage.png)] bg-cover p-10">
          <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-sm mx-auto">
            <h2
              className="text-2xl font-bold mb-6 text-center"
              style={{ color: "#1A3D63" }}
            >
              Login
            </h2>

            <div className="mb-4 text-center">
              <span className="text-gray-600">New to TeachMeNow?</span>
              <Link
                to="/signup"
                className="text-blue-500 font-semibold hover:underline ml-1"
                style={{ color: "#1A3D63" }}
              >
                Sign up
              </Link>
            </div>

            <form>
              <div className="mb-4">
                <input
                  type="email"
                  value={email}
                  placeholder="Email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-6">
                <input
                  type="password"
                  value={password}
                  placeholder="Password"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="w-full text-white py-2 rounded-md font-bold transition-colors duration-300 cursor-pointer"
                style={{ backgroundColor: hover ? "#153654" : "#1A3D63" }}
                onMouseOver={() => setHover(true)}
                onMouseOut={() => setHover(false)}
                onClick={handleLogin}
              >
                Log in
              </button>
              {errorMsg && (
                <p className="text-red-500 text-center mt-2x|">{errorMsg}</p>
              )}
            </form>

            <div className="flex justify-between text-sm mt-4">
              <a href="#" className="text-blue-500 hover:underline">
                Forgot your password?
              </a>
              <a href="#" className="text-blue-500 hover:underline">
                Problems logging in?
              </a>
            </div>

            <div className="mt-6 space-y-3">
              <button
                type="button"
                className="w-full flex items-center justify-center border rounded-md py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-300"
              >
                <img
                  src="https://seekvectors.com/files/download/Microsoft-02.png"
                  alt="Microsoft"
                  className="w-7 h-7 mr-4"
                />
                <span>Login with Microsoft</span>
              </button>
              <button
                type="button"
                className="w-full flex items-center justify-center border rounded-md py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-300"
              >
                <img
                  src="https://th.bing.com/th/id/R.16597b58fb4d4fa8ebcf5a013fc19b0a?rik=a0DcRRp3bMzLow&pid=ImgRaw&r=0"
                  alt="Google"
                  className="w-5 h-5 mr-6"
                />
                <span>Login with Google</span>
              </button>
              <button
                type="button"
                className="w-full flex items-center justify-center border rounded-md py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-300"
              >
                <img
                  src="https://static.vecteezy.com/system/resources/previews/018/930/698/original/facebook-logo-facebook-icon-transparent-free-png.png"
                  alt="Facebook"
                  className="w-8 h-8 mr-4"
                />
                <span>Login with Facebook</span>
              </button>
            </div>
          </div>
        </div>
      </>
    );
}

export default Login;