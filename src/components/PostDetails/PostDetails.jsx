import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const PostDetails = () => {

    const post = useLoaderData();
    const { id, title, body } = post;

    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    }

    const { postId } = useParams();
    console.log(postId);

    return (
        <div>
            <h3>Post details about: {id}</h3>
            <h2>Title: {title}</h2>
            <p>{body}</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;