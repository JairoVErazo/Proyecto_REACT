import React from "react";
import Header from "./components/Header";
import Login from "./components/Login";
import Footer from "./components/Footer"; 
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  console.log(window.location.origin);

  const { isAuthenticated } = useAuth0();
  
  return (
    <div> 
      {isAuthenticated ? (
        <Header />
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
