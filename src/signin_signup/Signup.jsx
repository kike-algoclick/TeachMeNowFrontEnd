import React from "react";
import { useState } from "react";
import '../CSS/Signup.css'
import { useSignUp, useUser } from "@clerk/clerk-react";
import { useAuth } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";



//TERMINAR LA LÓGICA DE EL SEGUNDO COMPONENTE "VERIFY CODE"
//TERMINAR EL SIGN UP Y VERIFY CODE
//TESTEAR Y ARREGLAR LOGIN


function Signup() {
  //estados para manejar los datos de los input e inicializar la conexion con Clerk
  const [hover, setHover] = useState(false);
  const {signUp, setActive, isLoaded} = useSignUp(); //Conexión con clerk
  const [email, setEmail] = useState(""); //Manejar texto imput email
  const [fName, setName] = useState("")
  const [lastName, setLastName] = useState("")
  const [password, setPassword] = useState(""); //Manejar texto input password
  const [confPassword, setConfPassword]  = useState("")
 const {user} = useUser()
  const [errorMsg, setErrorMsg] = useState("");
  const [verification, setVerification] = useState(false);  
   const [code, setCode] = useState("");
  const { isSignedIn } = useAuth(); //Para chequear que no haya un login actual.
  const navigate = useNavigate();
  

  //Si la conección con Clerk no está lista, da error
 


  

  //Función que se pasa al form en el evento "onSubmit()"
  const registrar = async (e) => {
      e.preventDefault();
      setErrorMsg("")
       if (!isLoaded)return null;

       

      if (!email || !password) {
        setErrorMsg("Por favor, completa todos los campos");
        return;
      }
      if (password !== confPassword) {
        setErrorMsg("The passwords do not match ");
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
        setErrorMsg("Invalid email address");
        return;
      }
      
      

      try{
            await signUp.create({
              emailAddress: email.trim(),
              password: password,
              unsafeMetadata: {
                firstName: fName.trim(),
                lastName: lastName.trim(),
                role: role,
              },
            });

            await signUp.prepareEmailAddressVerification({
              strategy: "email_code",
            });
            setVerification(true);
      } catch (err) {
        setErrorMsg(err.errors?.[0]?.message || "problems with SignUp");
      };
    };

    const verificar = async (e) => {
      e.preventDefault();
      setErrorMsg("");

      try {
        const completeSignUp = await signUp.attemptEmailAddressVerification({
          code,
        });
        setVerification(true);

        console.log("Resultado de verificación:", completeSignUp);

        if (completeSignUp.status === "complete") {
          await setActive({ session: completeSignUp.createdSessionId });
          console.log("✅ Registro completo, redirigiendo...");
          navigate('/Redirect')
        } else {
          console.warn(
            "⚠️ Registro no se completó, status:",
            completeSignUp.status
          );
        }
      } catch (err) {
        console.error("Error en attemptEmailAddressVerification:", err);
        setErrorMsg(err.errors?.[0]?.message || "mistaken code");
      }
    };



  return (
    <div className="bg-[url(/SignUpImage.png)] bg-cover h-220 p-10 flex justify-center ">
      {!verification && (
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
                value={fName}
                type="text"
                placeholder="First Name"
                className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="mb-4 text-left">
              <span className="text-gray-600">Last Name*</span>
              <input
                value={lastName}
                type="text"
                placeholder="Last Name"
                className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>

            <div className="mb-4 text-center">
              <span className="text-gray-600">Registration Information</span>
            </div>

            <div className="mb-4 text-left">
              <span className="text-gray-600">Email*</span>
              <input
                value={email}
                type="email"
                placeholder="Email"
                className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-4 text-left">
              <span className="text-gray-600">Password*</span>
              <input
                value={password}
                type="password"
                placeholder="Password"
                className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="mb-4 text-left">
              <span className="text-gray-600">Confirm Password*</span>
              <input
                value={confPassword}
                type="password"
                placeholder="Confirm Password"
                className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setConfPassword(e.target.value)}
              />
            </div>

            <div className="flex items-center space-x-2 mb-4 text-sm">
              <input type="checkbox" className="form-checkbox" required />
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
                I'm student
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
                I'm Teacher
              </button>
            </div>

            <div id="clerk-captcha"></div>

            <button
              type="submit"
              className="w-full text-white py-2 rounded-md font-bold transition-colors duration-300 cursor-pointer"
              style={{ backgroundColor: hover ? "#153654" : "#1A3D63" }}
              onMouseOver={() => setHover(true)}
              onMouseOut={() => setHover(false)}
            >
              Send
            </button>
            {errorMsg && (
              <p className="text-red-500 text-center mt-2x">{errorMsg}</p>
            )}
          </form>
        </div>
      )}
      :
      {verification && (
        <div className="mt-20 bg-white w-100 h-100 rounded-lg shadow-2xl">
          <div className="">
            <h1
              className="text-4xl p-2 mt-5 ml-10"
              style={{ color: "#1A3D63" }}
            >
              Almost there!
            </h1>
            <h1 className="ml-10 -mt-3 p-2">Let's verify your account</h1>
          </div>

          <form onSubmit={verificar} className="-mt-6">
            <div className="m-10 p-2">
              <label htmlFor="code" className="block">
                Type your code
              </label>
              <input
                value={code}
                id="code"
                type="text"
                className="border-2 w-full text-center mt-5 border-gray-300 rounded-lg block h-10 text-lg p-5"
                placeholder="eg. 123456"
                onChange={(e) => setCode(e.target.value)}
              />
              <button
                className="mt-10 text-center rounded-lg cursor-pointer"
                style={{
                  backgroundColor: "#1A3D63",
                  color: "white",
                  width: "100px",
                  height: "40px",
                }}
              >
                Verify
              </button>
            </div>
          </form>
          {errorMsg && (
            <p className="text-red-500 text-center mt-2x">{errorMsg}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Signup;