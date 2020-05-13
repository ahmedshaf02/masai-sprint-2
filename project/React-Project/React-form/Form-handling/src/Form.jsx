import React from "react";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      select: "1",
      text: "",
      checkbox: false
    };
  }

  componentDidMount() {}
  handleForm = e => {
    let value =
      e.target.name === "checkbox" ? e.target.checked : e.target.value;
    this.setState({
      [e.target.name]: value
    });
  };

  submitForm = e => {
    e.preventDefault();
    console.log("submit form");
  };

  render() {
    console.log(this.state);
    return (
      <>
        <div>
          <form onSubmit={this.submitForm}>
            <label>
              Name:
              <input
                name="name"
                value={this.state.name}
                onChange={this.handleForm}
              />
            </label>
            <br />
            <label>
              Email:
              <input
                name="email"
                value={this.state.email}
                onChange={this.handleForm}
              />
            </label>
            <br />
            <label>
              Password:
              <input
                name="password"
                value={this.state.password}
                onChange={this.handleForm}
              />
            </label>
            <br />
            <br />
            <input
              name="checkbox"
              type="checkbox"
              checked={this.state.checkbox}
              onChange={this.handleForm}
            />
            <select
              value={this.state.select}
              name="select"
              onChange={this.handleForm}
            >
              <option value="1">one</option>
              <option value="2">two</option>
              <option value="3">three</option>
            </select>
            <input type="submit" value="submit" />
            <textarea
              name="text"
              value={this.state.text}
              onChange={this.handleForm}
            />
          </form>
        </div>
      </>
    );
  }
}
