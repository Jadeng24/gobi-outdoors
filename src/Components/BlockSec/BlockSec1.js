import React, { Component } from 'react';
import './BlockSec1.css';
import gobi from './../Assets/Gobi_logo_Black.png';
class BlockSec1 extends Component {
    constructor() {
        super();

        this.state = {

        }
    }

    render() {
        return (
            <div className='BlockSec1'>
                
                    <img src={gobi} alt='logo' className='LogoGreySection' />

            </div>
        )
    }
}
export default BlockSec1;
