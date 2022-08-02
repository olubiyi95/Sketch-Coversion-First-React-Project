import React, {Component} from 'react';
import PageWrapper from '../Components/PageWrapper';
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Awards from '../Components/Awards';
import Services from '../Components/Services'
import Process from '../Components/Process'
import Sauce from '../Components/Sauce'
import Customers from '../Components/Customers'
import Team from '../Components/Team'
import Founder from '../Components/Founder'
import Success from '../Components/Success'
import Expert from '../Components/Expert'

class Home extends Component {
    render () {
        return (
            <>
                <PageWrapper />
                <Header />
                <Awards />
                <Services />
                <Process />
                <Sauce />
                <Founder />
                <Customers />
                <Team />
                <Success />
                <Expert />
                <Footer />
            </>
        )
    }
}

export default Home