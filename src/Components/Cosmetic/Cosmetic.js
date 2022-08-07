import React from 'react';
import { addToDb, removeFromDb } from '../Utilities/fakedb';
import './Cosmetic.css'

const Cosmetic = (props) => {
    // cosmetic ta obj tai  destructure tao obj hbe 
    const { name, price, id } = props.cosmetic;
    const addToCart = (id) => {
        // console.log('item added');/
        console.log('item added', id);
        //click korle inspact e clicked showing 
        //click korle ki ki add korsi ta ami local e e dekhte chai
        // localStorage.setItem(id, 1);
        //ekta key ekta value, add hoise
        //ei kaj ta utilities theke krbo
        addToDb(id);


    }

    //eta remove er jnno
    const removeFromCart = id => {
        console.log('removing', id);
        removeFromDb(id);
    }
    const addToCartWithParam = () => addToCart(id);
    return (
        <div className="product">
            <h2>Buy this: {name}</h2>
            <p>Only for: ${price}</p>
            <p><small>It has id : {id}</small></p>
            <button onClick={addToCartWithParam}>Add to Cart</button>
            <button onClick={() => addToCart(id)}>
                Add to Cart : Actual</button>
            <button onClick={() => removeFromCart(id)}>Remove</button>
        </div>
        //console e giye remove korar try krbo console e giye dekhbo
        //kon ta remove hbe ta show hoche but application theke shortese na 
        //mane console theke shortese but local sto theke shortese na 
    );
};

export default Cosmetic;







//without destructuring er code niche
// const Cosmetic = (props) => {
//     return (
//         <div>
//             <h2>Buy this: {props.cosmetic.name}</h2>
//             <p>Only for: ${props.cosmetic.price}</p>
//         </div>
//     );
// };

// export default Cosmetic;