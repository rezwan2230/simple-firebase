
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { useContext } from "react";
import { AuthContext } from "./Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

    const { logIn, signInWithGoogle } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value

        console.log(email, password);
        logIn(email, password)
            .then(result => {
                 console.log(result.user); 
                 navigate('/')
                 e.target.reset()
                })
            .catch(error => { console.error(error.message); })
    }

    const handleGoggleSignIn = () => {
        signInWithGoogle()
            .then(result => { console.log(result.user); })
            .catch(error => { console.error(error.message); })
    }


    return (
        <div className="">
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col w-[500px] -mt-28">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold mb-2">Login now!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">

                            <form onSubmit={handleLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name="email" placeholder="email" className="input input-bordered" />
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
                                    <button className="btn bg-[#1EA69A]">Login</button>
                                </div>
                                <div className="mt-6">
                                    <hr />
                                </div>
                            </form>


                            <div onClick={handleGoggleSignIn} className="mt-5 flex justify-center items-center gap-4 border-[1px] border-zinc-300  mx-5 py-2 rounded-3xl">
                                <div className="text-2xl"><FcGoogle></FcGoogle></div>
                                <div className="font-medium">Log in with Google</div>
                            </div>
                            <div className="mt-3 flex justify-center items-center gap-4 border-[1px] border-zinc-300  mx-5 py-2 rounded-3xl">
                                <div className="text-2xl"><BsGithub></BsGithub></div>
                                <div className="font-medium">Log in with GitHub</div>
                            </div>

                            <div className="mt-3 text-center" >
                                <p>Not a member? <Link to={'/register'}><span className="text-blue-600 font-semibold">Register here</span></Link></p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;