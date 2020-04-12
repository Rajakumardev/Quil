import React from 'react'

function UnderConstruction(props) {
    return (
        <div>
            <div className="h-screen bg-indigo-500 w-screen flex flex-col items-center content-center justify-center">
                <div className="w-1/2"><img src={props.icon} alt={props.title}/></div>
                <h1 className="text-white text-2xl font-semibold px-8 py-3">{props.title}</h1>
            </div>
        </div>
    )
}

export default UnderConstruction
