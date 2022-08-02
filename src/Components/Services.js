import React, { Component } from 'react';
import SingleServices from './SingleServices';
import image1 from '../react-assets/ServiceImage.png'
import image2 from '../react-assets/ServiceImage2.png'


const services = [
    {
        image:image1, 
        image2:image2,
        subtitle:"Sourcing and engaging passive complex roles in tight labor market, such as",
        subtitle2:"Vetting through roles with a higher volume of candidates and building a shortlist",
        role1:"Software Engineers",
        role2:"UX Designers",
        role3:"Project Managers",
        role4:"HR and Recruitment",
        role5:"Marketing",
        role6:"Inside and Outside Sales"
    },
]

class Services extends Component {
    render () {
        return (
            <>
                <section className='our-services'>
                    <div className='container'>
                    <div className='text-center'>
                            <h2 className=''>Our Services</h2>
                            <p className=''>Early stage company? Eligible applicants get all our products for just $49 a month</p>
                        </div>
                        <div class="row">
                          {services.map((service,index)=>{
                              return <SingleServices {...service} Key={index} />
                          })}
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
export default Services