import "./Card.css";

function Card(props) {
  // add qualquer nome class name utilizado no pai vai para dentro
  const classes = "card " + props.className;

  return <div className={classes}>{props.children}</div>;
}

export default Card;
