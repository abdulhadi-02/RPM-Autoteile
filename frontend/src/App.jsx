import { useState , useEffect} from 'react'
import './App.css'
import axios from "axios"


function App() {
 
  const [message, setMessage] = useState("");
const [loading, setLoading] = useState(true);

useEffect(() => {
  axios.get("http://localhost:5000/api/message")
  .then(Response => {
setMessage(Response.data.message);
  setLoading(false);
  })
  .catch(error => {
    console.log("There was an erroe fetching the message!", error);
    setMessage("Failed to load message from backend");
    setLoading(false);
  });
}, []);

  return (
    <>
     <div style={{padding:"20px"}}>
      <h1>Simple Express + React vite App</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <p>{message}</p>
      )}
     </div>
    </>
  )
}

export default App
