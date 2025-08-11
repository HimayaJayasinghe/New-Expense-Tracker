import React from 'react'
import AuthLayout from '../../components/layout/AuthLayout'

const Login = () => {
  return (
    <AuthLayout>
      <div className = "lg:w-[78%] h-3/4 md:h-full flex-col justify-center ">
        <h3 className ="text-xl font-semibold text-black">Welcome back</h3>
        <p className ="text-xs text-slate-700 mt-[5px] mb-6">please enter your details to log in </p>
      </div>
    </AuthLayout>
  )
}

export default Login

