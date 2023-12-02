import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const Register = () => {
    const [showPassword, setShowPassword] = useState(false)
    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = data => {

        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const userInfo = {
                            name: data.name,
                            email: data.email,
                            photoURL: data.photoURL
                        }
                        axiosPublic.post('/users', userInfo)
                        .then(res => {
                            if (res.data.insertedId) {
                                reset();
                                Swal.fire({
                                    title: "Good job!",
                                    text: "You have registered successfully!",
                                    icon: "success"
                                });
                                navigate('/');
                            }
                        })
                        
                    })
                    .catch(error => console.log(error))
            })
    };

    

    return (
        <div className='lg:mx-40 md:mx-10 mx-5 mb-20'>
            <div className="text-center my-10">
                <p className="font-medium">Start With Titans</p>
                <h1 className="text-[#ffb229] font-bold text-3xl">Register</h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mb-10">
                <div className="text-center text-sm space-y-2">

                    <input className="rounded-full border-2 py-2 px-6 lg:w-1/3 focus:border-[#ffb229]" type="text" {...register("name", { required: true })} name="name" placeholder="Your name" />
                    {errors.name && <span className="text-red-600">Name is required</span>}
                </div>
                <div className="text-center space-y-2">

                    <input className="rounded-full border-2 py-2 px-6 lg:w-1/3 focus:border-[#ffb229]" type="email" {...register("email", { required: true })} name="email" placeholder="Your email" required />
                    {errors.email && <span className="text-red-600">Email is required</span>}
                </div>
                <div className="text-center space-y-2">

                    <input className="rounded-full border-2 py-2 px-6 lg:w-1/3 focus:border-[#ffb229]" type="text" {...register("photoURL", { required: true })} name="photoURL" placeholder="Your photo URL" />
                    {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}

                </div>
                <div className="text-center space-y-2">

                    <div className="relative">
                        <input className="rounded-full border-2 py-2 px-6 lg:w-1/3 focus:border-[#ffb229]" type={showPassword ? "text" : "password"} {...register("password", {
                            required: true,
                            minLength: 6,
                            maxLength: 20,
                            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                        })} name="password" placeholder="Password" required />
                        <span className="absolute top-4 -ml-10" onClick={() => setShowPassword(!showPassword)}>
                            {
                                showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                            }
                        </span>
                        {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                        {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                        {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                        {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                    </div>
                </div>
                <div className="flex gap-2 items-center justify-center">
                    <input type="checkbox" name="terms" />
                    <label className="dark:text-white" htmlFor="terms">Accept our <a className="text-blue-700 font-semibold hover:underline" href="#">terms</a> and <a className="text-blue-700 font-semibold hover:underline" href="#">conditions</a></label>
                </div>
                <input className="flex items-center mx-auto bg-[#ffb229] text-white font-bold rounded-full px-6 py-2 hover:bg-gray-300 hover:text-black" type="submit" value="Register" />
            </form>
            <p className="text-center pb-20 dark:text-white">Already have an account? <Link className="text-[#ffb229] font-bold hover:underline" to='/login'>Login</Link></p>
        </div>
    );
};

export default Register;