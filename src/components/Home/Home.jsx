import { Outlet } from "react-router-dom";


const Home = () => {
    return (
        <div>
            <h1>This is home page</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;