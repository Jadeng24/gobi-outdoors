import React, { Component } from 'react';
import './ThankYou.css';
import { Link } from 'react-router-dom';
class ThankYou extends Component{ 
    constructor(){
        super();
 
        this.state = {
            
        }
    }
 
    render(){
        return (
            
              
            <div className='ThankYou'>
                <nav className={this.state.isTop ? 'topOfPageNav' : 'notTopOfPageNav'}>
                    <div>

                        <Link to='/'><h2 className='Logo'>GOBI OUTDOORS</h2></Link>
                    </div>
                    <div>

                        <Link to='/#HOME'> HOME </Link>
                        <Link to='/#TENTS'> TENTS </Link>
                        {/* <Link to='#TRAILERS'> TRAILERS </Link> */}
                        <Link to='/trailers'> TRAILERS </Link>
                        <Link to='/#ABOUT'> ABOUT </Link>
                        <Link to='/#CONTACT'> CONTACT </Link>
                    </div>
                </nav>  

                <h3> Thank you. Your message has been sent. We will get back to you soon.</h3>
            </div>
        )
    }
}
export default ThankYou;