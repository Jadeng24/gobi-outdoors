import React, { Component } from 'react';
import './Footer.css';
 
class Footer extends Component{ 
    constructor(){
        super();
 
        this.state = {
            
        }
    }
 
    render(){
        return (
            <content className='Footer'>
                
                    <div className='leftFooter footerSide'>
                        <a href='/#HOME'> HOME </a>
                        <a href='/#TENTS'> TENTS </a>
                        <a href='/#TRAILERS'> TRAILERS </a>
                        <a href='/#ABOUT'> ABOUT </a>
                        <a href='/#CONTACT'> CONTACT </a>
                </div>
                <div className='rightFooter footerSide'>

                <h2>Follow Us</h2>    
                </div>
            
            </content>
        )
    }
}
export default Footer;