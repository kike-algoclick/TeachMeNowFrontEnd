import React from "react";
import { useState } from "react";
import '../CSS/Signup.css'
import { useSignUp } from "@clerk/clerk-react";

//TERMINAR SIGN UP CON LA LÓGICA DE VALIDACIÓN DE TODOS LOS DATOS. LUEGO CONTINUAR CON LOGIN.

function Signup() {
  //estados para manejar los datos de los input e inicializar la conexion con Clerk
  const [hover, setHover] = useState(false);
  const {signUp, setActive, isLoaded} = useSignUp(); //Conexión con clerk
  const [email, setEmail] = useState(); //Manejar texto imput email
  const [password, setPassword] = useState(); //Manejar texto input passworn

  //Función que se pasa al form en el evento "onSubmit()"
  const handleSubmit = async (e) => {
      e.preventDefault();
      if (!isLoaded) return;

      try {
        const result = await signIn.create({
          emailAdress: email,
          password,
        });
        if (result.status === "complete") {
          await setActive({ session: result.createdSessionId });
          console.log("Signed up!");
        }
      } catch (err) {
        console.error(err.errors);
      }
    };

  return (
    <div className="mt-10 bg-white p-8 rounded-lg shadow-xl w-full max-w-sm mx-auto">
      <h2
        className="text-2xl font-bold mb-6 text-center"
        style={{ color: "#1A3D63" }}
      >
        Create an account
      </h2>

      <div className="mb-4 text-center">
        <span className="text-gray-600">Personal Information</span>
      </div>

      <form>
        <div className="mb-4 text-left">
          <span className="text-gray-600">First Name*</span>
          <input
            type="text"
            placeholder="First Name"
            className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4 text-left">
          <span className="text-gray-600">Last Name*</span>
          <input
            type="text"
            placeholder="Last Name"
            className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4 text-center">
          <span className="text-gray-600">Registration Information</span>
        </div>

        <div className="mb-4 text-left">
          <span className="text-gray-600">Email*</span>
          <input
            type="email"
            placeholder="Email"
            className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4 text-left">
          <span className="text-gray-600">Password*</span>
          <input
            type="password"
            placeholder="Password"
            className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4 text-left">
          <span className="text-gray-600">Confirm Password*</span>
          <input
            type="password"
            placeholder="Confirm Password"
            className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-center space-x-2 mb-4 text-sm">
          <input type="checkbox" className="form-checkbox" />
          <span>I accept the terms and conditions</span>
        </div>

        <button
          type="submit"
          className="w-full text-white py-2 rounded-md font-bold transition-colors duration-300"
          style={{ backgroundColor: hover ? "#153654" : "#1A3D63" }}
          onMouseOver={() => setHover(true)}
          onMouseOut={() => setHover(false)}
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Signup;