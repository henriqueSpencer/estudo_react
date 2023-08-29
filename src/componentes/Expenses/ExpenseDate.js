import "./ExpenseDate.css";

function ExpenseDate(data) {
  const mes = data.data.toLocaleString("en-US", { month: "long" });
  const dia = data.data.toLocaleString("en-US", { day: "2-digit" });
  const ano = data.data.getFullYear();
  console.log(mes);
  return (
    <div className="expense-date">
      <div className="expense-date__month">{mes}</div>
      <div className="expense-date__year">{ano}</div>
      <div className="expense-date__day">{dia}</div>
    </div>
  );
}

export default ExpenseDate;
