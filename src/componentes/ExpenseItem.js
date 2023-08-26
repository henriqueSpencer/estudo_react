import "./ExpenseItem.css";

// Sempre deixar o nome da funcao em maiusculo,
// pq ai a tag tbm sera em maiusculo se diferenciando de uma tag html normal
function ExpenseItem() {
  const gastoData = new Date(2021, 2, 28);
  const gastoTitle = "Seguro Carro";
  const gastoValor = 332.22;

  return (
    <div className="expense-item">
      <div>{gastoData.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{gastoTitle}</h2>
        <div className="expense-item__price">R${Math.random()}</div>
      </div>
    </div>
  );
}

// Se não exportar ele so vai ser usavel no próprio arquivo
export default ExpenseItem;
