import React, { useEffect, useState } from 'react';
import { totalPrice } from '../../utilities/fakedb';
import Item from '../Item/item';
import './Cosmetics.css'

const Cosmetics = () => {
    const [cosmetics, setCosmetics] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCosmetics(data))
    }, [])

    const total = totalPrice(cosmetics);

    return (
        <div>
            <h2>Total Price: {total}</h2>
            <div className='cosmetic'>
                {
                    cosmetics.map(cosmetic => <Item
                        key={cosmetic.id}
                        cosmetic={cosmetic}
                    ></Item>)
                }
            </div>
        </div>
    );
};

export default Cosmetics;