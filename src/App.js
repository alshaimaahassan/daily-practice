import "./App.css";
import Cards from "./Cards";
import Form from "./Form";
import { useEffect ,useState} from "react";
import Name from "./Name";
function App() {
  let [name, setName] = useState("");
    useEffect(() => {
         fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then(data => setName(data.data.memes.map((el)=>el.name)))
    },[])
  return (
   <>
   <Cards />
   <Form />
   <Name name={name}/>
   </>
  );
}
//https://api.imgflip.com/get_memes
export default App;
