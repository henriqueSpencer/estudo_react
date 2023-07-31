import "./ExpenseItem.css";

// Sempre deixar o nome da funcao em maiusculo,
//pq ai a tag tbm sera em maiusculo se diferenciando de uma tag html normal
function ExpenseItem() {
  return (
    <div className="expanse-item">
      <div>Março 28 2023</div>
      <div className="expense-item__desription">
        <h2>Seguro Carro</h2>
        <div className="expense-item__price">R$294.67</div>
      </div>
    </div>
  );
}

// Se não exportar ele so vai ser usavel no próprio arquivo
export default ExpenseItem;
