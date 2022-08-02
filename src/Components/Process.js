import React, { Component } from 'react';
import ProcessItems from './ProcessItems';





class Process extends Component {
    render () {
        return (
            <>
                <section className='Process text-center'>
                    <ProcessItems />
                </section>
            </>
        )
    }
}

export default Process