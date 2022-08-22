import React from 'react';
import { addToDb } from '../../utilities/addToDb';
import { removeFromDb } from '../../utilities/fakedb';
import './item.css'

const item = ({ cosmetic }) => {
    const { id, name, price, company } = cosmetic;

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
            <button onClick={() => removeFromCart(id)}>Add to Cart</button>

        </div>
    );
};

export default item;