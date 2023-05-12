import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function SinglePostPage() {
    const params = useParams()
    const post = useSelector(state => 
        state.posts.find(post => 
            post.id === params.id
    ))

    return (  
        <>
            <h1>Title: {post.title}</h1>
            <p>Content: {post.content}</p>
        </>
    );
}

export default SinglePostPage;