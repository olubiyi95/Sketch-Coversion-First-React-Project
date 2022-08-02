import React, {Component} from "react";
import oval from '../react-assets/Oval.svg'
import people from '../react-assets/happy-people.svg'

class Header extends Component {
    render() {
        return (
            <>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col">
                            <div className="scale">
                                <h1>Need a flexible recruiting solution as you sell and scale projects?</h1>
                                <p>We are here to solve this exact challenge</p>
                              <div className="cta-box">
                                 <a className="cta-scale" aria-current="page" href="#">Get Started</a>
                              </div>
                                  
                                
                            </div>
                        </div>
                        <div class="col">
                            <img src={oval} className='oval-img' />
                            <img src={people} className="oval-inside-img" />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Header;