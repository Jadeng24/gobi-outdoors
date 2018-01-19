import React, { Component } from 'react';
import './App.css';
import ScrollableAnchor from 'react-scrollable-anchor';
import { goToTop } from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor'

//Components
import Home from './Components/Home/Home.js';
import BlockSec1 from './Components/BlockSec/BlockSec1.js';
import BlockSec2 from './Components/BlockSec/BlockSec2.js';
import About from './Components/About/About.js';
import BlockSec3 from './Components/BlockSec/BlockSec3.js';
import Contact from './Components/Contact/Contact.js';
import Footer from './Components/Footer/Footer.js';



class Main extends Component {
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
            
             

            
            <BlockSec1 />
            <BlockSec2 />
            <ScrollableAnchor id={'ABOUT'}>
              <About />
          </ScrollableAnchor>
          <BlockSec3 />
            <ScrollableAnchor id={'CONTACT'}>
              <Contact />
            </ScrollableAnchor>
            <Footer/>
          <div className='goToTop'>  <a href='#HOME' className='goToTopBtn'> <h3>Go to Top </h3></a></div>
        </div>{/* end of main */}
        {/* onClick={() => goToTop()} */}
      </div>// end of mainHolder

    )
  }
}
export default Main;