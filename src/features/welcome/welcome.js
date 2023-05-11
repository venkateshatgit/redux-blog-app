import { useNavigate } from "react-router-dom";

function Welcome() {
    const navigate = useNavigate();

    return ( 
        <>          
            <h1>Welcome</h1>
            <button onClick={() => navigate("/posts")}>Go to Posts</button>
        </>
    );
}

export default Welcome;