import React from 'react';
import { add, multiply } from '../Utilities/Calculate';

const Shoes = () => {
    const first = 13;
    const second = 20;
    const result = multiply(first, second)
    const sum = add(first, second);
    return (
        <div>
            <h3>Shoes are here</h3>
            <p>Result: {result} and total: {sum}</p>
        </div>
    );
};

export default Shoes;