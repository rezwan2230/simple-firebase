import { useContext } from "react";
import { AuthContext } from "./Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
    const { createUser } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault();
        // const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value

        createUser(email, password)
            .then(result => {
                console.log(result.user)})
                navigate('/')
                e.target.reset()

            .catch(error => console.error(error.message))
    }

    return (
        <div className="">
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col w-[500px] -mt-28">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold mb-2">Register now!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">

                            <form onSubmit={handleRegister}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="name" className="input input-bordered" name="name" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input input-bordered" name="email" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" className="input input-bordered" name="password" required />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-[#1EA69A]">Register</button>
                                </div>
                            </form>
                            <div  className="mt-3 text-center" >
                            <p>Already have an account? <Link to={'/login'}><span className="text-blue-600 font-semibold">Login here</span></Link></p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;