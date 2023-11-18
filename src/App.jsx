// eslint-disable-next-line no-unused-vars
import React from "react";
import axios from "axios";
import {useState, useEffect} from "react";
import './App.css'
import Input from './components/Input.jsx'
import Boards from "./components/Boards.jsx";
import { getBoards } from "./api/BoardList.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {

    const [boards, setBoards] = useState([]);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    useEffect(() => {
        getBoards().then((response) => {
            console.log(response.data);
            setBoards(response.data);
        });
    }, []);

    function insertPlan(e) {
        e.preventDefault(); //함수마다 넣어주는게 좋다.

        const insertPlan = async () => {
            await axios
                .post("http://localhost:8080/api" + "/boards", {
                    title: title,
                    content: content
                })
                .then((res) => {
                    console.log(res.data);
                    setTitle("");
                    setContent("");
                    getBoards();
                })
                .catch((err) => {
                    console.log(err)
                })
        }
        insertPlan();
        console.log("Check!")
    }

    function inputTitle(e) {
        e.preventDefault();
        setTitle(e.target.value);
    }

    function inputContent(e) {
        e.preventDefault();
        setContent(e.target.value);
    }

    return (
        <>
            <h1>회의실 일정</h1>


            <Input handleSubmit={insertPlan}
                   title={title}
                   content={content}
                   titleChange={inputTitle}
                   contentChange={inputContent}
            />

            <BrowserRouter>
                <Routes>
                    <Route path="/boards" element={<Boards board={boards}/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
