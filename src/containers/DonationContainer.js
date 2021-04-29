import React, { Component } from 'react';
import { Link } from "react-router-dom";
import FormContainer from './FormContainer';
import '../styles/DonationForm.scss';
import '../App.scss';

class DonationContainer extends Component {
    constructor(props){
        super(props)
    }

    handleSubmit(event){
        event.preventDefault()
    }    

    render(){
        return(
            <div className="donation-container">
                <header>
                    <h1>Support Superheroes!</h1>
                </header>          
                <FormContainer/>
                <button className="common-button" id="back-button">
                    <Link
                        className="common-link"
                        to="/"
                    >
                        Back
                    </Link>
                </button>  
            </div>
        )
    }
}

export default DonationContainer;