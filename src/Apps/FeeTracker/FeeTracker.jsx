import React, { Component } from "react";

// Child component for showing result
class VisaResult extends Component {
  render() {
    return (
      <div>
        <h3>Visa Details</h3>
        <p><b>Passenger ID:</b> {this.props.id}</p>
        <p><b>Date:</b> {this.props.date}</p>
        <p><b>Country:</b> {this.props.country}</p>
        <p><b>Visa Cost:</b> {this.props.cost} ₹</p>
      </div>
    );
  }
}

// Parent component with form
class FeeTracker extends Component {
  state = { id: "", date: "", country: "", cost: 0 };

  calculate = (country) => {
    const base = 3000;
    const order = { Thailand: 1, Dubai: 2, USA: 3, Japan: 4, Russia: 5 };
    return base * (order[country] || 0);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ cost: this.calculate(this.state.country) });
  };

  render() {
    return (
      <div>
        <h2>Visa Fee Tracker</h2>

        {/* Form Inputs */}
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="Passenger ID"
            onChange={(e) => this.setState({ id: e.target.value })}
          />
          <input
            type="date"
            onChange={(e) => this.setState({ date: e.target.value })}
          />
          <select onChange={(e) => this.setState({ country: e.target.value })}>
            <option value="">Select Country</option>
            <option>Thailand</option>
            <option>Dubai</option>
            <option>USA</option>
            <option>Japan</option>
            <option>Russia</option>
          </select>
          <button type="submit">Submit</button>
        </form>

        {/* Passing props to child for rendering */}
        {this.state.cost > 0 && (
          <VisaResult
            id={this.state.id}
            date={this.state.date}
            country={this.state.country}
            cost={this.state.cost}
          />
        )}
      </div>
    );
  }
}

export default FeeTracker;
