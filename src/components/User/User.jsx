import PropTypes from 'prop-types';

const User = ({ user }) => {
    const { id, name, email, phone } = user;
    console.log(user);
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
        </div>
    );
};

User.propTypes = {
    user: PropTypes.object
}

export default User;