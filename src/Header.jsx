import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthProvider } from "./Providers";

const Header = () => {
    const {user} = useContext(AuthProvider);
    console.log(user);
    return (
        <div className="navbar bg-base-300">
            <div className="navbar-start">
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-6 px-1">
                    <Link className="btn btn-ghost" to="/">Home</Link>
                    <Link className="btn btn-ghost" to="/order">Order</Link>
                    <Link className="btn btn-ghost" to="/login">Login</Link>
                    <Link className="btn btn-ghost" to="/register">Register</Link>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">
                    { user ? user.email : "Login"}
                </a>
            </div>
        </div>


    );
};

export default Header;