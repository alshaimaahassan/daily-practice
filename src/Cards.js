import Card from "./Card";
import { data } from "./data";
function Cards() {      
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
export default Cards