import React from 'react';
import { sum } from '../../utilities/calculation';

const Shoe = () => {
    const bata = 2360;
    const apex = 2930;
    const shopping = sum(bata, apex);
    return (
        <div>
            <h3>Shoe Brand Price</h3>
            <p>Total : {shopping}</p>
        </div>
    );
};

export default Shoe;