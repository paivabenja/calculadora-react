//@format
import React from "react";

class BtnComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { num1: props.num1, num2: props.num2 };
    this.input = document.getElementById("input");
  }

  render() {
    return (
      <div className={"btn-div btn" + this.props.value}>
        <button
          className="btn"
          id={"btn" + this.props.value}
          onClick={(x) => {
            x.preventDefault();
            this.props.func(this.props.value);
          }}
        >
          {this.props.value}
        </button>
      </div>
    );
  }
}

export default BtnComp;
