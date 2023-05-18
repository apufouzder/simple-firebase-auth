import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthProvider } from "./Providers";

const Header = () => {
    const { user, logOut } = useContext(AuthProvider);
    console.log(user);

    const handleLogOut = () => {
        logOut().then(() => { }).catch((error) => {
            console.log(error.message);
         });
    }

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
                {user ?
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://cdn.pixabay.com/photo/2021/04/07/17/01/woman-6159648_960_720.jpg" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li className="mb-3">
                                {user && user.email}
                            </li>
                            <li><a onClick={handleLogOut} className="btn btn-active btn-ghost">Logout</a></li>
                        </ul>
                    </div>
                    :
                    <Link to="/login" className="btn btn-active">Log In</Link>
                }
            </div>

        </div>


    );
};

export default Header;