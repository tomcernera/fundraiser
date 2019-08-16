import React from 'react';
import TextField from '@material-ui/core/TextField';


class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleCurrentStock(this.state.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <TextField 
      label="Symbol"
      value={this.state.value}
      onChange={this.handleChange}
      variant="outlined"
      />
      </form>
    );
  }
}

  export default Form;