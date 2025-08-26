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
  const [fName, setName] = useState("")
  const [lastName, setLastName] = useState("")
  const [password, setPassword] = useState(); //Manejar texto input password
  const [confPassword, setConfPassword]  = useState("")
  const [role, setRole] = useState("")
  const [errorMsg, setErrorMsg] = useState("");

  //Si la conección con Clerk no está lista, da error
  if (!isLoaded) return null;

  //Función que se pasa al form en el evento "onSubmit()"
  const registrar = async (e) => {
      e.preventDefault();
      setErrorMsg("")

      if (!email || !password) {
        setErrorMsg("Por favor, completa todos los campos");
        return;
      }
      if (password !== confPassword) {
        setError("The passwords do not match ");
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
        setError("Invalid email address");
        return;
      }
      

      try{
            await signUp.create({
                emailAddress: email.trim(), password,
                fName: fName.trim(),
                lastName: lastName.trim(),
                unsafeMetadata:{
                    role: role,
                },
            });

            await signUp.prepareEmailAddressVerification({
              strategy: "email_code",
            });
            setVerification(true);
      } catch (err) {
        setError(err.errors?.[0]?.message || "problems with sigUp");
      };
    };



  return (
    <div className="bg-[url(/SignUpImage.png)] bg-cover p-10">
      <div className=" p-10 bg-white p-8 rounded-lg shadow-xl w-full max-w-sm mx-auto">
        <h2
          className="text-2xl font-bold mb-6 text-center"
          style={{ color: "#1A3D63" }}
        >
          Create an account
        </h2>

        <div className="mb-4 text-center">
          <span className="text-gray-600">Personal Information</span>
        </div>

        <form onSubmit={registrar}>
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
          <div className="flex justify-center gap-2 mb-2">
            <button
              type="button"
              onClick={() => setRole("student")}
              className={`px-[clamp(1rem,3vw,4rem)] py-[clamp(0.5rem,0.8vw,1rem)] rounded ${
                role == "student"
                  ? "bg-blue-500 text-black"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              Soy estudiante
            </button>
            <button
              type="button"
              onClick={() => setRole("teacher")}
              className={`px-[clamp(1rem,3vw,4rem)] py-[clamp(0.5rem,0.8vw,1rem)] rounded ${
                role == "teacher"
                  ? "bg-blue-500 text-black"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              Soy Maestro
            </button>
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
          {errorMsg && (
            <p className="text-red-500 text-center mt-2x|">{errorMsg}</p>
          )}
        </form>
      </div>
    </div>
  );
}

export default Signup;