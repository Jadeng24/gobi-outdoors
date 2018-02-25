import React, { Component } from 'react';
import './Tents.css';
import Tent1 from '../Assets/tent1.jpg';
import Tent2 from '../Assets/tent2.jpg';    
class Tents extends Component{ 
    constructor(){
        super();
 
        this.state = {
            
        }
    }
 
    render(){
        return (
            <content className='Tents'>
            
                <h1>TENTS</h1>
                <div className='sideBySide'>
                    <img src={Tent1} alt='Tent' className='tentImg' />
                    <img src={Tent2} alt='Tent' className='tentImg' />
                </div>
            </content>    
        )
    }
}
export default Tents;