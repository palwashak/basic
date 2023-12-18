import React from "react";
import { useEffect } from "react";
import { useRoutes } from "react-router-dom";
import About from "./About";

function App() {
  
  useEffect(() => {
    document.title = "Salesforce Service Cloud";
  }, []);


  let element = useRoutes([
    { path: "/about", element: <About /> }
  ]);

  return element;
}

export default App;
