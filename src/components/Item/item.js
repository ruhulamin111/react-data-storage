import React from 'react';

const item = ({ cosmetic }) => {
    const { name, price, company } = cosmetic;

    return (
        <div>
            <p>Name: <b>{name}</b></p>
            <p>Price: <b>{price}</b></p>
            <p>Company: <b>{company}</b></p>

        </div>
    );
};

export default item;