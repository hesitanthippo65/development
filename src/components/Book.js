import React, {useState} from 'react';
import '../index.css';



export default function Book({prop, addFavorite, removeFavorite, updateCart}) {

        return (
            <div id="card">
                <img src={prop.image} alt="book covers"/>
                <h3> {prop.name}</h3>
                <h4>Author: {prop.author}</h4>
                <h4>Price: {prop.price}</h4>
                <p>Genre: {prop.genre}</p>
                <p>Pages: {prop.pages} Pages</p>
                <p>Description: {prop.description} Pages</p>
    
                <button style={{color:"black"}} onClick={() => {
                    addFavorite(prop.name, prop.price);
                }
    
                    }>Save to Favorites
                </button>
    
                <button style={{color:"black"}} onClick={() => {
                    removeFavorite(prop.name, prop.price);
                }
                }>Remove from Favorites</button>

                <button style={{color:"black"}} onClick={() => {
                    updateCart(prop.name, prop.price);
                }
                }>Add to Cart</button>
            </div>
        )
            }
      
