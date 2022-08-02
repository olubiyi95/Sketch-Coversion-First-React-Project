import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Expert extends Component {
    render () {
        return (
            <>
                <div className='expert'>
                    <h1 className='text-center'>Talk to our expert</h1>
                    <p className='text-center py-3'>The best return on investment for your hiring dollars</p>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 col-md-12 my-3 expert-state ">
                                <p className='expert-paragraph'>
                                    Our experts will examine your requirements and provide suggestions for how best to improve, and which additional services you may benefit from. All of our experts are highly skilled and are proud to offer their expertise alongside great customer support so you can always be sure that you are getting the best advice.
                                </p>
                                <p className='expert-paragraph my-4'>
                                    We take your privacy very seriously and will never share your personal details with other organisations or individuals.
                                </p>
                                <button type='submit' className='expert-button '><Link className="sauce-link" to="#">Contact Us</Link></button>
                            </div>
                            <div class="col-lg-6 col-md-12 expert-column">
                                <h6 className='my-3 fw-bold contact-us'>CONTACT US</h6>
                                <p className='py-3'>Johnny Holland</p>
                                <p className='pb-4'>Ksimpson@topicshots.com</p>
                                <div className=''>
                                    <p className='pb-4 text-secondary'>Company*</p>
                                    <p className='pb-4 text-secondary'>Interested Industry</p>
                                    <p className='pb-4 text-secondary'>Description*</p>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </>
        )
    }
}
export default Expert 