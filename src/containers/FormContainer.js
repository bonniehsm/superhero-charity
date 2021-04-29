import React, { Component } from 'react';

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
        });
    }

    render(){
        console.log(this.state);
        return(
            <div>
                <form onSubmit={this.handleSubmit}>

                    { /* DONATION */ }
                    <div>
                        <label>
                            Gift Amount:
                            <input type="text" name="donation" value={this.state.donation} onChange={this.handleChange}/>
                        </label>
                    </div>

                    { /* BILLING */ }
                    <div>
                        <label>
                            First Name:
                            <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange}/>
                        </label>
                        <br/>
                        <label>
                            Last Name:
                            <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange}/>
                        </label>
                        <br/>
                        <label>
                            Street 1:
                            <input type="text" name="street1" value={this.state.street1} onChange={this.handleChange}/>
                        </label>
                        <br/>
                        <label>
                            Street 2:
                            <input type="text" name="street2" value={this.state.street2} onChange={this.handleChange}/>
                        </label>
                        <br/>
                        Province/Territory: 
                        <select>
                            <option value="bc">British Columbia</option>
                            <option value="mb">Manitoba</option>
                            <option value="sk">Saskatchewan</option>
                            <option value="ab">Alberta</option>
                            <option value="on">Ontario</option>
                            <option value="qc">Quebec</option>
                            <option value="nl">Newfoundland</option>
                            <option value="nb">New Brunswick</option>
                            <option value="ns">Nova Scotia</option>
                            <option value="pei">Prince Edward Island</option>
                            <option value="yk">Yukon</option>
                            <option value="nt">Northwest Territories</option>
                            <option value="iq">Iqaluit</option>
                        </select>
                        <br/>
                        <label>
                            postalCode:
                            <input type="text" name="postalCode" value={this.state.postalCode} onChange={this.handleChange}/>
                        </label>
                    </div>

                    { /* PAYMENT */ }
                    <div>
                        <label>
                            Credit Card #:
                            <input type="text" name="creditCard" value={this.state.creditCard} onChange={this.handleChange}/>
                        </label>
                        <br/>
                        <label>
                            Expiration Date:
                            <input type="text" name="expDate" value={this.state.expDate} onChange={this.handleChange}/>
                        </label>
                        <br/>
                        <label>
                            CVV Number:
                            <input type="text" name="cvv" value={this.state.cvv} onChange={this.handleChange}/>
                        </label>
                    </div>
                    <input type="submit" value="Submit"/>
                </form>    
            </div>
        )  
    }
}

export default FormContainer;