import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  //FORMA 00 DE ATUALIZAR CAMPO, UM POR UM
  // const [enteredTitle, setEnteredTitle] = useState("");

  // const titleChangeHandler = (event) => {
  //   console.log(event.target.value);
  //   setEnteredTitle(event.target.value);
  // };

  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const titleChangeHandler = (event) => {
    console.log(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
  };

  const subimitHandler = (event) => {
    // Previnindo de dar reload ao dar subbimit
    event.preventDefault();

    const expenseDate = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };
    console.log(expenseDate);
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: "" };
    });
  };

  return (
    <form onSubmit={subimitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Titulo</label>
          <input
            type="text"
            value={userInput.enteredTitle}
            onChange={titleChangeHandler}
          ></input>
          {/* <input type="text" onChange={(event) => inputChangeHandle('title', event.target.value)}></input> */}
        </div>
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Valor</label>
          <input type="number"></input>
        </div>
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Data</label>
          <input type="date" min="2019-01-01" max="2024-12-31"></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Adicionar despesa</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
