import React, { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';
// import add from '../Utilities/Calculate';
//eta default theke import korar system
import { add } from '../Utilities/Calculate';
//eta ekdhik export theke import korar system
//object hishebe pathale import evabe hbe 



const Cosmetics = () => {
    //kichu fake data banabo
    // const cosmetics = [
    //     { id: 1, name: 'alta', price: 300 },
    //     { id: 2, name: 'blta', price: 400 },
    //     { id: 3, name: 'nlta', price: 500 },
    //     { id: 4, name: 'clta', price: 600 },
    //     { id: 5, name: 'mlta', price: 100 },

    // ]
    // const cosmetics = [
    //     {
    //         "id": "62ee89fcdfee8ac55fe12ab0",
    //         "price": 369,
    //         "name": "Rowland Mason"
    //     },
    //     {
    //         "id": "62ee89fca466c28769447c4e",
    //         "price": 320,
    //         "name": "Christie Gonzales"
    //     },
    //     {
    //         "id": "62ee89fc521598a9eb90ad72",
    //         "price": 571,
    //         "name": "Payne Cole"
    //     },
    //     {
    //         "id": "62ee89fc95e435c83470b4a7",
    //         "price": 555,
    //         "name": "Haley Foster"
    //     },
    //     {
    //         "id": "62ee89fc17617f92c870bf0e",
    //         "price": 502,
    //         "name": "Keri Trujillo"
    //     }
    // ]

    //ekhn dekhbo json hishebe load korar upay eta way 3 
    const [cosmetics, setCosmetics] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCosmetics(data))
    }, [])
    const first = 55;
    const second = 66;
    const total = add(first, second)
    //add likhe kichu khon wait korlei export er option ashbe 
    return (
        <div>
            <h1>Welcome to my cosmetics store</h1>
            <p>total: {total}</p>
            {
                // cosmetics.map(cosmetic => console.log(cosmetic))
                // //for loop korar pore, inspact e data gula pachii
            }
            {
                cosmetics.map(cosmetic => <Cosmetic key={cosmetic.id}
                    cosmetic={cosmetic}
                >

                </Cosmetic>)
                //key na thakle error dibe, prottek ta cosmetic er modhe je id ache ota dibo key hishebe
                //for loop korar pore, inspact e data gula pachii
                //puro cosmetic take props hishebe pathalam
            }
        </div>
    );
};

export default Cosmetics;