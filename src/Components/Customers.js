import React, {Component} from'react'
import image from '../react-assets/Customers.png'

class Customers extends Component {
    render () {
        return (
            <>
                <div className='customers-image'>
                    <img src={image} className=""></img>
                </div>
            </>
        )
    }
}

export default Customers;