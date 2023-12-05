import React from "react";
import { useState } from "react";
import HomePart from "./homePart";
export default function SignupForm(){
const [isAuthenticated, setAuthenticated] = useState(false);

const [isDisplay,setDisplay]=useState(false)

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
 
  const handleSignUp = async (e) => {
    e.preventDefault();
    
    
    setAuthenticated(true);
  };


  const handleLogin = async (e) => {
    e.preventDefault();

    
    setAuthenticated(true);
  };


  const handleLogout = () => {
    
    setAuthenticated(false);
  };

const handleHaveAccount=()=>{
setDisplay(true)
}
return (
<div  >
      
        {isAuthenticated ? (
          <HomePart/>
        ) : (
<div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className=" sm:max-w-md w-full space-y-8 p-8 bg-white rounded-md shadow-lg">
            {!isDisplay ? (
              <><form onSubmit={handleSignUp} className="space-y-6">
<h2 className="font-semibold text-xl text-center">Sign Up</h2>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                    required />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Create Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                    required />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                    required />
                </div>
<div className="space-y-2">
                  <button
                    type="submit"
                    className="bg-blue-400 text-white px-4 py-2 rounded-md w-full"
                  >
                    Google
                  </button>
 <button
                    type="submit"
                    className="bg-blue-400 text-white px-4 py-2 rounded-md w-full"
                  >
                    Facebook
                  </button>
                </div>
                <div>
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                  >
                    Sign Up
                  </button>
                </div>
              </form><div className="mt-4">
                  <button onClick={handleHaveAccount} className="hover:text-blue-500">
                    Already have an account? Log in below.
                  </button>
                </div></>
            ):("") }
             
            

            {isDisplay && (
              <form onSubmit={handleLogin} className="space-y-6">
<h2 className="font-semibold text-xl text-center">Log In</h2>
               <div>
                    <label htmlFor="login-email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      id="login-email"
                      name="login-email"
                      className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                      required />
                  </div>
                  <div>
                    <label htmlFor="login-password" className="block text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <input
                      type="password"
                      id="login-password"
                      name="login-password"
                      className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                      required />
                  </div>
                <div>
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                  >
                    Log In
                  </button>
                </div>
              </form>
            )}
          </div>
</div>
        )}
      </div>
   



)}



