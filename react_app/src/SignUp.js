import React from 'react';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            fullname: 'Ammar',
            city: 'Shikarpur',
            email: 'ammar@gmail.com',
            isMale: true,
            language: ['English', 'Norwegian']
        }
    }

    handleChange(event) {
        let { name, type, value, checked, selectedOptions } = event.target;
        
        if (name === 'language')
            value = Array.from(selectedOptions, option => option.value);
        else if (type === "checkbox")
            value = checked;
        
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

                <label for="isMale">Are you a male? </label>
                <input type="checkbox" name="isMale" checked={this.state.isMale} onChange={this.handleChange}/>

                <label for="language"></label>
                <select name="language" value={this.state.language} onChange={this.handleChange} multiple={true}>
                    <option value="English">English</option>
                    <option value="Sindhi">Sindhi</option>
                    <option value="Norwegian">Norwegian</option>
                    <option value="Urdu">Urdu</option>
                </select>
            </form>
        </>
    }
}

export default SignUp;