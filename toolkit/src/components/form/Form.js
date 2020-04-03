import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import styles from "./form.module.css";

class Form extends Component {
  state = {
    note: ""
  };

  handleSubmit = async e => {
    e.preventDefault();
    await this.props.putData({ note: this.state.note });
    await this.props.getData();
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className={styles.container}>
        <form onSubmit={this.handleSubmit} noValidate autoComplete="off">
          <TextField
            className={styles.input}
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            name="note"
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default Form;
