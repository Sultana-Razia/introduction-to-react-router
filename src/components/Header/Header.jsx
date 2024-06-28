import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <nav>
                <h1>My Website</h1>
                <Link to="/">Home</Link>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </nav>
        </div>
    );
};

export default Header;