import React, { Fragment } from 'react'
import trendsBanner from '../../../assests/trends_banner_white.svg'
import HalfScreenBanner from '../../Layouts/HalfScreenBanner'
import Signup from '../../Signup/Signup'

function SignupPage() {
    return (
        <Fragment>
            <div className="flex">
                <HalfScreenBanner title = "Signup" icon={trendsBanner}/>
                <div className="h-screen w-1/2 flex items-center justify-center">
                    <Signup/>
                </div>
            </div>
        </Fragment>
    )
}

export default SignupPage
