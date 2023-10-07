//FoodList

import { useEffect, useState } from "react";


const FoodList = () => {

    const foods = `Peanuts from origin`

    useEffect(() => {
        const fetchFood = async () => {

            const url = `http://localhost:3000/foodFacts`;

            try {
                const response = await fetch(url);
                const jsonData = await response.json();
                console.log(jsonData)
                return jsonData
            } catch (error) {
                console.error("Error occurred when fetching data", error);
                return null;
            }
        };

        fetchFood();
    }, []);

        
    return (
        <>
            <h1>What do you already know about your food?</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Country Origin</th>
                        <th>Ingredients</th>
                        <th>Packaging</th>
                    </tr>
                </thead>
                <tbody>
                    {foods}
                </tbody>
            </table>
                <p>
                    some text
                </p>
                
        </>
    )
}


export default FoodList;