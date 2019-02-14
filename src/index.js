import React from "react";
import ReactDOM from "react-dom";

class Human extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "nakanishi" };
  }
  render() {
    return (
      <h2 onClick={this.onButtonClick}>
        {this.state.name}
        {this.props.age}
      </h2>
    );
  }

  onButtonClick = () => {
    // alert("click");
    this.setState({ name: this.state.name + 1 });
  };
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Human age="30" />, rootElement);
