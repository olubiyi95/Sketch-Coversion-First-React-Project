import React, { Component } from 'react';
import image from '../react-assets/Process.png'
import image1 from '../react-assets/Group 1.svg'
import image3 from '../react-assets/Group 2.svg'
import image5 from '../react-assets/Group 3.svg'



class ProcessItems extends Component {
    render () {
        return (
            <>
                <div class="container p-0">
                    <h2 className=''>Our Process</h2>
                    <p className='py-4'>Typically our process starts with one recruiter as a test and ramps up as we prove success</p>
                    <div class="row">
                        <div class="col-lg-10 our-process p-0"> 
                            <div class="container p-0">
                                <div class="row">
                                    <div class="col pe-0">
                                        <div className='process-card'>
                                            <div className='process-image1'>
                                                <img src={image1} className=''></img>
                                            </div>
                                           <div className='process-image2'>
                                               <div className='py-4'>
                                                    <h4 className=''>Understand Requirements</h4>
                                                    <p className='py-4'>Starting with 1 recruiter and scaling from 
                                                    there, collect requirements for job 
                                                     requirements and learn about client’s 
                                                     process needs. If the process is not 
                                                     present, create a process suitable to 
                                                     their needs.</p>
                                               </div>
                                           </div>
                                        </div>
                                    </div>
                                    <div class="col p-0">
                                    <div className='process-card2'>
                                            <div className='process-image1'>
                                                <img src={image3} className=''></img>
                                            </div>
                                            <div className='process-image3'>
                                                <div className='py-4'>
                                                <h4 className=''>Start Recruitment</h4>
                                                <p className='pt-4'>We take over the process and help the 
                                                client to schedule, select and onboard 
                                                candidates, and require intervention only 
                                                when needed, like for taking interviews. 
                                                As we fill in positions, we scale down 
                                                gradually according to the timeline 
                                                prescribed by the client.</p>
                                                </div>
                                           </div>
                                        </div>
                                    </div>
                                    <div class="col ps-0">
                                    <div className='process-card'>
                                            <div className='process-image1'>
                                                <img src={image5} className=''></img>
                                            </div>
                                            <div className='process-image2'>
                                                <div className='py-4'>
                                                    <h4 className=''>Flexible Engagement</h4>
                                                    <p className='py-4'>As the client needs changes, we can 
                                                    add or reduce the team and provide 
                                                    pro-rata based support through out. 
                                                    We also help consulting the creation 
                                                    of timeline of future projects to the 
                                                    client.</p>
                                                </div>
                                           </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default ProcessItems