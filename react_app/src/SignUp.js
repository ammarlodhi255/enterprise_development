import React from 'react';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            fullname: 'Ammar',
            city: 'Shikarpur',
            email: 'ammar@gmail.com'
        }
    }

    handleChange(event) {
        const { name, type, value } = event.target;
        this.setState({...this.state, [name]: value});
    }

    render() {
        return <>
            <h2>{JSON.stringify(this.state)}</h2>
            <form>
                <label for="fullname">Fullname:</label>
                <input type="text" name="fullname" value={this.state.fullname} onChange={this.handleChange}/>
                <label for="city">City:</label>
                <input type="text" name="city" value={this.state.city} onChange={this.handleChange}/>
                <label for="email">Email:</label>
                <input type="text" name="email" value={this.state.email} onChange={this.handleChange}/>
            </form>
        </>
    }
}

export default SignUp;