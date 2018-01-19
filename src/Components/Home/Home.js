import React, { Component } from 'react';
import './Home.css';
import GOBI_Logo from './../Assets/Gobi_logo.png';

class Home extends Component {
    constructor() {
        super();

        this.state = {

        }
    }

    render() {
        return (
            <div>
            <div className='Home'>
            </div>
            <div className='transparentSection'>
                <img src={GOBI_Logo} alt='logo' className='LogoTransparentSection' />
                <hometitle className='HomeTitle'> VERSATILE & DURABLE </hometitle>
                <p className='HomeSubTitle'>Explore the world with all-terrain roof top tent trailers. <br />Order yours today. </p>
                </div>
            </div>    
        )
    }
}
export default Home;