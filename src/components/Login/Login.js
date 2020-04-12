import React, { useEffect,useState  } from 'react'
import { useForm } from 'react-hook-form'
import * as firebase from 'firebase'
import { Link, useHistory } from 'react-router-dom'

function Signup() {
    
    const { register, handleSubmit, errors } = useForm()
    const history = useHistory()
    const [loginMessage, setloginMessage] = useState('')
    useEffect(() => {
        firebase.auth().onAuthStateChanged((currentUser) => {
            if (!currentUser) {
                //not authd
            } else {
                history.push('/')
            }
        })
    })
    

    const loginUser = formData => {
        firebase.auth().signInWithEmailAndPassword(formData.userEmail,formData.userPassword).catch(error => {
            switch(error.code){
                case "auth/wrong-password":
                    setloginMessage('username or password incorrect!')
                    break;
                case "auth/user-not-found":
                    setloginMessage('username or password incorrect!')
                    break;
                default:
                    setloginMessage('something went wrong!')
            }
        })
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
                {errors.userPassword && 'password should contain atleast 8 chars!'}
            </i>
            <input
                type="submit"
                value="LOGIN"
                name="loginBtn"
                className="p-3 w-full mt-8 mb-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-400" />
            <div className="mb-6 text-sm text-center">
                Don't have an account, then <Link to="/signup" className="text-indigo-500 hover:underline">signup</Link>
            </div>
            {loginMessage !== '' && <div className="mt-6 text-red-600 text-sm text-center">
                {loginMessage}
            </div>}
        </form>
    )
}

export default Signup
