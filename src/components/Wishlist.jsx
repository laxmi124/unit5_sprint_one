import React from "react";
import '../components/Buttons.css';

function Wishlist() {
  const [query, setQuery] = React.useState("");
  const [wish, setWish] = React.useState([]);

  const addValue = (event) => {
    setQuery(event.target.value); 
  };

  const addToList = () => {
    const obj = {
      todo: query,
    };
    let arr = [...wish, obj];
    setWish(arr)
    setQuery('')
  };

  if (wish.length > 3){
    return <h2>You cannot add more than 3 items to wishlist</h2>
  }

  return (
    <>

      <input
        type="text"
        placeholder="Wish List"
        onChange={(e) => addValue(e)}
        value={query}
      />
      <br />
      <br />
      <button onClick={addToList} className="btns">ADD</button>

      {
      wish.map(({ todo }, index) => (
        <h1 key={index}>{todo}</h1>
      ))
      }
    </>
  );
}

export default Wishlist;
