import React, { useEffect  } from 'react'
import { useForm } from 'react-hook-form'
import * as firebase from 'firebase'
import { Link } from 'react-router-dom'

function Signup() {
    
    const { register, handleSubmit, errors } = useForm()

    useEffect(() => {
        firebase.auth().onAuthStateChanged((currentUser) => {
            if (!currentUser) {
                console.log('Not Authenticated')
            } else {
                //redirect to feed
                console.log('redirect to feed')
            }
        })
    })
    

    const loginUser = formData => {
    }

    return (
        <form className="w-1/2 p-4" onSubmit={handleSubmit(loginUser)}>
            <input
                type="email"
                placeholder="email"
                name="userEmail"
                ref={register({ required: true })}
                className="border-b-2 p-2 w-full border-indigo-200" />
            <i className="text-red-600 mb-6 block h-2 px-2 text-xs">
                {errors.userEmail && 'email address required!'}
            </i>
            <input
                type="password"
                placeholder="password"
                name="userPassword"
                ref={register({ minLength: 8, required: true })}
                className="border-b-2 p-2 w-full border-indigo-200" />
            <i className="text-red-600 mb-6 block px-2 h-2 text-xs">
                {errors.userPassword && 'password is required!'}
            </i>
            <input
                type="submit"
                value="LOGIN"
                name="loginBtn"
                className="p-3 w-full mt-8 mb-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-400" />
            <div className="mb-6 text-sm text-center">
                Don't have an account, then <Link to="/signup" className="text-indigo-500 hover:underline">signup</Link>
            </div>
        </form>
    )
}

export default Signup
