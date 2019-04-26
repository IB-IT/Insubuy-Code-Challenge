import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import Input from "../components/Input";
import Select from "../components/Select";
import Button from "../components/Button";
import "../styles/insubuyForm.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import isAfter from "date-fns/isAfter";


class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quote: {
        age: "",
        policyMax: "",
        citizenShip: "",
        startDate: "",
        endDate: "",
        mailingState: ""
      },
      errors: {},
      policyMaximumOptions: [
        { label: "50,000", value: "50" },
        { label: "100,000", value: "100" },
        { label: "250,000", value: "250" },
        { label: "500,000", value: "500" }
      ]
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleStartDateChange = this.handleStartDateChange.bind(this);
    this.handleEndDateChange = this.handleEndDateChange.bind(this);
  }

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      prevState => ({
        quote: {
          ...prevState.quote,
          [name]: value
        }
      }),
      () => console.log(this.state.quote)
    );
  }

  handleDateChange = ({ startDate, endDate }) => {
    startDate = startDate || this.state.quote.startDate;
    endDate = endDate || this.state.quote.endDate;

    if (isAfter(startDate, endDate)) {
      endDate = startDate;
    }

    this.setState(
      prevState => ({
        quote: {
          ...prevState.quote,
          startDate,
          endDate
        }
      }),
      () => console.log(this.state.quote)
    );
  };

  handleStartDateChange = startDate => this.handleDateChange({ startDate });

  handleEndDateChange = endDate => this.handleDateChange({ endDate });

  validateForm() {
    let quote = this.state.quote;
    let errors = {};
    let formIsValid = true;

    if (!quote["policyMax"]) {
      formIsValid = false;
      errors["policyMax"] = "*Please enter Policy Max.";
    }

    if (!quote["age"]) {
      formIsValid = false;
      errors["age"] = "*Please enter age.";
    }

    if (typeof quote["age"] !== "undefined") {
      let age,
        parsedValue = parseInt(quote["age"]),
        today = new Date();
      if (quote["age"].length <= 2) {
        age = parsedValue;
      } else if (quote["age"].length === 4) {
        age = today.getFullYear() - parsedValue;
      }

      if (age && !(age < 100)) {
        formIsValid = false;
        errors["age"] = "*Please enter age.";
      }
    }

    if (!quote["startDate"]) {
      formIsValid = false;
      errors["startDate"] = "*Please enter Start Date.";
    }

    if (!quote["endDate"]) {
      formIsValid = false;
      errors["endDate"] = "*Please enter End Date.";
    }

    if (!quote["citizenShip"]) {
      formIsValid = false;
      errors["citizenShip"] = "*Please enter CitizenShip.";
    }

    if (typeof quote["citizenShip"] !== "undefined") {
      if (!quote["citizenShip"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["citizenShip"] = "*Please enter Only Alphabets.";
      }
    }

    if (!quote["mailingState"]) {
      formIsValid = false;
      errors["mailingState"] = "*Please enter Mailing State.";
    }

    if (typeof quote["mailingState"] !== "undefined") {
      if (!quote["mailingState"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["mailingState"] = "*Please enter Only Alphabets.";
      }
    }

    this.setState({
      errors: errors
    });
    return formIsValid;
  }

  handleFormSubmit(e) {
    console.log(this.props.history);
    e.preventDefault();
    let quote = this.state.quote;

    if (!this.validateForm()) {
      return false;
    }

    fetch("http://localhost:8080/quotes", {
      method: "POST",
      body: JSON.stringify(quote),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(response => {
      response.json().then(data => {
        console.log("Successful" + data);
        this.props.history.push('/results');
      });
    });
  }

  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      quote: {
        age: "",
        policyMax: "",
        citizenShip: "",
        startDate: "",
        endDate: "",
        mailingState: ""
      },
      errors: {}
    });
  }

  render() {
    return (
      <div className="insubuy-form">
        <form className="container-fluid" onSubmit={this.handleFormSubmit}>
            <Select
              title={"Policy Maximum"}
              name={"policyMax"}
              options={this.state.policyMaximumOptions}
              value={this.state.quote.policyMax}
              placeholder={"Choose your policy maximum"}
              handleChange={this.handleInput}
            />{" "}
          <p className="errorMsg">{this.state.errors.policyMax}</p>
          <Input
            inputtype={"number"}
            title={"Age"}
            name={"age"}
            value={this.state.quote.age}
            placeholder={"Choose your age"}
            handleChange={this.handleInput}
          />{" "}
          <p className="errorMsg">{this.state.errors.age}</p>
          <label htmlFor="startDate" className="startDate">Start Date</label>
          <DatePicker
            id="startDate"
            placeholderText="Start Date"
            selectsStart
            selected={this.state.quote.startDate}
            startDate={this.state.quote.startDate}
            endDate={this.state.quote.endDate}
            onChange={this.handleStartDateChange}
            dateFormat="MM/dd/YYYY"
            autoComplete="off"
          />
          <p className="errorMsg">{this.state.errors.startDate}</p>
          <label htmlFor="endDate" className="endDate">End Date</label>
          <DatePicker
            id="endDate"
            placeholderText="End Date"
            selectsEnd
            selected={this.state.quote.endDate}
            startDate={this.state.quote.startDate}
            endDate={this.state.quote.endDate}
            onChange={this.handleEndDateChange}
            dateFormat="MM/dd/YYYY"
            autoComplete="off"
          />
          <p className="errorMsg">{this.state.errors.endDate}</p>
          <Input
          id="citizenship"
            inputtype={"text"}
            name={"citizenShip"}
            title={"Citizenship"}
            value={this.state.quote.citizenShip}
            placeholder={"Choose your contry of citizenship"}
            handleChange={this.handleInput}
          />{" "}
          <p className="errorMsg">{this.state.errors.citizenShip}</p>
          <Input
            inputtype={"text"}
            name={"mailingState"}
            title={"Mailing State"}
            value={this.state.quote.mailingState}
            placeholder={"Enter your Mailing State"}
            handleChange={this.handleInput}
          />{" "}
          <p className="errorMsg">{this.state.errors.mailingState}</p>
          <Button
            action={this.handleFormSubmit}
            type={"orange"}
            title={"Submit"}
            style={buttonStyle}
          />{" "}
          <Button
            action={this.handleClearForm}
            type={"link"}
            title={"Clear"}
            style={buttonStyle}
          />{" "}
        </form>
      </div>
    );
  }
}

const buttonStyle = {
  margin: "10px 10px 10px 10px"
};

export default withRouter(FormContainer);
