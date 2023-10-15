import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div className="flex gap-5 my-4 items-center justify-center ">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/users"}>Users</NavLink>
            <NavLink to={"/singup"}>Sing Up</NavLink>
            <NavLink to={"/login"}>Login</NavLink>
        </div>
    );
};

export default Header;