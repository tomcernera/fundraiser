import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

class AddTo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entryPrice: "",
      shares: ""
    };

    this.handleEntry = this.handleEntry.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleShares = this.handleShares.bind(this);
  }

  handleEntry(event) {
    this.setState({ entryPrice: event.target.value });
  }
  handleShares(event) {
    this.setState({ shares: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addToPortfolio(this.state.entryPrice, this.state.shares);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={{margin:5}}>
        <TextField style={{margin:3}} label="Entry Price" value={this.props.entryPrice} onChange={this.handleEntry} variant="outlined" />
        <TextField style={{margin:3}} label="Shares" value={this.props.shares} onChange={this.handleShares} variant="outlined" />
        <Fab color="green" aria-label="add" onClick={this.handleSubmit}>
          <AddIcon />
        </Fab>
      </form>
    );
  }
}

export default AddTo;
