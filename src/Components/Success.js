import React, {Component} from'react' 



class Success extends Component {
    render () {
        return (
            <>
            <div className='success '>
                <h1 className='text-center'>Our Success Stories</h1>
                    <p className='text-center pt-4'>Typically, a customer starts with one recruiter as a test and ramps up as we prove success</p>
                    <div className="container">
                        <div className="row">
                            <div className=" col-lg-6 col-md-12 mt-5">
                                <ul className='success-stories '>
                                    <div className='success-card '>
                                    <li className='sucess-items my-3 fw-bold'>160%</li>
                                    <p>Hired 14 engineering roles for a VC funded tech company in Q2 2019, including a Lead Data Scientist, Director of Devops, and Python Engineers. </p>
                                    </div>
                                    
                                    <div className='success-card my-5'>
                                        <li className='sucess-items my-3 fw-bold'>200%</li>
                                        <p>Hired 5 full stack engineers within 60 days for a hyper growth tech company.  </p>
                                    </div>
                                   
                                    <div className='success-card'>
                                        <li className='sucess-items my-3 fw-bold'>230%</li>
                                        <p>We came in late on a complex diversity leadership search and hired the winning candidate within 6 weeks </p>
                                    </div>
                                </ul>
                            </div>
                            <div className="col-lg-6 col-md-12 mt-4">
                            <div className='illustration'></div>
                            </div>
                        </div>
                    </div>
            </div>
            </>
        )
    }
}
export default Success