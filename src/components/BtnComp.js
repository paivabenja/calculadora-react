import React from "react";

const BtnComp = (props) => {
  const operar = (numero1, numero2, tipoDeOperacion, resultado) => {
    switch (tipoDeOperacion) {
      case "*":
        resultado = numero1 * numero2;
        break;
      case "/":
        resultado = numero1 / numero2;
        break;
      case "+":
        resultado = numero1 + numero2;
        break;
      case "-":
        resultado = numero1 - numero2;
        break;
      default:
        break;
    }
  };

  const changeValue = (val) => {
    props.numInput.value = val;
  };

  const addNum = (text, num) => {
    num = +num;
    num = text * 10 + num;
    changeValue(num);
  };

  const pressButton = (prop) => {
    let num1;
    let num2;
    let operacion;

    if (+prop >= 0 && +prop <= 9) {
      console.log(props.numInput);
      addNum(props.numInput.value, prop);
      return;
    }

    switch (prop) {
      case "*":
        num1 = props.numInput.value;
        operacion = "*";
        props.numInput.value = "";
        props.numInput.placeholder = num1;
        break;

      case "/":
        num1 = props.numInput.value;
        operacion = "/";
        props.numInput.value = "";
        props.numInput.placeholder = num1;
        break;

      case "+":
        num1 = props.numInput.value;
        operacion = "+";
        props.numInput.value = "";
        props.numInput.placeholder = num1;
        break;

      case "-":
        num1 = props.numInput.value;
        operacion = "-";
        props.numInput.value = "";
        props.numInput.placeholder = num1;
        break;

      case "=":
        num2 = props.numInput.value;
        props.numInput.value = "";
        operar(num1, num2, operacion, props.numInput.value);
        break;

      default:
        break;
    }
  };

  return (
    <div className={"btn-div btn" + props.value}>
      <button
        className="btn"
        id={"btn" + props.value}
        onClick={(x) => {
          x.preventDefault();
          pressButton(props.value);
        }}
      >
        {props.value}
      </button>
    </div>
  );
};

export default BtnComp;
