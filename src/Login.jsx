import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase.init";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthProvider } from "./Providers";


const Login = () => {
    const [user, setUser] = useState(null);
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user);
                console.log(user);
            }).catch((error) => {
                console.log(error);
            });
    }

    const handleGoogleSignOut = () => {
        signOut(auth).then(() => {
            setUser(null);
        }).catch((error) => {
            console.log(error);
        })
    }

    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const user = result.user;
                setUser(user);
                console.log(user);
            }).catch(error => {
                console.log(error);
            })
    }

    const { loggedInUser } = useContext(AuthProvider);


    const handleLoggedIn = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        loggedInUser(email, password)
            .then(result => {
                const loggedIn = result.user;
                console.log(loggedIn);
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <>
            {user ?
                <button onClick={handleGoogleSignOut}>Sign Out</button> :
                <>
                    <button onClick={handleGoogleSignIn}>Google</button>
                    <button onClick={handleGithubSignIn}>Github</button>
                </>
            }

            {
                user && <div>
                    <h2>User: {user.displayName}</h2>
                    <p>{user.email}</p>
                </div>
            }

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLoggedIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name="password" placeholder="password" className="input input-bordered" />

                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <div>
                                <span>Create an account <Link className="btn btn-link" to="/register">Register</Link> </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </ >
    );
};

export default Login;