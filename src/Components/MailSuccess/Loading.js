import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Loading.css';
 
class Loading extends Component{ 
    constructor(){
        super();
 
        this.state = {
            
        }
        this.myWaitTime = this.myWaitTime.bind(this);
    }
    componentWillMount() {
        setTimeout(this.myWaitTime, 2300);
    }

    myWaitTime() {
        window.location.assign('/confirmation')
    }
 
    render(){
        return (
            <div className='Loading'>
                <h1>Loading . . .</h1>
            </div>
        )
    }
}
export default Loading;