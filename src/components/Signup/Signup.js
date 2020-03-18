import React, { useEffect,useState } from 'react'
import { useForm } from 'react-hook-form'
import * as firebase from 'firebase'

function Signup() {
    
    const { register, handleSubmit, errors, watch } = useForm()
    const [showVerifyMsg, setShowVerifyMsg] = useState(false)

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
    

    const registerUser = formData => {
        firebase.auth().createUserWithEmailAndPassword(formData.userEmail,formData.userPassword).then(data=>{
            data.user.sendEmailVerification().then(() => {
                setShowVerifyMsg(true)
            }).catch((error)=>{
                throw error
            })
        }).catch(error =>{
            throw error
        })
    }

    const validateConfirmPassword = (value) => value === watch('userPassword')

    return (
        <form className="w-1/2 p-4" onSubmit={handleSubmit(registerUser)}>
            <input
                type="email"
                placeholder="email"
                name="userEmail"
                ref={register({ required: true })}
                className="border-b-2 p-2 w-full border-indigo-200" />
            <i className="text-red-600 px-2 mb-6 text-xs">
                {errors.userEmail && 'not a valid email address!'}
            </i>
            <input
                type="name"
                placeholder="name"
                name="userName"
                ref={register({ required: true })}
                className="border-b-2 p-2 w-full border-indigo-200" />
            <i className="text-red-600 px-2 mb-6 text-xs">
                {errors.userName && 'not a valid user name!'}
            </i>
            <input
                type="password"
                placeholder="password"
                name="userPassword"
                ref={register({ minLength: 8, required: true })}
                className="border-b-2 p-2 w-full border-indigo-200" />
            <i className="text-red-600 px-2 mb-6 text-xs">
                {errors.userPassword && 'password too short (should contain atleast 8 characters).'}
            </i>
            <input
                type="password"
                placeholder="confirm password"
                name="userConfirmPassword"
                ref={register({ required: true, validate: validateConfirmPassword })}
                className="border-b-2  p-2 w-full border-indigo-200" />
            <i className="text-red-600 px-2 mb-6 text-xs">
                {errors.userConfirmPassword && 'doesnt match with password!'}
            </i>
            <input
                type="submit"
                value="SIGNUP"
                name="signupBtn"
                className="p-3 w-full mt-8 mb-6 bg-indigo-500 text-white rounded-md hover:bg-indigo-400" />
           { showVerifyMsg && <div className="bg-white text-indigo-500 p-4 rounded-md shadow-lg flex items-center justify-around">
                <div className="text-2xl p-2">✉️</div>
                <div>verify your email address, verification email sent.</div>
            </div>}
        </form>
    )
}

export default Signup
