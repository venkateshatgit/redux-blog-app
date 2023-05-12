import { useState } from "react";
import './addForm.css'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postAdd } from "../posts/postsSlice";
import { nanoid } from "@reduxjs/toolkit";

function AddForm() {
    const [title, settitle] = useState()
    const [content, setcontent] = useState()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSubmit = () => {

        if (title && content) {
            dispatch(
              postAdd({
                id: nanoid(),
                title,
                content
              })
            )
        }
        navigate("/posts")
    }

    return (
        <form className="add-form">
            <label>Title: </label>
            <input type="text" name="title" onChange={(e) => settitle(e.target.value)}/>

            <label>Content: </label>
            <textarea name="content" onChange={(e) => setcontent(e.target.value)} />

            <button onClick={() => handleSubmit()}>Submit</button>
        </form>
    );
}

export default AddForm;