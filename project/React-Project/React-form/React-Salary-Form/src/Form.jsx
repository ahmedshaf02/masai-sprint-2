import React from "react";
import { v4 as uuidv4 } from "uuid";
import Details from "./Details";
import TableHeader from "./Table";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      department: "hr",
      address: "",
      salary: "",
      value: [],
      obj: {},
      show: false,
      isEdit: false,

      nameEdit: "",
      ageEdit: "",
      departmentEdit: "hr",
      addressEdit: "",
      salaryEdit: "",
      editId: "",
      filterValue: "all",
      sort: "asc"
    };
  }

  // for input box change
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  // for form submit
  handleForm = e => {
    const { name, age, address, department, salary } = this.state;
    e.preventDefault();

    // to handle empty field
    if (name === "" && age === "" && address === "" && salary === "") {
      alert("please fill the form properly");
      return;
    }

    // console.log(this.state);
    this.setState({
      value: [
        ...this.state.value,
        {
          name: name,
          age: age,
          address: address,
          department: department,
          salary: salary,
          id: uuidv4()
        }
      ],
      show: true,
      name: "",
      age: "",
      department: "hr",
      address: "",
      salary: ""
    });
  };

  // to delete form data
  remove = id => {
    const remove = this.state.value.filter(ele => ele.id !== id);
    this.setState({
      value: remove
    });
  };

  // to edit the form data
  edit = value => {
    this.setState({
      isEdit: true,
      nameEdit: value.name,
      ageEdit: value.age,
      departmentEdit: value.department,
      addressEdit: value.address,
      salaryEdit: value.salary,
      editId: value.id
    });
  };

  // to update the form data
  update = () => {
    const {
      nameEdit,
      ageEdit,
      addressEdit,
      salaryEdit,
      departmentEdit,
      editId
    } = this.state;

    const update = this.state.value.filter(ele =>
      ele.id === editId
        ? ((ele.name = nameEdit),
          (ele.age = ageEdit),
          (ele.salary = salaryEdit),
          (ele.address = addressEdit),
          (ele.department = departmentEdit))
        : true
    );

    this.setState({
      value: update,
      isEdit: false,
      nameEdit: "",
      ageEdit: "",
      departmentEdit: "",
      addressEdit: "",
      salaryEdit: "",
      editId: ""
    });
  };

  render() {
    if (!this.state.isEdit) {
      return (
        <>
          {/* form to fill input */}
          <form onSubmit={this.handleForm}>
            <h1 className="main"> react form</h1>
            <div className="offset-3 col-6" style={{ textAlign: "left" }}>
              <label>Your Name</label>
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Full Name"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />

              <label>Your Address</label>
              <input
                name="address"
                value={this.state.address}
                onChange={this.handleChange}
                type="text"
                className="form-control mb-2"
                placeholder="Address"
              />

              <label>Your Age</label>
              <input
                name="age"
                value={this.state.age}
                onChange={this.handleChange}
                type="text"
                className="form-control mb-2"
                placeholder=" Age"
              />

              <label>Your Salary</label>
              <input
                name="salary"
                value={this.state.salary}
                onChange={this.handleChange}
                type="text"
                className="form-control mb-2"
                placeholder=" Salary"
              />

              <label>Your Department</label>
              <select
                className="form-control mb-2"
                name="department"
                value={this.state.department}
                onChange={this.handleChange}
              >
                <option value="hr">hr</option>
                <option value="sales">sales</option>
                <option value="management">management</option>
                <option value="engineering">engineering</option>
              </select>
              <div style={{ textAlign: "center" }}>
                <input
                  type="submit"
                  value="submit form"
                  className="btn btn-outline-primary mb-3"
                />
              </div>
              {/*  filter to filter from main array */}
              <h5>Filters</h5>
              <div className="form-row">
                <div className="col">
                  department
                  <select
                    className="form-control mb-2"
                    value={this.state.filterValue}
                    onChange={e => {
                      this.setState({ filterValue: e.target.value });
                    }}
                  >
                    {["all", "hr", "engineering", "sales", "management"].map(
                      ele => (
                        <option key={ele} value={ele}>
                          {ele}
                        </option>
                      )
                    )}
                  </select>
                </div>
                <div className="col">
                  salary
                  <select
                    className="form-control mb-2"
                    value={this.state.sort}
                    onChange={e => {
                      this.setState({ sort: e.target.value });
                    }}
                  >
                    {["asc", "desc"].map(ele => (
                      <option key={ele} value={ele}>
                        {ele}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </form>
          {/* to display in table */}
          {this.state.show ? (
            <table className="table">
              <TableHeader />
              <tbody>
                {this.state.value &&
                  this.state.value
                    .filter(ele => {
                      const { filterValue } = this.state;

                      switch (filterValue) {
                        case "all":
                          return true;

                        default:
                          return filterValue === ele.department;
                      }
                    })
                    .sort((a, b) => {
                      if (this.state.sort === "asc") {
                        if (a.salary - b.salary) {
                          return 1;
                        }
                      } else {
                        if (b.salary - a.salary) {
                          return -1;
                        }
                      }
                    })
                    .map(ele => (
                      <Details
                        key={ele.id}
                        remove={this.remove}
                        value={ele}
                        edit={this.edit}
                      />
                    ))}
              </tbody>
            </table>
          ) : (
            ""
          )}
        </>
      );
    } else {
      return (
        <>
          {/* to edit  and update form data */}
          <h1 className="main"> react form</h1>
          <h1>edit form</h1>
          <form onSubmit={this.handleForm}>
            <div className="offset-3 col-6" style={{ textAlign: "left" }}>
              <label>Your Name</label>
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Full Name"
                value={this.state.nameEdit}
                onChange={e => {
                  this.setState({ nameEdit: e.target.value });
                }}
              />

              <label>Your Address</label>
              <input
                value={this.state.addressEdit}
                onChange={e => {
                  this.setState({ addressEdit: e.target.value });
                }}
                type="text"
                className="form-control mb-2"
                placeholder="Address"
              />

              <label>Your Age</label>
              <input
                value={this.state.ageEdit}
                onChange={e => {
                  this.setState({ ageEdit: e.target.value });
                }}
                type="text"
                className="form-control mb-2"
                placeholder=" Age"
              />

              <label>Your Salary</label>
              <input
                value={this.state.salaryEdit}
                onChange={e => {
                  this.setState({ salaryEdit: e.target.value });
                }}
                type="text"
                className="form-control mb-2"
                placeholder=" Salary"
              />

              <label>Your Department</label>
              <select
                className="form-control mb-2"
                value={this.state.departmentEdit}
                onChange={e => {
                  this.setState({ departmentEdit: e.target.value });
                }}
              >
                <option value="hr">hr</option>
                <option value="sales">sales</option>
                <option value="management">management</option>
                <option value="engineering">engineering</option>
              </select>

              {/* update and cancel button */}
              <div style={{ textAlign: "center" }}>
                <button
                  style={{ margin: 10 }}
                  onClick={this.update}
                  className="btn btn-primary"
                >
                  update
                </button>
                <button
                  style={{ margin: 10 }}
                  onClick={() => {
                    this.setState({ isEdit: false });
                  }}
                  className="btn btn-primary"
                >
                  cancel
                </button>
              </div>
            </div>
          </form>
        </>
      );
    }
  }
}
