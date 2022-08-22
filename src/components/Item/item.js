import React from 'react';
import { fakeDb } from '../../utilities/fakedb';
import './item.css'

const item = ({ cosmetic }) => {
    const { id, name, price, company } = cosmetic;
    const addToCart = (id) => {
        fakeDb(id)
    }

    return (
        <div className='item'>
            <p>Name: <b>{name}</b></p>
            <p>Company: <b>{company}</b></p>
            <p>Price: <b>{price}</b></p>
            <button onClick={() => addToCart(id)}>Add to Cart</button>

        </div>
    );
};

export default item;