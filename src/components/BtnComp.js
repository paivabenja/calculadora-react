//@format
import React from "react";

class BtnComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { num1: props.num1 };
    this.input = document.getElementById("input");
  }

  operar(numero1, numero2, tipoDeoperacion, resultado) {
    switch (tipoDeoperacion) {
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
  }

  changeValue(val) {
    this.input.value = val;
  }

  addNum(text, num) {
    num = +num;
    num = text * 10 + num;
    this.changeValue(num);
  }

  pressButton(prop) {
    this.input = document.getElementById("input");
    if (+prop >= 0 && +prop <= 9) {
      console.log(this.input);
      this.addNum(this.input.value, prop);
      return;
    }

    switch (prop) {
      case "*":
        this.num1 = this.input.value;
        this.operacion = "*";
        this.input.value = "";
        this.input.placeholder = this.num1;
        break;

      case "/":
        this.num1 = this.input.value;
        this.operacion = "/";
        this.input.value = "";
        this.input.placeholder = this.num1;
        break;

      case "+":
        this.num1 = this.input.value;
        this.operacion = "+";
        this.input.value = "";
        this.input.placeholder = this.num1;
        break;

      case "-":
        this.num1 = this.input.value;
        this.operacion = "-";
        this.input.value = "";
        this.input.placeholder = this.num1;
        break;

      case "=":
        this.num2 = this.input.value;
        this.input.value = "";
        this.operar(this.num1, this.num2, this.operacion, this.input.value);
        break;

      default:
        break;
    }
  }

  render() {
    return (
      <div className={"btn-div btn" + this.props.value}>
        <button
          className="btn"
          id={"btn" + this.props.value}
          onClick={(x) => {
            x.preventDefault();
            this.pressButton(this.props.value);
          }}
        >
          {this.props.value}
        </button>
      </div>
    );
  }
}

export default BtnComp;
