import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./componentes/ExpenseItem";

function App() {
  return (
    <ExpenseItem></ExpenseItem>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //     <p>
    //       Feito por Henrique, Vlw Playboy 😎
    //     </p>
    //     <ExpenseItem></ExpenseItem>
    //   </header>
    // </div>
  );
}

export default App;
