import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import './postStyle.css'

function PostsList() {
    const posts = useSelector(state => state.posts)
    const navigate = useNavigate()

    const renderedPosts = posts.map(post => {
        return (
            <div className="post-style" >  
                <h1>{post.title}</h1>
                <p>{post.content.substring(0, 100)}</p>
            </div>
        )
    })


    return (  
        <div className="posts">
            <h1>Posts</h1>
            {renderedPosts}
            <button onClick={() => navigate("/add-form")}>Add post</button>
        </div>
    );
}

export default PostsList;