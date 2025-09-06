import React from "react";
import { useState } from "react";


export function VerifyCode(){

     const [errorMsg, setErrorMsg] = useState("");
      const [verification, setVerification] = useState(false);
      const [code, setCode] = useState("");
      
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
          useNavigate("/Redirect");
          console.log("✅ Registro completo, redirigiendo...");
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
    return(
        <form className="bg-white p-3 rounded-lg w-100" onSubmit={verificar}>
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Código de verificación"
            className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white w-full py-2 rounded-md mt-2"
          >
            Verificar Código
          </button>
        </form>
      )
}