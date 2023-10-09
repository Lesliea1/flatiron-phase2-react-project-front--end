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

            <br></br>
            <br></br>
            <br></br>
            
            <h2 id="some-id3">Swedish Jul</h2>
          
            <img src="https://i0.wp.com/scandification.com/wp-content/uploads/2021/10/Swedish-Christmas-traditions-5-scaled.jpg?resize=1024%2C640&ssl=1"
                alt="Swedish snack" style={{ width: '480px', height: '380px' }} /> 
            <br></br>
              <br></br>
                <p>
                In Sweden, the prime holiday tradition centers
                in the celebration of Swedish Jul, which is the Swedish version
                Christmas. This festivity, which begins
                about four weeks prior to Christmas,
                starts with the lighting of the initial candle. This candle lighting commences a month-long
                festive season filled with
                unique beverages, festive games, and traditional snacks. Christmas in Sweden, is usually very dark and cold,
                so the festive season is a chance to bring some
                joy back into the people and spend important moments with family and friends.
            </p>
            <br></br>
              <br></br>
   
        </>
    )
}


export default HolidayList;