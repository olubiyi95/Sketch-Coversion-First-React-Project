import React, { Component } from 'react';
import SauceCards from '../Components/SauceCards'
import image1 from '../react-assets/place.png'
import image2 from '../react-assets/reputation.svg'
import image3 from '../react-assets/famous.svg'
import { Link } from 'react-router-dom'


const saucecards= [
{image:image1, title:"Staying Local", subtitle:"Offshoring can be harmful to your brand image, which is why we belive in onshoring and nearshoring. Our recruiters are entirely located across the America, which also means the same timezone and workday"},
{image:image2, title:"Protect Your Brand Image", subtitle:"Use recruiters who speak and write fluent English, can build relationships with top talent, and are capable of creative sourcing for complex roles "},
{image:image3, title:"No Substitute", subtitle:"Recruiting only requires a laptop and a phone, but there is no substitute for good communication skills and grit."}
]

class Sauce extends Component {
    render () {
        return(
            <>
               <div className='our-sauce text-center'>
                <div className="container">
                    <h1 className='text-center'>Our Sauce</h1>
                    <p className='text-center'>Typically a customer starts with one recruiter as a test and ramps up as we prove success </p>
                        <div className="row">
                        {saucecards.map((saucecard,index)=>{
                              return <SauceCards {...saucecard} Key={index} />
                          })}
                        </div>
                        <button type='submit' className='sauce-button'><Link className="sauce-link" to="#">Get Started</Link></button>
                    </div>
               </div>
            </>
        )
    }
}
export default Sauce;