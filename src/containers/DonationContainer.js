import React, { Component } from 'react';
import FormContainer from './FormContainer';

class DonationContainer extends Component {
    constructor(props){
        super(props)
    }

    handleSubmit(event){
        event.preventDefault()
    }    

    render(){
        return(
            <div>
                <header>
                    <h1>Support Superheroes!</h1>
                </header>          
                <FormContainer/>
            </div>
        )
    }
}

export default DonationContainer;