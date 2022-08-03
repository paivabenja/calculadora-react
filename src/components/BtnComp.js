import React from "react";

const BtnComp = (props) => {
  const pressButton = (prop) => {
    if (prop.isNaN) {
      console.log(prop);
    }
  };
  return (
    <div className={"btn-div btn" + props.value}>
      <button
        className="btn"
        id={"btn" + props.value}
        onClick={pressButton(props.value)}
      >
        {props.value}
      </button>
    </div>
  );
};

export default BtnComp;
