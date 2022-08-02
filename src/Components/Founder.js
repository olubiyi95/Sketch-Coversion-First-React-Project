import React, { Component } from 'react';

class Founder extends Component {
    render () {
        return (
            <>
                <section className='founder'>
                    <div class="container">
                        <div class="row">
                            <div class="col">
                              <div className='founder-image' />
                            </div>
                            <div class="col my-4">
                                <h1 className=''>Founder's Message</h1>
                                <p className='founder-text'>This is the recruitment company I wish existed when I was leading talent for tech startups. Sourcing, engaging, and hiring top talent in tight labor markets is not for the faint of heart.</p>
                                <div className=''>
                                    <p className='pt-3 mb-0 fw-bold'>John Doe</p>
                                    <p className='py-0 fw-bold'>Founder</p>
                                    <div className='founder-award'>
                                        <p>Awarded Ere.net award for top recruiting department in world
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default Founder