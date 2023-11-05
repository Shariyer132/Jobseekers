
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import useAuth from "../../hooks/UseAuth";



const Register = () => {
    const { userRegister, updateProfilePic } = useAuth()
    const navigate = useNavigate()
    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        const name = form.get('name');
        const photo = form.get('photo');
        if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&*()\-+!]).{6,32}$/.test(password)) {
            return toast('please provide a strong password')
        }
        toast("successfully register")
        userRegister(email, password)
            .then(() => {
                updateProfilePic(name, photo)
                    .then(() => {
                        console.log('profile updated');
                    })
                    .catch(() => {
                       console.log('something is wrong');
                    })
                    navigate('/')
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div>
            <div className="min-h-screen bg-base-200">
                <div className="hero-content max-w-xl  mx-auto">
                    <div className="card placeholder: flex-shrink-0 w-full shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister}  className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photo" placeholder="Your Photo URL" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Your email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Your password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <p className="font-semibold text-center">Have An Account ? <Link to="/login" className="text-red-600">Login</Link></p>
                        </form>
                    </div>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default Register;