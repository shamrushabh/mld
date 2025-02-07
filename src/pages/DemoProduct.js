import React, { useState } from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';
import Notiflix from 'notiflix';
import axios from 'axios';

const Login = () => {
    useDocTitle('MLD | Molad e Konsult - Login')

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [errors, setErrors] = useState([]);

    const clearErrors = () => {
        setErrors([]);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        document.getElementById('loginBtn').disabled = true;
        document.getElementById('loginBtn').innerHTML = 'Logging in...';
        
        try {
            const response = await axios.post(process.env.REACT_APP_LOGIN_API, {
                email,
                password,
                rememberMe,
            });
            
            Notiflix.Report.success('Success', response.data.message, 'Okay');
            // Redirect user after login
        } catch (error) {
            document.getElementById('loginBtn').disabled = false;
            document.getElementById('loginBtn').innerHTML = 'Login';
            
            if (error.response && error.response.data.errors) {
                setErrors(error.response.data.errors);
            } else {
                Notiflix.Report.failure('Login Failed', 'Invalid email or password. Please try again.', 'Okay');
            }
        }
    };

    return (
        <>
            <NavBar />
            <div id='login' className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24">
                <div className="container mx-auto my-8 px-4 lg:px-20" data-aos="zoom-in">
                    <form onSubmit={handleSubmit} id="loginForm">
                        <div className="w-full bg-white p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
                            <div className="flex">
                                <h1 className="font-bold text-center lg:text-left text-blue-900 uppercase text-4xl">Login</h1>
                            </div>
                            <div className="my-6">
                                <input 
                                    name="email"
                                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    type="email" 
                                    placeholder="Email*"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    onKeyUp={clearErrors}   
                                />
                                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                            </div>

                            <div className="my-6">
                                <input 
                                    name="password"
                                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    type="password" 
                                    placeholder="Password*"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    onKeyUp={clearErrors}   
                                />
                                {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                            </div>

                            <div className="flex items-center my-4">
                                <input 
                                    type="checkbox" 
                                    id="rememberMe" 
                                    className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded" 
                                    checked={rememberMe} 
                                    onChange={() => setRememberMe(!rememberMe)}
                                />
                                <label htmlFor="rememberMe" className="ml-3 text-lg font-medium text-gray-900">Remember Me</label>
                            </div>
                            
                            <div className="my-2 w-1/2 lg:w-2/4">
                                <button type="submit" id="loginBtn" className="uppercase text-sm font-bold tracking-wide bg-gray-500 hover:bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                                        focus:outline-none focus:shadow-outline">
                                    Login
                                </button>
                            </div>
                            <div className="mt-4 text-right">
                                <a href="#" className="text-blue-900 font-medium">Forgot Password?</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Login;
