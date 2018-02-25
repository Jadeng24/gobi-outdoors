import React, { Component } from 'react';
import './BlockSec3.css';
 
class BlockSec3 extends Component{ 
    constructor(){
        super();
 
        this.state = {
            
        }
    }
 
    render(){
        return (
            <div className='BlockSec3'>
                <h2>Buy Now</h2>    
                <p>The arrival of our newest models will be April 10, 2018.</p>
                <p>To pre-order now, send us a message below with any questions you might have and we will add you to our waiting list. 
                </p>
                
                <div className='myButton Sec3Btn'><a href='/#CONTACT'> CONTACT </a></div>
            </div>
        )
    }
}
export default BlockSec3;