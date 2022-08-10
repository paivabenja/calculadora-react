import "./App.css";
import BtnComp from "./components/BtnComp.js";

function App() {
  const input = document.getElementById("input");
  return (
    <div className="App">
      <form>
        <input type="number" placeholder="Insert a numberi" id="input" />
        <BtnComp value="1"></BtnComp>
        <BtnComp value="2"></BtnComp>
        <BtnComp value="3"></BtnComp>
        <BtnComp value="4"></BtnComp>
        <BtnComp value="5"></BtnComp>
        <BtnComp value="6"></BtnComp>
        <BtnComp value="7"></BtnComp>
        <BtnComp value="8"></BtnComp>
        <BtnComp value="9"></BtnComp>
        <BtnComp value="0"></BtnComp>
        <BtnComp value="*"></BtnComp>
        <BtnComp value="-"></BtnComp>
        <BtnComp value="+"></BtnComp>
        <BtnComp value="/"></BtnComp>
        <BtnComp value="="></BtnComp>
      </form>
    </div>
  );
}

export default App;
