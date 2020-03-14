import React from 'react'

function Signup() {
    return (
        <form className="w-1/2 p-4">
            <input 
            type="email"
            placeholder="email"
            name="userEmail"
            className="border-b-2 mb-6 p-2 w-full border-indigo-200"/>
            <input 
            type="name"
            placeholder="name"
            name="userName"
            className="border-b-2 p-2 mb-6 w-full border-indigo-200"/>
            <input 
            type="password"
            placeholder="password"
            name="userPassword"
            className="border-b-2 mb-6 p-2 w-full border-indigo-200"/>
            <input 
            type="password"
            placeholder="confirm password"
            name="userConfirmPassword"
            className="border-b-2 mb-6 p-2 w-full border-indigo-200"/>
            <input 
            type="submit"
            value="SIGNUP"
            name="signupBtn"
            className="p-3 w-full mt-8 bg-indigo-500 text-white rounded-md hover:bg-indigo-400"/>
        </form>
    )
}

export default Signup
