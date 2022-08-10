import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  getEmployee,
  addEmployee,
  editEmployee,
  deleteEmployee
} from "./components/action";
import { connect } from "react-redux";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      Name: "",
      Email: ""
    };
  }

  static propTypes = {
    employees: PropTypes.array.isRequired,
    getEmployee: PropTypes.func.isRequired,
    addEmployee: PropTypes.func.isRequired,
    editEmployee: PropTypes.func.isRequired,
    deleteEmployee: PropTypes.func.isRequired
  };

  // componentDidMount() {
  //   this.props.getEmployee();
  // }


  submitData = () => {
    if (
      this.state.Name &&
      this.state.Email &&
      !this.state.id
    ) {
      const newEmployee = {
        id: Math.floor(Math.random() * (999 - 100 + 1) + 100),
        Name: this.state.Name,
        Email: this.state.Email
      };

      this.props.addEmployee(newEmployee);
    } else if (
      this.state.Name &&
      this.state.Email &&
      this.state.id
    ) {
      const updatedDetails = {
        id: this.state.id,
        Name: this.state.Name,
        Email: this.state.Email
      };

      this.props.editEmployee(updatedDetails);
    } else {
      alert("Enter Employee Details.");
    }

    this.clearData();
  };

  editDetails = (data) => {
    this.setState({
      id: data.id,
      Name: data.Name,
      Email: data.Email
    });
  };

  deleteEmployee = (id) => {
    this.clearData();
    if (window.confirm("Are you sure?")) {
      this.props.deleteEmployee(id);
    }
  };

  handleNameChange = (e) => {
    this.setState({
      Name: e.target.value
    });
  };

  handleDepartmentChange = (e) => {
    this.setState({
      Email: e.target.value
    });
  };

  clearData = () => {
    this.setState({
      id: 0,
      Name: "",
      Email: ""
    });
  };

  render() {
    console.log(getEmployee)
    return (
      <div className="App">
        {/* <header className="App-header">
          <h1 className="App-title">CRUD opeartions for Employee Module</h1>
        </header> */}
        <p className="App-intro">
          <div className="leftsection">
            Name :{" "}
            <input
              onChange={this.handleNameChange}
              value={this.state.Name}
              type="text"
              placeholder="Name"
            />{" "}
            <br />
            Email :{" "}
            <input
              onChange={this.handleDepartmentChange}
              value={this.state.Email}
              type="email"
              placeholder="Email"
            />
            <br />
            {this.state.id ? (
              <button onClick={this.submitData}>UPDATE</button>
            ) : (
              <button onClick={this.submitData}>ADD</button>
            )}{" "}
            <button onClick={this.clearData}>CLEAR</button>
          </div>
          <div className="rightsection">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Action(s)</th>
                </tr>
              </thead>
              <tbody>
                {this.props.employees &&
                  this.props.employees.map((data, index) => {
                    return (
                      <tr key={index + 1}>
                        <td>{index + 1}</td>
                        <td>{data.Name}</td>
                        <td>{data.Email}</td>
                        <td>
                          <button onClick={() => this.editDetails(data)}>
                            EDIT
                          </button>{" "}
                          <button onClick={() => this.deleteEmployee(data.id)}>
                            DELETE
                          </button>{" "}
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  employees: state.employees
});

export default connect(mapStateToProps, {
  getEmployee,
  addEmployee,
  editEmployee,
  deleteEmployee
})(App);
