import {useState, useEffect} from "react";
import axios from "axios";
import './App.css'

function App() {
  const baseUrl = "http://localhost:8080/api";

  const [boards, setBoards] = useState([]);

  useEffect(() => {
    getBoards();
  }, []);

  async function getBoards() {
    await axios
        .get(baseUrl + '/boards')
        .then((res) => {
          console.log(res.data);
          setBoards(res.data);
        })
        .catch((err) => {
          console.log(err);
        })
  }

  return (
    <>
      <h1>Hello World!</h1>
      {
        boards.map((board) => {
          return <div key={board.id}>{board.title}</div>
        })
      }
    </>
  )
}

export default App
