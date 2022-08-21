import React from 'react';
import { sum } from '../../utilities/calculation';

const Shoe = () => {
    const bata = 2360;
    const apex = 2930;
    const shopping = sum(bata, apex);
    return (
        <div>
            <p><b>Shoe Total Price</b></p>
            <p>Total: <b>{shopping}</b></p>
        </div>
    );
};

export default Shoe;