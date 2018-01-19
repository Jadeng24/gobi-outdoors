import React, { Component } from 'react';
import './Contact.css';
import axios from 'axios';
class Contact extends Component {
    constructor() {
        super();

        this.state = {
            firstName: '',
            lastName:'',
            email: '',
            subject: '',
            message: '',
            submitSuccess: false
        }
        this.sendEmail = this.sendEmail.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(prop, val) {
        this.setState({
            [prop]: val
        }, () => console.log('state', this.state))
    }
    sendEmail() {
        if (this.state.firstName && this.state.lastName && this.state.email && this.state.message) {
            this.setState({
                submitSuccess: true
            })

            axios.post('/api/send_email', this.state) // I put all the information from the input fields on state. I am sending it all so I can use it off the req.body when sending the email in the controller.
            // this.resetState();
            setTimeout(window.location.assign('/loading'), 1000);
        }

        else {
            if (!this.state.name) {
                alert('Please Enter Name'
                )
            }
            else if (!this.state.email) {
                alert('Please enter your email')
            }
            else if (!this.state.message) {
                alert('You must send a brief message in the message field');

            } else {
                alert('please complete All fields');
            }

        }
    }
    render() {
        return (
            <content className='Contact'>
                <h1 className='ContactTitle'> CONTACT </h1>
                {/* <h4>Send me a message </h4> */}

                <div className='ContactInfo'>
                    <div className='leftContact'>
                        <h2>titlelsd</h2>
                        <p>asd asdf asl;kasd lkas dflkjasd fljasd flkjasd flkjasd fl;ajsdf l;as dlkjasdlfjasdflkjasdflkasdf;l</p>
                    </div>
                    <form>


                        <h3 >First Name *</h3><input type='text' maxLength='30' onChange={(e) => this.handleChange('firstName', e.target.value)} />
                        <h3 >Last Name</h3><input type='text' maxLength='30' onChange={(e) => this.handleChange('lastName', e.target.value)} />
                        <h3 >Email Address *</h3><input type='text' maxLength='30' onChange={(e) => this.handleChange('email', e.target.value)} />
                        <h3>Subject</h3><input type='text' maxLength='40' onChange={(e) => this.handleChange('subject', e.target.value)} />
                        <h3>Message *</h3><textarea type='text' rows='5' cols='10' placeholder='Send me a message' maxLength='300' onChange={(e) => this.handleChange('message', e.target.value)}></textarea>

                        <div  className='myButton' onClick={this.sendEmail}><h3>Send</h3></div >
                    </form>
                    
                </div>
            </content>
        )
    }
}
export default Contact;
