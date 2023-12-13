import React from 'react';

function App() {
  useEffect(() => {
    document.title = "Salesforce Service Cloud";
  }, []);
  const value = 'Joel';
  return <div>Hello {value}</div>;
}

export default App;
