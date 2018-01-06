import React, { Component } from 'react';
import './App.css';
import ScrollableAnchor from 'react-scrollable-anchor';
import { goToTop } from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor'

//Components
import Home from './Components/Home/Home.js';
import About from './Components/About/About.js';
import Contact from './Components/Contact/Contact.js';
import GOBI_Logo from './Components/Assets/Gobi_logo.png';
import GOBI_LOGO_BLACK from './Components/Assets/Gobi_logo_Black.png';
import BlockSec1 from './Components/BlockSec/BlockSec1.js';
class Main extends Component {
  constructor() {
    super();

    this.state = {
      isTop: true
    }
  }



  componentDidMount() {
    document.addEventListener('scroll', () => {
      // Offset all anchors by -60 to account for a fixed header 
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

            <h2 className='Logo'>GOBI OUTDOORS</h2>
          </div>
          <div>

            <a href='#HOME'> HOME </a>
            <a href='#ABOUT'> ABOUT </a>
            <a href='#CONTACT'> CONTACT </a>
          </div>
        </nav>
        <div className='Main'>
          
            <ScrollableAnchor id={'HOME'}>
              <Home />
            </ScrollableAnchor>
            <div className='transparentSection'>
              <img src={GOBI_Logo} alt='logo' className='LogoTransparentSection' />
              <h1 className='HomeTitle'> VERSATILE & DURABLE </h1>
              <p className='HomeSubTitle'>Explore the world with all-terrain roof top tent trailers. <br />Order yours today. </p>
            </div>
             

            <div className='blockSection'>
              <BlockSec1 />
            </div>
            <ScrollableAnchor id={'ABOUT'}>
              <About />
            </ScrollableAnchor>
            <ScrollableAnchor id={'CONTACT'}>
              <Contact />
            </ScrollableAnchor>

            <h2 onClick={() => goToTop()}><button>Scroll to Top</button> </h2>
        </div>{/* end of main */}

      </div>// end of mainHolder

    )
  }
}
export default Main;