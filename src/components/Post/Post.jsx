import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({ post }) => {
    const { id, title } = post;

    const navigate = useNavigate();

    const postStyle = {
        border: '2px solid yellow',
        padding: '10px',
        borderRadius: '20px'
    }

    const handleShowDetail = () => {
        navigate(`/post/${id}`);
    }

    return (
        <div style={postStyle}>
            <h3>Post of id: {id}</h3>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Post Detail</Link>
            <Link to={`/post/${id}`}>
                <button>Show Details</button>
            </Link>
            <button onClick={handleShowDetail}>Click to see details</button>
        </div>
    );
};

Post.propTypes = {
    post: PropTypes.object
}

export default Post;