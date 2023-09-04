import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./componentes/Expenses/ExpenseItem";
// import Expenses from "./components/Expenses/Expenses";

import NewExpense from "./componentes/NewExpense/NewExpense";

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

  const addExpenseHandler = (expense) => {
    console.log("Dento de app");
    console.log(expense);
  };

  return (
    <div>
      {/* <ExpenseItem titulo={despesas[0].title}></ExpenseItem> */}
      {/* <ExpenseItem props={despesas[0]}></ExpenseItem> */}
      <NewExpense onAddExpense={addExpenseHandler} />
      {/* <Expenses items={despesas} /> */}
      <ExpenseItem props={despesas[0]}></ExpenseItem>
      <ExpenseItem props={despesas[1]}></ExpenseItem>
      <ExpenseItem props={despesas[2]}></ExpenseItem>
    </div>
  );
}

export default App;
