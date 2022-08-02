import React, { Component } from 'react';


class SauceCards extends Component {
    render () {
        return (
            <>
                <div className="col-lg-4 col-md-12">
                    <div className="card sauce-card" >
                        <div className='card-img'>
                        <img src={this.props.image} className="sauce-image py-3" alt="..." />
                        </div>
                        <div className='card-title'>                        
                            <h5 className="sauce-title py-2">{this.props.title}</h5></div>
                    <div className="card-body ">
                        <p className="card-text sauce-subtitle">{this.props.subtitle}</p>
                    </div>
                    </div>
                 </div>
            </>
        )
    }
}
export default SauceCards