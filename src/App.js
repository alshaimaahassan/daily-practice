import "./App.css";
import { data } from "./data.js";
import Card from "./Card.js";
function App() {
  let show = data.map((el) => (
    <Card
      image={el.image}
      price={el.price}
      title={el.title}
      description={el.description}
    />
  ));
  return (
    <div className="intro">
      {show}
   
    </div>
  );
}

export default App;
