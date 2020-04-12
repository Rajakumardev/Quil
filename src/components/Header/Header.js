import React from "react"
import avatar from "../../assests/profile.svg"
import * as firebase from 'firebase'

function Header() {

    const signout = (e) => {
        if(firebase.auth().currentUser !== null){
            firebase.auth().signOut()
        }
    }

  return (
    <div className="w-screen h-16 bg-indigo-500 flex flex-row items-center">
        <div className="flex w-full flex-row flex-reverse justify-start items-center">
            <a href="#" className="h-12 w-12 mx-4 rounded-full shadow-xl block">
                <img src={avatar} />
            </a>
            <h1 className="text-xl text-white px-4 font-medium">Quil</h1>
        </div>
      <div className="flex w-full flex-row flex-reverse justify-end items-center">
        <a href="#" className="block text-white text-xl mx-6">
          <i className="fa fa-pencil"></i>
        </a>
        <a href="#" className="block text-white text-xl mx-6" onClick={signout}>
          <i className="fa fa-power-off"></i>
        </a>
      </div>
    </div>
  );
}

export default Header;
