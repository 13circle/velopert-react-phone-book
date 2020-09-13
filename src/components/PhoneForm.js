import React, { Component } from "react";

class PhoneForm extends Component {
  state = {
    name: "",
    phone: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    // Prevent page reloading
    e.preventDefault();
    // Pass state values to the parent by onCreate
    this.props.onCreate(this.state);
    // Initialize state
    this.setState({
      name: "",
      phone: "",
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="phoneform-container">
        <input
          placeholder="Name"
          value={this.state.name}
          onChange={this.handleChange}
          name="name"
        />
        <input
          placeholder="Phone"
          value={this.state.phone}
          onChange={this.handleChange}
          name="phone"
        />
        <button type="submit">Register</button>
      </form>
    );
  }
}

export default PhoneForm;
