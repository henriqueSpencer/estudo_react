import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./componentes/ExpenseItem";

function App() {
  const despesas = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
      {/* <ExpenseItem titulo={despesas[0].title}></ExpenseItem> */}
      {/* <ExpenseItem props={despesas[0]}></ExpenseItem> */}
      <ExpenseItem props={despesas[0]}></ExpenseItem>
      <ExpenseItem props={despesas[2]}></ExpenseItem>
    </div>
  );
}

export default App;
