import React from 'react';
import { addToDb, removeFromDb } from '../../utilities/fakedb';
import './item.css'

const item = (props) => {
    const { id, name, price, company } = props.cosmetic;

    const addToCart = (id) => {
        addToDb(id)
    }

    const removeFromCart = id => {
        removeFromDb(id)
    }

    return (
        <div className='item'>
            <p>Name: <b>{name}</b></p>
            <p>Company: <b>{company}</b></p>
            <p>Price: <b>{price}</b></p>
            <button onClick={() => addToCart(id)}>Add to Cart</button>
            <button onClick={() => removeFromCart(id)}>Remove to Cart</button>

        </div>
    );
};

export default item;