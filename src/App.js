import "./App.css";
import BtnComp from "./components/BtnComp.js";

function App() {
  const input = document.getElementById("input");
  return (
    <div className="App">
      <form>
        <input type="number" placeholder="Insert a numberi" id="input" />
        <BtnComp input={input} value="1"></BtnComp>
        <BtnComp input={input} value="2"></BtnComp>
        <BtnComp input={input} value="3"></BtnComp>
        <BtnComp input={input} value="4"></BtnComp>
        <BtnComp input={input} value="5"></BtnComp>
        <BtnComp input={input} value="6"></BtnComp>
        <BtnComp input={input} value="7"></BtnComp>
        <BtnComp input={input} value="8"></BtnComp>
        <BtnComp input={input} value="9"></BtnComp>
        <BtnComp input={input} value="0"></BtnComp>
        <BtnComp input={input} value="*"></BtnComp>
        <BtnComp input={input} value="-"></BtnComp>
        <BtnComp input={input} value="+"></BtnComp>
        <BtnComp input={input} value="/"></BtnComp>
        <BtnComp input={input} value="="></BtnComp>
      </form>
    </div>
  );
}

export default App;
