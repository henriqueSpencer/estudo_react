import React from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const titleChangeHandler = () => {
    console.log("Titulo Mudou");
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Titulo</label>
          <input type="text" onChange={titleChangeHandler}></input>
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
