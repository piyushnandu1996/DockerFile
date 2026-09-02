import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    const API_URL = import.meta.env.VITE_API_URL || "http://13.206.204.68:5000";

    fetch(`${API_URL}/api/message`)
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(() => setMessage("Backend not reachable"));
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h1>DevOps Demo Project</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;

