import React from "react";
import { useAuth } from "../context/AuthContext";

function HomePage() {
  const { currentUser } = useAuth();
  return (
    <div>
      {currentUser ? `Connecté en tant que ${currentUser.email}` : HomePage}
    </div>
  );
}

export default HomePage;
