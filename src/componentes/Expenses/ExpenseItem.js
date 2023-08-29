import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

// Sempre deixar o nome da funcao em maiusculo,
// pq ai a tag tbm sera em maiusculo se diferenciando de uma tag html normal
function ExpenseItem(props) {
  const [title, setTitle] = useState(props.props.title);

  // let title = props.title;

  const clickHandler = () => {
    setTitle("Updated");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate data={props.props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        {console.log(props.props.title)}
        <div className="expense-item__price">R${props.props.amount}</div>
      </div>
      {/* <button
        onClick={() => {
          console.log("OLA");
        }}
      > */}
      <button onClick={clickHandler}>MUDA</button>
    </Card>
  );
}

// Se não exportar ele so vai ser usavel no próprio arquivo
export default ExpenseItem;
