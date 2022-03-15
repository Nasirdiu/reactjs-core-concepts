import logo from "./logo.svg";
import "./App.css";

const singer=[
  {name:'Dev',job:'singer'},
  {name:'agun',job:'singer'},
  {name:'Tufan',job:'Movie name'},
  {name:'Prothik nobi',job:'singer'},

]
function App() {
  const nayoks = ["Nasir Uddin", "Shouel",'Josim','Hero Alom','Riyaj','Razzak' ,'Farok'];
  

  return (
    <div className="App">
      {
        nayoks.map(nayok=><li>Name:{nayok}</li>)
      }
      {
        // nayoks.map(nayok=> <Person name={nayok}></Person>)
      }

      {
        singer.map(sing=><Person name={sing.name}></Person>)
      }

      {/* <Person name={nayoks[0]} nayika="Mim"></Person>
      <Person name={nayoks[1]} nayika="Mayzabin"></Person> */}
      <h5>New Compoent ba new tag</h5>
      <p>Rock mama React mama</p>
      <Person1 phone="017458552" name="Pallob Gandu"></Person1>
      <Person1 phone="01235974" name="Arif"></Person1>
    </div>
  );
}
function Person(props) {
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <p>{props.nayika}</p>
    </div>
  );
}
function Person1(props) {
  return (
    <div className="person1">
      <h3>Name:{props.name}</h3>
      <p>Phone:{props.phone}</p>
    </div>
  );
}
export default App;
