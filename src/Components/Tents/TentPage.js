import React, { Component } from 'react';
import './TentPage.css';
 
class TentPage extends Component{ 
    constructor(){
        super();
 
        this.state = {
            
        }
    }
 
    render(){
        return (
            <content className='TentPage'>
                <nav className={this.state.isTop ? 'topOfPageNav' : 'notTopOfPageNav'}>
                    <div>

                        <Link to='/'><h2 className='Logo'>GOBI OUTDOORS</h2></Link>
                    </div>
                    <div>

                        <Link to='/#HOME'> HOME </Link>
                        <Link to='/#TENTS'> TENTS </Link>
                        {/* <Link to='#TRAILERS'> TRAILERS </Link> */}
                        <Link to='/#TRAILERS'> TRAILERS </Link>
                        <Link to='/#ABOUT'> ABOUT </Link>
                        <Link to='/#CONTACT'> CONTACT </Link>
                    </div>
                </nav> 
            </content>
        )
    }
}
export default TentPage;