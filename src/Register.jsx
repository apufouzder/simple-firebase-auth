import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthProvider } from "./Providers";

const Register = () => {
    const { user, createUser } = useContext(AuthProvider);
    console.log(user);

    const handleRegister = (e) => {
        e.preventDefault();

        const form = e.target;
        // const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const loggedIn = result.user;
                console.log(loggedIn);
                form.reset();
            })
            .catch(error => {
                console.log(error.message);
            })
        
    }

    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                    </div>

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered" />
                            </div>

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
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />

                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">Register</button>
                            </div>
                            <div>
                                <span>Already have an account <Link className="btn btn-link" to="/login">Login Now</Link> </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;