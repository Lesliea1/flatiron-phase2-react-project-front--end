//FoodList

import { useEffect, useState} from "react";


const HolidayList = () => {

    const [holidays, setHolidayList] = useState([]);

    useEffect(() => {
        
        const fetchHolidays = async () => {

            const url = `http://localhost:3000/holidayList`;

            try {
                const response = await fetch(url)
                console.log(`response:`, response)
                const jsonData = await response.json();
                console.log(`jsonData:`, jsonData)
                setHolidayList(jsonData)
            } catch (error) {
                console.error("Error occurred when fetching data", error);
                return null;
            }
        };

        fetchHolidays();
    }, []);

    const renderedHolidays = holidays.map((holiday) => (

       <tr key={holiday._id}>
            <td>{holiday.date}</td>
            <td>{holiday.localName}</td>
            <td>{holiday.global}</td>
            <td>{holiday.name}</td>
           <td>{holiday.launchYear}</td>
            <td>{holiday.types}</td>
        </tr>
    ))

        
    return (
        <>
            <h2>Holidays celebrated in Sweden</h2>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Local Name</th>
                        <th>Global?</th>
                        <th>Name</th>
                        <th>Launch</th>
                        <th>Accessibility</th>
                    </tr>
                </thead>
                <tbody>
                    {renderedHolidays}
                </tbody>
            </table>
                <p>
                    some text
                </p>
                
        </>
    )
}


export default HolidayList;