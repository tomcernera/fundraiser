import React from "react";

class AddTo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      entryPrice : '',
      shares : ''
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
    this.props.addToPortfolio(this.state.entryPrice,this.state.shares);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Entry Price
          <input type="text" value={this.props.entryPrice} onChange={this.handleEntry} />
        </label>
        <label>
          Shares
        <input type="text" value={this.props.shares} onChange={this.handleShares} />
        </label >
        <input type="submit" value="Add to Portfolio" onClick={this.handleSubmit} />
      </form>
    );
  }
}

export default AddTo;
