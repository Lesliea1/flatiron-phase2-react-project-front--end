//FoodList

import { useEffect } from "react";

const FoodList = () => {
    
    const foods = `Peanuts from origin`

    
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