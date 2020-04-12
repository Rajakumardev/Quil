import React from 'react'
import HashLoader from 'react-spinners/HashLoader'

function Loader(props) {
    return (
        <div className="w-full h-full flex items-center justify-center">
            <HashLoader loading = {props.loading} color={"#667EEA"}/>
       </div>
    )
}

export default Loader
