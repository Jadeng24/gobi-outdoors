import React, { Component } from 'react';
import './Landing.css';
import ScrollableAnchor from 'react-scrollable-anchor';
// import { goToTop } from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor'

//Components
import Home from './../Home/Home.js';
import BlockSec1 from './../BlockSec/BlockSec1.js';
import Tents from './../Tents/Tents.js';
import BlockSec2 from './../BlockSec/BlockSec2.js';
import Trailers from './../Trailers/Trailers.js';
import About from './../About/About.js';
import BlockSec3 from './../BlockSec/BlockSec3.js';
import Contact from './../Contact/Contact.js';
import Footer from './../Footer/Footer.js';

import { Link } from 'react-router-dom';


class Landing extends Component {
    constructor() {
        super();

        this.state = {
            isTop: true,

        }

    }



    componentDidMount() {
        document.addEventListener('scroll', () => {
            // Offset all anchors by -50 to account for a fixed header 
            // and scroll more quickly than the default 400ms 
            configureAnchors({ offset: -50, scrollDuration: 500 })

            const isTop = window.scrollY < 10;
            if (isTop !== this.state.isTop) {
                this.setState({ isTop })
            }
        });
    }


    render() {
        return (
            <div className='MainHolder'>


                <nav className={this.state.isTop ? 'topOfPageNav' : 'notTopOfPageNav'}>
                    <div>

                        <a href='#HOME'><h2 className='Logo'>GOBI OUTDOORS</h2></a>
                    </div>
                    <div>

                        <a href='#HOME'> HOME </a>
                        <a href='#TENTS'> TENTS </a>
                        {/* <a href='#TRAILERS'> TRAILERS </a> */}
                        <Link to='/trailers'> TRAILERS </Link>
                        <a href='#ABOUT'> ABOUT </a>
                        <a href='#CONTACT'> CONTACT </a>
                    </div>
                </nav>
                <div className='Main'>

                    <ScrollableAnchor id={'HOME'}>
                        <Home />
                    </ScrollableAnchor>




                    <BlockSec1 />

                    <BlockSec2 />
                    <ScrollableAnchor id={'TENTS'}>
                        <Tents />
                    </ScrollableAnchor>
                    <ScrollableAnchor id={'TRAILERS'}>
                        <Trailers />
                    </ScrollableAnchor>
                    <ScrollableAnchor id={'ABOUT'}>
                        <About />
                    </ScrollableAnchor>
                    <BlockSec3 />

                    <ScrollableAnchor id={'CONTACT'}>
                        <Contact />
                    </ScrollableAnchor>
                    <Footer />
                    <div className='goToTop'>  <a href='#HOME' className='goToTopBtn'> <h3>Go to Top </h3></a></div>
                </div>{/* end of main */}
                {/* onClick={() => goToTop()} */}
            </div>// end of mainHolder

        )
    }
}
export default Landing;