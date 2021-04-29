import React, { Component } from 'react';
import '../styles/Form.scss';

class FormContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            donation: '',
            firstName: '',
            lastName: '',
            street1: '',
            street2: '',
            city: '',
            provinceTerritory: '',
            postalCode: '',
            email: '',
            creditCard: '',
            expDate: '',
            cvv: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.validateFields = this.validateFields.bind(this);
    }
    
    handleSubmit(event){
        event.preventDefault()
    }  

    handleChange(event){
        console.log(`handleChange function called`);
        const target = event.target;
        const value = target.value;
        const name = target.name;
        console.log(`value: ${value} and name: ${name}`);  
        this.setState({
            [name]: value
        },
        () => {this.validateFields(name, value)});
    }

    validateFields(){
        console.log(`validateFields function called`);
    }

    render(){
        console.log(this.state);
        return(
            <div>
                <form onSubmit={this.handleSubmit}>

                    { /* DONATION */ }
                    <div>
                        <label>
                            Gift Amount (min 10): $
                            <input required
                                type="number" 
                                min="10"
                                name="donation" 
                                value={this.state.donation} 
                                onChange={this.handleChange}/>
                        </label>
                    </div>

                    { /* BILLING */ }
                    <div>
                        <label>
                            First Name:
                            <input required
                                className="fn-input"
                                type="text" 
                                name="firstName" 
                                minLength="2"
                                value={this.state.firstName} 
                                onChange={this.handleChange}/>
                            <span class="invalid"></span>
                        </label>
                        <br/>
                        <label>
                            Last Name:
                            <input required
                                className="ln-input"
                                type="text" 
                                name="lastName" 
                                minLength="2"
                                value={this.state.lastName} 
                                onChange={this.handleChange}/>
                            <span class="invalid"></span>
                        </label>
                        <br/>
                        <label>
                            Street 1:
                            <input required
                                className="street-input"
                                type="text" 
                                name="street1" 
                                minLength="10"
                                value={this.state.street1} 
                                onChange={this.handleChange}/>
                            <span class="invalid"></span>
                        </label>
                        <br/>
                        <label>
                            Street 2:
                            <input 
                                type="text" 
                                name="street2" 
                                value={this.state.street2} 
                                onChange={this.handleChange}/>
                        </label>
                        <br/>
                        Province/Territory: 
                        <select 
                            value={this.state.provinceTerritory} 
                            name="provinceTerritory" 
                            onChange={this.handleChange}>
                                <option value="British Columbia">British Columbia</option>
                                <option value="Manitoba">Manitoba</option>
                                <option value="Saskatchewank">Saskatchewan</option>
                                <option value="Alberta">Alberta</option>
                                <option value="Ontario">Ontario</option>
                                <option value="Quebec">Quebec</option>
                                <option value="Newfoundland">Newfoundland</option>
                                <option value="New Brunswick">New Brunswick</option>
                                <option value="Nova Scotia">Nova Scotia</option>
                                <option value="Prince Edward Island">Prince Edward Island</option>
                                <option value="Yukon">Yukon</option>
                                <option value="Northwest Territories">Northwest Territories</option>
                                <option value="Iqaluit">Iqaluit</option>
                        </select>
                        <br/>
                        <label>
                            postalCode:
                            <input required
                                className="pc-input"
                                type="text" 
                                name="postalCode" 
                                value={this.state.postalCode} 
                                onChange={this.handleChange}/>
                            <span class="invalid"></span>
                        </label>
                        <label>
                            Email:
                            <input required
                                className="email-input"
                                type="email" 
                                name="email" 
                                value={this.state.email} 
                                onChange={this.handleChange}/>
                            <span class="invalid"></span>
                        </label>
                    </div>

                    { /* PAYMENT */ }
                    <div>
                        <label>
                            Credit Card #:
                            <input required
                                className="cc-input"
                                type="number" 
                                name="creditCard" 
                                value={this.state.creditCard} 
                                onChange={this.handleChange}/>
                            <span class="invalid"></span>
                        </label>
                        <br/>
                        <label>
                            Expiration Date:
                            <input required
                                className="expdate-input"
                                type="text" 
                                name="expDate" 
                                value={this.state.expDate} 
                                onChange={this.handleChange}/>
                            <span class="invalid"></span>
                        </label>
                        <br/>
                        <label>
                            CVV Number:
                            <input required
                                className="cc-input"
                                type="number" 
                                name="cvv" 
                                value={this.state.cvv} 
                                onChange={this.handleChange}/>
                            <span class="invalid"></span>
                        </label>
                    </div>
                    <input type="submit" value="Submit"/>
                </form>    
            </div>
        )  
    }
}

export default FormContainer;