import React, { Fragment } from 'react'
import trendsBanner from '../../assests/trends_banner_white.svg'
import HalfScreenBanner from '../layout/HalfScreenBanner'

function Signup() {
    return (
        <Fragment>
            <HalfScreenBanner title = "Signup" icon={trendsBanner}/>
        </Fragment>
    )
}

export default Signup
