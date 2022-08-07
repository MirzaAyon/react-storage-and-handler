const add = (first, second) => {
    return first + second;
}
//ekhan theke export korbo r onno place theke import korbo
// export default add;
//ekadhik jinish export korar jnno 

const multiply = (first, second) => {
    return first * second
}
// const numbers = [20, 24, 235, 65, 89];
// // for loop chalae arr er shobar maan ber kore felte pari
// //2nd arekta system holo reducer
// //reduce korar shomoy ekta func nibe r sathe ekta initial value nibe 
// //ei func ke bole call back func
// //r initial value nilam 0
// const sumReducer = (previous, current) => previous + current;
// const total = numbers.reduce(sumReducer, 0)
//tarpor ekhane total show hbe 
//reducer holo map,foreach,find er moto ekta jinish ja array te apply hy


//ekhn shongkha na hoye kno ekta obj hole ki hbe ta ber krbo


// const items = [
//     { id: 1, name: 'alta', price: 300 },
//     { id: 2, name: 'blta', price: 400 },
//     { id: 3, name: 'nlta', price: 500 },
//     { id: 4, name: 'clta', price: 600 },
//     { id: 5, name: 'mlta', price: 100 },

// ]
// const itemSumReducer = (previous, current) => previous + current.price;
// const itamTotal = items.reduce(itemSumReducer, 0)

const getTotalPrice = products => {
    const reducer = (previous, current) => previous + current.price;
    const total = products.reduce(reducer, 0);
    return total;
}





export { add, multiply, getTotalPrice as getTotal }
//ekadhik jinish export korar system