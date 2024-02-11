import React, { Component } from 'react'
import EmailIn from '../components/signup/email';
import NevJelszoIn from '../components/signup/nevJelszo';
import TelSzulIn from '../components/signup/telSzul';
import UtolsoLap from '../components/signup/success';

export default class singup extends Component {
    state = {
        step:1,
        email:"",
        username:"",
        password:"",
        password2:"",
        telszam:"",
        szuldatum:""
    }

    // go back to previous step
    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    }

    // proceed to the next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    }

    // handle field change
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }


    
  render() {
    const { step } = this.state;
    const { email, username, password, password2, telszam, szuldatum} = this.state;
    const values = { email, username, password, password2, telszam, szuldatum}
    switch (step) {
        case 1: 
          return (
            <EmailIn
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
             />
          )
        case 2: 
          return (
            <NevJelszoIn 
                prevStep={this.prevStep}
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
            />
          )
        case 3: 
          return (
            <TelSzulIn 
                prevStep={this.prevStep} 
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
            />
          )
        case 4:
          return (
            <UtolsoLap 
                values={values}
            />
          )
        default: 
      }
  }
}