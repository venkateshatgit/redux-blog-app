import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { postUpdate, postDelete} from "../postsSlice";
import './editPost.css'


function EditPost() {

    const params = useParams();
    const post = useSelector(state => 
        state.posts.find(post => 
            post.id === params.id
    ))

    const [title, settitle] = useState(post.title)
    const [content, setcontent] = useState(post.content)
    
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleClick = (e) => {



        if( e.target.textContent === "Update post"){
            if (title && content) {
                dispatch(
                    postUpdate({
                        id: post.id,
                        title,
                        content
                    })
                )
            }
        }
        else if(e.target.textContent === "Delete post"){
            dispatch(
                postDelete({
                    id: post.id
                })
            )
        }


        navigate("/posts")
    }

    return (
        <div className="edit-form">
            <label>Title: </label>
            <input 
                type="text" 
                name="title" 
                value={title}  
                onChange={(e) => settitle(e.target.value)}
            />

            <label>Content: </label>
            <textarea 
                name="content" 
                value={content} 
                onChange={(e) => setcontent(e.target.value)} 
            />
            
            <div className="edit-buttons" >
                <button onClick={(e) => handleClick(e)}>Update post</button>
                <button onClick={(e) => handleClick(e)}>Delete post</button>
            </div>
        </div>      
    );
}

export default EditPost;