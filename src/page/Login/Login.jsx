import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import useAuth from '../../hooks/UseAuth';



const Login = () => {
    const { userLogin, loginWithGoogle } = useAuth()
    const location = useLocation()
    const navigate = useNavigate()
    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        userLogin(email, password)
            .then(() => {
                toast('successfully login')
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                toast(`${error.message}`)
            })
    }
    const handleGoogleLogin = e => {
        e.preventDefault();
        loginWithGoogle()
            .then(() => {
                toast('successfully login with google')
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                toast(`${error.message}`)
            })
    }
    return (
        <div>
            <div className="min-h-screen bg-base-200">
                <div className="hero-content max-w-xl mx-auto">
                    <div className="card placeholder: flex-shrink-0 w-full shadow-2xl bg-base-100">
                        <form  onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>

                            <button onClick={handleGoogleLogin} className="btn flex items-center border p-3 rounded-lg btn-info btn-outline my-3"><FaGoogle />Login with Google</button>
                            <p className="font-semibold text-center">Dont’t Have An Account ? <Link to="/register" className="text-red-600">Register</Link></p>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default Login;