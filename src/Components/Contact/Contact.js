import React, { Component } from 'react';
import './Contact.css';
import gobi from './../Assets/Gobi_logo_Black.png';
class Contact extends Component {
    constructor() {
        super();

        this.state = {

        }
    }

    render() {
        return (
            <content className='Contact'>
                <h1> CONTACT </h1>
                    {/* <h4>Send me a message </h4> */}
                    <form>


                        <h3 >First Name *</h3><input type='text' maxLength='30' onChange={(e) => this.handleChange('firstName', e.target.value)} />
                        <h3 >Last Name</h3><input type='text' maxLength='30' onChange={(e) => this.handleChange('lastName', e.target.value)} />
                        <h3 >Email Address *</h3><input type='text' maxLength='30' onChange={(e) => this.handleChange('email', e.target.value)} />
                        <h3>Subject</h3><input type='text' maxLength='40' onChange={(e) => this.handleChange('subject', e.target.value)} />
                        <h3>Message *</h3><textarea type='text' rows='5' cols='10' placeholder='Send me a message' maxLength='300' onChange={(e) => this.handleChange('message', e.target.value)}></textarea>
                    </form>
                    <button className='sendMessageBtn' onClick={this.sendEmail}><h3>Send</h3></button>
            </content>
        )
    }
}
export default Contact;
