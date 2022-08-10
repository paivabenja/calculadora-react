import "./App.css";
import BtnComp from "./components/BtnComp.js";

function App() {
  let num1;
  let num2;
  let operacion;
  let input = document.getElementById("input");

  const operar = (numero1, numero2, tipoDeoperacion, resultado) => {
    switch (tipoDeoperacion) {
      case "*":
        resultado = numero1 * numero2;
        input.value = resultado;
        break;
      case "/":
        resultado = numero1 / numero2;
        input.value = resultado;
        break;
      case "+":
        resultado = +numero1 + +numero2;
        input.value = resultado;
        break;
      case "-":
        resultado = numero1 - numero2;
        input.value = resultado;
        break;
      default:
        break;
    }
  };

  const addNum = (text, num) => {
    num = +num;
    num = text * 10 + num;
    input.value = num;
  };

  const pressButton = (prop) => {
    input = document.getElementById("input");

    if (+prop >= 0 && +prop <= 9) {
      addNum(input.value, prop);
      return;
    }

    switch (prop) {
      case "*":
        num1 = input.value
        operacion = '*'
        console.log("num1: ", num1, "oper: ", operacion);
        input.value = "";
        input.placeholder = num1;
        console.log(num1);
        console.log(operacion);
        break;

      case "/":
        num1 = input.value
        operacion = '/'
        input.value = "";
        input.placeholder = num1;
        break;

      case "+":
        num1 = input.value;
        operacion = "+";
        input.value = "";
        input.placeholder = num1;
        break;

      case "-":
        num1 = input.value
        operacion = '-'
        input.value = "";
        input.placeholder = num1;
        break;

      case "=":
        num2 = input.value
        input.placeholder = num2;
        console.log("num1: ", num1, "num2: ", num2, "operacion: ", operacion);
        operar(num1, num2, operacion, input.value);
        break;

      default:
        break;
    }
  };

  return (
    <div className="App">
      <form>
        <input type="number" placeholder="Insert a numberi" id="input" />
        <BtnComp func={pressButton} value="1"></BtnComp>
        <BtnComp func={pressButton} value="2"></BtnComp>
        <BtnComp func={pressButton} value="3"></BtnComp>
        <BtnComp func={pressButton} value="4"></BtnComp>
        <BtnComp func={pressButton} value="5"></BtnComp>
        <BtnComp func={pressButton} value="6"></BtnComp>
        <BtnComp func={pressButton} value="7"></BtnComp>
        <BtnComp func={pressButton} value="8"></BtnComp>
        <BtnComp func={pressButton} value="9"></BtnComp>
        <BtnComp func={pressButton} value="0"></BtnComp>
        <BtnComp func={pressButton} value="*"></BtnComp>
        <BtnComp func={pressButton} value="-"></BtnComp>
        <BtnComp func={pressButton} value="+"></BtnComp>
        <BtnComp func={pressButton} value="/"></BtnComp>
        <BtnComp func={pressButton} value="="></BtnComp>
      </form>
    </div>
  );
}

export default App;
