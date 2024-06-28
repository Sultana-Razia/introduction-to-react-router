import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const User = ({ user }) => {
    const { id, name, email, phone } = user;
    // console.log(user);
    const userStyle = {
        border: '2px solid yellow',
        padding: '10px',
        borderRadius: '20px'
    }
    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <p>Phone: {phone}</p>
            <p>Email: {email}</p>
            <Link to={`/user/${id}`}>Show details</Link>
            <Link to={`/user/${id}`}>
                <button>Click Me</button>
            </Link>
        </div>
    );
};

User.propTypes = {
    user: PropTypes.object
}

export default User;