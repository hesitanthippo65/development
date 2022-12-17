export default function Favorites({favoriteBooks, totalPrice}) {

    return (
        
        <div>
          <h3>Favorites</h3>

          {favoriteBooks.map((book) => (
            <p>{book}</p>
          ))}

          <h3>Price:</h3>
          <p> {totalPrice} dollars</p>
        </div>
        
    )
}