import React, { useEffect, useState } from 'react';
import Item from '../Item/item';
import './Cosmetics.css'

const Cosmetics = () => {
    const [cosmetics, setCosmetics] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCosmetics(data))
    }, [])

    return (
        <div className='cosmetic'>
            {
                cosmetics.map(cosmetic => <Item
                    key={cosmetic.id}
                    cosmetic={cosmetic}
                ></Item>)
            }
        </div>
    );
};

export default Cosmetics;