import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementHandler() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button
          onClick={() => {
            console.log(this);
            this.incrementHandler();
          }}
        >
          Increment
        </button>
      </div>
    );
  }
}

export default About;
