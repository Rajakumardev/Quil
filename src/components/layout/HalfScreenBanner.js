import React from 'react'

function HalfScreenBanner(props) {
    return (
        <div className = "h-screen bg-indigo-500 w-1/2">
           <h1 className="text-white text-2xl font-semibold px-8 py-3">{props.title}</h1>
           <img src={props.icon} alt={props.title} className="p-12"/>
        </div>
    )
}

export default HalfScreenBanner
