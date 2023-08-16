import React from "react";
import CharacterList from "./components/CharacterList";
import Header from "./components/Header";
import Login from "./components/Login";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <>
      {isAuthenticated ? (
        <>
          <Header />
        </>
      ) : (
        <Login />
      )}
    </>
  );
}

export default App;
