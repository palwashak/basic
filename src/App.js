import React from "react";
import { useEffect } from "react";
import { useRoutes } from "react-router-dom";
import About from "./About";
import Test from "./Test";

function App() {
  
  useEffect(() => {
    document.title = "Salesforce Service Cloud";
  }, []);

  let element = useRoutes([
    { path: "/", element: <About /> },
    { path: "/about", element: <About /> },
    { path: "/test", element: <Test /> }
  ]);

  return element;
}

export default App;
