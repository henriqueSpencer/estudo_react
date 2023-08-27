import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

// Sempre deixar o nome da funcao em maiusculo,
// pq ai a tag tbm sera em maiusculo se diferenciando de uma tag html normal
function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate data={props.props.date} />
      <div className="expense-item__description">
        <h2>{props.props.title}</h2>
        {console.log(props.props.title)}
        <div className="expense-item__price">R${props.props.amount}</div>
      </div>
    </div>
  );
}

// Se não exportar ele so vai ser usavel no próprio arquivo
export default ExpenseItem;
