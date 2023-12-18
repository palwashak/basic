import React from "react";
import nots from "../res.json";

function App() {
  const [notifications, setNotifications] = useState([]);
  useEffect(() => {
    setNotifications(nots);
    document.title = "Salesforce Service Cloud";
  }, []);
  const value = "Joel";
  return (
    <div>
      Hello {value}
      <p>{notifications}</p>
    </div>
  );
}

export default App;
