import React, {Component} from'react'
import {Link} from 'react-router-dom'

class SingleServices extends Component {
    render () {
        return (
            <>
                <div className='col-lg-6 col-md-12 mt-4'>
                    <img src={this.props.image} className='service-image' />
                    <p className='services-subtitle py-4'>{this.props.subtitle}</p>
                    <ul className='roles'>
                        <li className='sub-roles'>{this.props.role1}</li>
                        <li className='sub-roles'>{this.props.role2}</li>
                        <li className='sub-roles'>{this.props.role3}</li>
                    </ul>
                    <button type='submit' className='service-button'><Link className="service-link" to="#">Read More</Link></button>
                </div>
                <div className="col-lg-6 col-md-12 mt-4">
                <img src={this.props.image2} className='service-image' />
                    <p className='services-subtitle py-4'>{this.props.subtitle2}</p>
                    <ul className='roles'>
                        <li className='sub-roles'>{this.props.role4}</li>
                        <li className='sub-roles'>{this.props.role5}</li>
                        <li className='sub-roles'>{this.props.role6}</li>
                    </ul>
                    <button type='submit' className='service-button'><Link className="service-link" to="#">Read More</Link></button>
                </div>
            </>
        )
    }
}
export default SingleServices