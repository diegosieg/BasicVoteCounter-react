import React, { Component } from "react";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

class VoteCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: 0
    };
  }

  IncrementVote = () => {
    this.setState({ votes: this.state.votes + 1 });
  };
  DecreaseVote = () => {
    this.setState({ votes: this.state.votes - 1 });
  };

  render() {
    const voteCounter = {
      width: "50px",
      float: "left"
    };

    const buttons = {
      background: "transparent",
      border: 0,
      fontSize: "26px"
    };

    const redColor = {
      color: "#c0392b"
    };

    const blueColor = {
      color: "#2980b9"
    };

    return (
      <div style={voteCounter}>
        <button style={buttons} onClick={this.IncrementVote}>
          <MdKeyboardArrowUp />
        </button>
        <h2 style={this.state.votes < 0 ? redColor : blueColor}>
          {this.state.votes}
        </h2>
        <button style={buttons} onClick={this.DecreaseVote}>
          <MdKeyboardArrowDown />
        </button>
      </div>
    );
  }
}

export default VoteCounter;
