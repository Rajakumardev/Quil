import React, {Fragment} from 'react'
import trendsBanner from '../../../assests/trends_banner_white.svg'
import HalfScreenBanner from '../../Layouts/HalfScreenBanner'
import Login from '../../Login/Login'

function LoginPage() {
    return (
        <Fragment>
            <div className="flex">
                <HalfScreenBanner title="Login" icon={trendsBanner} />
                <div className="h-screen w-1/2 flex items-center justify-center">
                    <Login/>
                </div>
            </div>
        </Fragment>
    )
}

export default LoginPage
