import React, { Component } from 'react';
import './App.css';
import ScrollableAnchor from 'react-scrollable-anchor';
import { goToTop } from 'react-scrollable-anchor';

//Components
import Home from './Components/Home/Home.js';
import About from './Components/About/About.js';
import Contact from './Components/Contact/Contact.js';

class Main extends Component {
  constructor() {
    super();

    this.state = {
      isTop: true
    }
  }


  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 150;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop })
      }
    });
  }
  render() {
    return (
      <div className='Main'>


        <nav className={this.state.isTop ? 'topOfPageNav' : 'notTopOfPageNav'}>
          <div>
            <h2 className='Logo'>Gobi Outdoors</h2>
          </div>
          <div>
            
              <a href='#HOME'> HOME </a>
              <a href='#ABOUT'> ABOUT </a>
              <a href='#CONTACT'> CONTACT </a>
            </div>
        </nav>
        <ScrollableAnchor id={'HOME'}>
          <Home />
        </ScrollableAnchor>
        <ScrollableAnchor id={'ABOUT'}>
          <About/>
        </ScrollableAnchor>
        <ScrollableAnchor id={'CONTACT'}>
          <Contact/>
        </ScrollableAnchor>

        <h2 onClick={() => goToTop()}><button>Scroll to Top</button> </h2>
      </div>
    )
  }
}
export default Main;