import './App.css';
import Wishlist from './components/Wishlist'
import Vegetables from './components/Vegetables'

function App() {
  return (
    <div className="App">
      <h1>Wishlist </h1>
      <Wishlist/>
      <Vegetables val={10} vegName={"Tomato"}/>
      <Vegetables val={8} vegName={"Potatoes"}/>
      <Vegetables val={7} vegName={"Onions"}/>
    </div>
  );
}

export default App;
