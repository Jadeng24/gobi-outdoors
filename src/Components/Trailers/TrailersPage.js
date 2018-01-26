import React, { Component } from 'react';
import './TrailersPage.css';
import { Link } from 'react-router-dom';
class TrailersPage extends Component{ 
    constructor(){
        super();
 
        this.state = {
            
        }
    }
 
    render(){
        return (
            <div className='TrailersPage'>
                <nav className={this.state.isTop ? 'topOfPageNav' : 'notTopOfPageNav'}>
                    <div>

                        <h2 className='Logo'>GOBI OUTDOORS</h2>
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
                <h1> TRAILERS </h1>
            </div>
        )
    }
}
export default TrailersPage;