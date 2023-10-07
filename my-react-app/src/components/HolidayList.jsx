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
            <td style={{ padding: '10px' }}>{holiday.date}</td> 
            <td style={{ padding: '10px' }}>{holiday.localName}</td> 
            <td style={{ padding: '10px' }}>{holiday.global}</td> 
            <td style={{ padding: '10px' }}>{holiday.name}</td> 
           <td style={{ padding: '10px' }}>{holiday.launchYear}</td> 
            <td style={{ padding: '15px' }}>{holiday.types}</td> 
        </tr>
    ))

        
    return (
        <>
        
            <h2 id="some-id2">Holidays Celebrated in Sweden</h2>
            <table>
                <thead>
                    <tr>
                        <th style={{ padding: '10px' }}>Date</th> 
                        <th style={{ padding: '10px' }}>Local Name</th> 
                        <th style={{ padding: '10px' }}>Global?</th> 
                        <th style={{ padding: '10px' }}>Name</th> 
                        <th style={{ padding: '10px' }}>Launch</th> 
                        <th style={{ padding: '10px' }}>Accessibility</th> 
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