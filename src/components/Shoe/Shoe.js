import React from 'react';
import { sum } from '../../utilities/calculation';

const Shoe = () => {
    const bata = 2360;
    const apex = 2930;
    const shopping = sum(bata, apex);
    return (
        <div>
            <h2>Shoe Mart Shopping</h2>
        </div>
    );
};

export default Shoe;