import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom' // <-- Add Link here
import AuthLayout from '../../components/layout/AuthLayout'
import Input from '../../components/inputs/Input' 
import { validateEmail } from '../../utils/Helper' 
import ProfilePhotoSelector from '../../components/inputs/ProfilePhotoSelector';

const Signup = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(null);

  const navigate =useNavigate();
//handle signup form submit
   const handleSignUp = async (e) => {
     e.preventDefault();

     let profileImageUrl = "";
     
     setError(null);
     if (!fullName || !email || !password) {
       setError('Please fill in all fields.');
       return;
     }
     if (!validateEmail(email)) {
       setError('Please enter a valid email address.');
       return;
     }
     if (password.length < 8) {
       setError('Password must be at least 8 characters.');
       return;
     }
     // Simulate signup success
     // TODO: Replace with actual signup API call
     navigate('/dashboard');
   }
  return (
   <AuthLayout>
      <div className="lg:w-[100%] h-auto md:h-full mt-10 md:mt-0 flex flex-col justify-center">
        <h3 className = "text-xl font-semibold text-black">Create an Account</h3>
        <p className="text-xs text-slate-700 mt-[5px] mb-6">Join us today by entering your details below.</p>

        {error && (
          <div className="text-red-500 text-sm mb-4">{error}</div>
        )}


        <form onSubmit={handleSignUp}>

          <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input 
              type="text" 
              label="Full Name" 
              placeholder="Enter your full name" 
              value={fullName} 
              onChange={({target}) => setFullName(target.value)}
       
            />
            <Input
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            label="Email Address"
            placeholder="john@example.com"
            type="text"
          />
          <div className="col-span-2">
          <Input
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            label="Password"
            placeholder="Min 8 Characters"
            type="password"
          />
          </div>
            
          </div>
            <button
              type="submit"
              className="w-full mt-6 py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Sign Up
            </button>
            <p className="text-xs text-center mt-4">
              Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
            </p>
      
        </form>
      </div>
    </AuthLayout>
  )
}


export default Signup
