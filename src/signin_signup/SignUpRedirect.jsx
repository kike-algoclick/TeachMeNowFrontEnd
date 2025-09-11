import { useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

export function SignUpRedirect (){
  const { user, isLoaded } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    // Solo proceder si el usuario está cargado
    if (isLoaded && user) {
      // Leemos el rol desde unsafeMetadata
      const userRole = user.unsafeMetadata.role;

      if (userRole === "teacher") {
        navigate("/main-teacher");
      } else if (userRole === "student") {
        navigate("/main-teacher");
      } else {
        // Fallback por si el rol no está definido
        navigate("/");
      }
    }
  }, [isLoaded, user, navigate]);

  // Muestra un mensaje de carga mientras Clerk obtiene los datos del usuario
  return <div>Cargando y configurando tu cuenta...</div>;
};
