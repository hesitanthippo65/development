
import "./App.css";
import { useState } from "react";
import Favorites from "./components/Favorites";
import bookData from './assets/book-data.json';
import Book from "./components/Book.js";
import filter from "react";
import "./logo.svg"


function App() {

  // const [type, setType] = useState("All"); //this depends on the filter selected
  const [saved, setSaved] = useState([]);
  const [totalPrice, setPrice] = useState(0);

  const [cart, setCart] = useState([]);
  const [cost, setCost] = useState(0);
  
  const addToCart = (itemName, itemCost) => {
    setCart([...cart, itemName])
    setPrice(cost + itemCost)
  };
 

  const favoriteBook = (book, price) => {
    setSaved([...saved, book]);
    setPrice(totalPrice+price);
  }

  const removeBook = (book, price) => {
    setSaved(saved.filter(item => item != book));
    setPrice(totalPrice-price);
  }

 const [checkedState, setCheckedState] = useState(false);
  //   new Array(genre.length).fill(false)
  // );

  

  // https://www.freecodecamp.org/news/how-to-work-with-multiple-checkboxes-in-react/
  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
  }

  const[sort, setSort] = useState(false);
  /** This code is adapted from https://github.com/joshwcomeau/react-collection-helpers/blob/master/documentation/comparators.md */
  const sortByPrice = (a,b) =>{
    if (sort == false) {
      return 0;
    }
    if (sort == true) {
      if (a.price > b.price) {
        return 1;
      }
      if (a.price < b.price) {
       return -1;
      }
    return 0;
    }
  };



const [filters, setFilters] = useState(["all", "all"]);

  const matchesFilterType = item => {
//come back to this
    if (filters[0] == "all" && filters[1] == "all") {
      return true;
    } else if (filters[1] == "all" && item.genre == filters[0]) {
      return true;
    } else if (filters[0] == "all" && item.genre == filters[1]) {
      return true;
    // } else if (filters[0] == "all" && filters[1] == "all" && item.price < 20) {
    //   return true;
    } else {
      return false;
    }
  }
  const [bookDataState, setBookDataState] = useState(bookData);

  const [sortColor, setSortColor] = useState("black");

  return (
    <div className="App">
      <h1>Books on the Square 2022 Favorites </h1> 
          <button style={{color: sortColor}}onClick={() => {
            setSortColor("grey");
            setSort(true);
          }
          }>Sort By Price 
          </button>

      <button id="reset" onClick={() => {
        setFilters(["all", "all"]);
        setSort(false);
      }}>
        Reset All Filters
      </button>

    <div>
    <h3>Filter By Genre:</h3>
    <button style={{}} onClick={() => {
      setFilters(["Fiction", filters[1]]);
    }}>Fiction</button>

    <button style={{}} onClick = {() => {
      setFilters(["Nonfiction", filters[1]]);
    }}>Nonfiction</button>

<button style={{}} onClick = {() => {
      setFilters(["Nonfiction", filters[1]]);
    }}>Under Twenty</button>

    </div>
    <div id="body">

    
<div id="faves">
  <div>
    <h2>Favorites:</h2>
  </div>

  <div id="favorites-grid">
  {bookDataState.sort(sortByPrice).filter(matchesFilterType).map((item) => (
    <Book savedItems={saved} prop={item} addClick={favoriteBook} removeClick={removeBook} updateCart={addToCart}/>
  ))}
  </div>

</div>

<div >
<Favorites
favoriteBooks={saved}
totalPrices={totalPrice}
/>

<h2>Cart</h2>
  {cart} {cost}
</div>


</div>
    </div>

    
    
  );



}

export default App;

