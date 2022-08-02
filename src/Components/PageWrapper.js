import React, {Component} from 'react';
import logo from '../react-assets/LOGO.png'

class PageWrapper extends Component {
    render () {
        return (
            <>
            <section className="">
              <nav className="navbar navbar-expand-lg navbar-light bg-light py-0  ">
                  <div className="container">
                    <a className="navbar-brand" href="#"><img src={logo} className="brand-logo"/></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                      <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                          <a className="nav-link active" aria-current="page" href="#">About</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link active" aria-current="page" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link active" aria-current="page" href="#">Success Stories</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link active" aria-current="page" href="#">Join Us</a>
                        </li>
                        <li className="nav-btn">
                          <a className="nav-button" aria-current="page" href="#">Schedule A Call</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
            </section>
            </>
        )
    }
}

export default PageWrapper