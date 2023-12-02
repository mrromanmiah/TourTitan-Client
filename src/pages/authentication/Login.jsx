import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";



const Login = () => {
    const { signIn, googleSignIn } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic()
    const location = useLocation()
    const navigate = useNavigate();
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        setRegisterError('');
        setSuccess('');
        if (password.length < 6) {
            setRegisterError('Password must be at least 6 characters');
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password must be at least 6 characters'
            })
            return;
        } if (!/^(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{6,}$/.test(password)) {
            setRegisterError('Password must be at least 6 characters long, with at least one capital letter and one special character.')
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password must be at least 6 characters long, with at least one capital letter and one special character.'
            })
            return;
        }

        signIn(email, password)
            .then(result => {
                console.log(result);
                setSuccess("Successfully logged in")
                Swal.fire(
                    'Good job!',
                    'Successfully logged in',
                    'success'
                )
                e.target.reset()
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error(error)
                setRegisterError(error.message)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'You have entered wrong email or password'
                })
            })
    };

    const handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                console.log(result);
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName,
                    photoURL: result.user?.photoURL
                }
                axiosPublic.post('/users', userInfo)
                .then(res =>{
                    console.log(res.data);
                    setSuccess("Successfully logged in")
                    Swal.fire(
                        'Good job!',
                        'Successfully logged in',
                        'success'
                    )
                    navigate(location?.state ? location.state : '/')
                })
               
            })
            .catch(error => {
                console.error(error)
                setRegisterError(error.message)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'You have entered wrong credentials. Please try again'
                })
            })
    }


    return (
        <div className="lg:mx-40 md:mx-10 mx-5 mb-20">
            <div className="text-center my-10">
                <p className="font-medium">Unlock Your Realm</p>
                <h1 className="text-[#ffb229] font-bold text-3xl">Login</h1>
            </div>
            <form onSubmit={handleLogin} className="space-y-4 mb-6 ">
                <div className="text-center space-y-2">
                   
                    <input className="rounded-full border-2 py-2 px-6 lg:w-1/3 focus:border-[#ffb229] " type="email" name="email" id="email" placeholder="E-mail" required />
                </div>
                <div className="text-center space-y-4">
                   
                    <div className="relative">
                        <input className="rounded-full border-2 py-2 px-6 lg:w-1/3 focus:border-[#ffb229] " type={showPassword ? "text" : "password"} name="password" id="password" placeholder="Password" required />
                        <span className="absolute top-4 -ml-10" onClick={() => setShowPassword(!showPassword)}>
                            {
                                showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                            }
                        </span>
                    </div>
                </div>
                <input className="flex items-center mx-auto bg-[#ffb229]  text-white font-bold rounded-full px-6 py-2 hover:bg-gray-300 hover:text-black" type="submit" value="Login" />
            </form>


            <div className="divider text-[#ffb229]  w-1/3 flex justify-center mx-auto font-medium dark:text-gray-600">OR</div>

            <div className="space-y-2 pb-20">
                <button onClick={handleGoogleLogin} className="bg-gray-300 text-black hover:bg-[#ffb229] hover:text-white font-bold text-sm mt-4 rounded-full px-4 py-2 flex items-center mx-auto">Login With <img className="w-8 h-8 ml-2" src={'https://i.ibb.co/vVdgSTt/google-1.png'} alt="" /></button>
                <p className="text-center dark:text-white">Don't have an account? <Link className="text-[#ffb229]  font-bold hover:underline" to='/register'>Register</Link></p>
            </div>
        </div>
    );
};

export default Login;