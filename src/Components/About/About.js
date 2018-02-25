import React, { Component } from 'react';
import './About.css';

import AboutImg from './../Assets/aboutus.jpg';
class About extends Component{ 
    constructor(){
        super();
 
        this.state = {
            
        }
    }
 
    render(){
        return (
            <content className='About'>
                <h1> ABOUT US </h1>
                <div className='sideBySide'>
                    <img src={AboutImg} alt='Jaden & Hannah' className='aboutImg'/>
                    <p>Gobi Outdoors is a family owned business created by Jaden and Hannah Goodwin. It was started in Lindon, Utah in early 2017. They grew up traveling all over the state of Utah searching for places no-one had gone before. Realizing the best way to adventure is with an off-road trailer, they founded Gobi Outdoors.</p>

                </div>
            </content>
        )
    }
}
export default About;