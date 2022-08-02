import React, { Component } from 'react';
import awards from '../react-assets/Achievements.png'

class Awards extends Component {
    render () {
        return (
            <>
                <div className="">
                    <img src={awards} className='' />
                </div>
            </>
        )
    }
} 

export default Awards