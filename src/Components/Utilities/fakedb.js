// use local storage to manage data

// const addToDb = id => {
//     localStorage.setItem(id, 1);
// }

// export { addToDb }



//same jinish local e thakle add hbe na , r na thakle addd hbe 
//ekbar click korle nwe items erpr bar bar dite thakle already exists
// const addToDb = id => {
//     const quantity = localStorage.getItem(id);
//     if (quantity) {
//         console.log('exists');
//     } else {
//         console.log('newItem');
//         localStorage.setItem(id, 1);
//     }

// }

// export { addToDb }
// const addToDb = id => {
//     const quantity = localStorage.getItem(id);
//     if (quantity) {
//         // console.log('exists');
//         // const newQuantity = quantity + 1;
//         const newQuantity = parseInt(quantity) + 1;
//         localStorage.setItem(id, newQuantity);
//     } else {
//         console.log('newItem');
//         localStorage.setItem(id, 1);
//     }

// }

// export { addToDb }


//3 tacode prottek ta alada kore try krbo tokhn ager ta comment kore dbo




// const addToDb = id => {
//     let shoppingCart = {};
//     // localStorage.setItem('shopping-cart', shoppingCart);
//     //ekhn ekta add korbo kore dekhbo je sopping cart er sathe obj obj show hochee
//     //key value 2 tai str hote hbe tai porer ta obj dekhache karon ota obj
//     //tai porer take stringfy te convert krte hbe 
//     //krar por ekhn {} show hochee
//     localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
//     const quantity = localStorage.getItem(id);
//     if (quantity) {

//         const newQuantity = parseInt(quantity) + 1;
//         // localStorage.setItem(id, newQuantity);
//     } else {

//         // localStorage.setItem(id, 1);
//     }

// }

// export { addToDb }






// const addToDb = id => {
//     let shoppingCart = {};
//     // localStorage.setItem('shopping-cart', shoppingCart);
//     //ekhn ekta add korbo kore dekhbo je sopping cart er sathe obj obj show hochee
//     //key value 2 tai str hote hbe tai porer ta obj dekhache karon ota obj
//     //tai porer take stringfy te convert krte hbe 
//     //krar por ekhn {} show hochee

//     const quantity = shoppingCart[id]
//     if (quantity) {

//         const newQuantity = quantity + 1;
//         shoppingCart[id] = newQuantity;
//         // localStorage.setItem(id, newQuantity);
//     } else {
//         shoppingCart[id] = 1;
//         // localStorage.setItem(id, 1);
//     }
//     localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
//     //ei jinish take upr theke niy =e ashlam karon update age korte to r hbe na 
//     //ekhn jodi click kori dekha jabe id hishebne ashtese
//     //kintu abr click korle oi id tai ashtese
//     //onno ta click krleo same id ashtese


// }

// export { addToDb }





// const addToDb = id => {
//     let shoppingCart;
//     //get the shopping cart
//     const storedCart = localStorage.getItem('shopping-cart');
//     if (storedCart) {
//         console.log(storedCart);
//         console.log(typeof storedCart);
//     } else {
//         shoppingCart = {};
//     }
//     //add quantity
//     const quantity = shoppingCart[id]
//     if (quantity) {

//         const newQuantity = quantity + 1;
//         shoppingCart[id] = newQuantity;
//         // localStorage.setItem(id, newQuantity);
//     } else {
//         shoppingCart[id] = 1;
//         // localStorage.setItem(id, 1);
//     }
//     localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));



// }

// export { addToDb }












// const addToDb = id => {
//     let shoppingCart;
//     //get the shopping cart from local storage
//     const storedCart = localStorage.getItem('shopping-cart');
//     if (storedCart) {
//         shoppingCart = JSON.parse(storedCart);
//     } else {
//         shoppingCart = {};
//     }
//     //add quantity
//     const quantity = shoppingCart[id]
//     if (quantity) {

//         const newQuantity = quantity + 1;
//         shoppingCart[id] = newQuantity;

//     } else {
//         shoppingCart[id] = 1;

//     }
//     localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));



// }

// //remove from database dekhbo ebar
// const removeFromDb = id => {
//     console.log('inside fakeDb', id); //hae remove dile kaj hochee inspact e 
//     const storedCart = localStorage.getItem('shopping-cart');
//     //ekhane storedcart ta ekta string 
//     //str er modhe in check  kore delete kora jabe na 

//     if (storedCart) {
//         const shoppingCart = JSON.parse(storedCart)
//         if (id in shoppingCart) {
//             console.log('exists in the cart');
//             //sto te thakle exists in the cart show krbe 
//             //na thakle kichu show hbe na console e 
//             delete shoppingCart[id];
//             //kono ekta object theke kono ekta property delete korar upay
//             localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
//         }
//         //shob kaj shesh ekhn dekha jabe remove e click korle remove hbe
//     }

// }
// //export kore dbo
// export { addToDb, removeFromDb }

//ekhn dekha jabe 2nd item add korle shetao bartese 

















//porer part e shopping cart delete hbe 




const addToDb = id => {
    let shoppingCart;
    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    } else {
        shoppingCart = {};
    }
    //add quantity
    const quantity = shoppingCart[id]
    if (quantity) {

        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;

    } else {
        shoppingCart[id] = 1;

    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));



}

//remove from database dekhbo ebar
const removeFromDb = id => {
    console.log('inside fakeDb', id); //hae remove dile kaj hochee inspact e 
    const storedCart = localStorage.getItem('shopping-cart');
    //ekhane storedcart ta ekta string 
    //str er modhe in check  kore delete kora jabe na 

    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart)
        if (id in shoppingCart) {
            console.log('exists in the cart');
            //sto te thakle exists in the cart show krbe 
            //na thakle kichu show hbe na console e 
            delete shoppingCart[id];
            //kono ekta object theke kono ekta property delete korar upay
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
        //shob kaj shesh ekhn dekha jabe remove e click korle remove hbe
    }

}
const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart');
}
//export kore dbo
export { addToDb, removeFromDb, deleteShoppingCart }


//delete korte chaile cosmetics theke eke call kore dilei hbe 







