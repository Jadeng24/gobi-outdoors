import React, { Component } from 'react';
import './Trailers.css';
 
import SoftShell1 from '../Assets/softshell1.jpg';
import HardShell1 from '../Assets/hardshell1.jpg';
class Trailers extends Component{ 
    constructor(){
        super();
 
        this.state = {
            
        }
    }
 
    render(){
        return (
            <content className='Trailers'>
                <h1>TRAILERS</h1>
                <div className='sideBySide'>
                    <img src={SoftShell1} alt='Trailer' className='trailerImg'/>
                    <img src={HardShell1} alt='Trailer' className='trailerImg' />
                </div>
            </content>
        )
    }
}
export default Trailers;