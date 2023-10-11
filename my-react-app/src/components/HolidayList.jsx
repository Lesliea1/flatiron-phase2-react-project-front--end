import { useEffect, useState } from "react";
import '../styles/HolidayList.css'
import HolidayForm from "./HolidayForm";

const HolidayList = ({addHoliday}) => {
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
    }, [holidays]);

    const renderedHolidays = holidays.map((holiday) => (

       <tr key={holiday._id}>
           
            <td >{holiday.date}</td> 
            <td >{holiday.localName}</td> 
            <td >{holiday.global}</td> 
            <td >{holiday.name}</td> 
            <td>{holiday.launchYear}</td> 
            <td >{holiday.types}</td> 
               
        </tr>
    ))

        
    return (
        <>
         <div className="holiday-list-container">
                <h2 className="holiday-list-title" id="some-id2">Holidays Celebrated in Sweden</h2>
                 <HolidayForm addHoliday={addHoliday} />
            <table className="holiday-table">
                <thead>
                    <tr>
                        <th >Date</th> 
                        <th>Local Name</th> 
                        <th >Global?</th> 
                        <th >Name</th> 
                        <th>Launch</th> 
                        <th >Accessibility</th> 
                    </tr>
                </thead>
                <tbody>
                    {renderedHolidays}
                </tbody>
            </table>

            <div className="holiday-line2"></div>
            
            <h2 className="holiday-title" id="some-id3">Swedish Jul</h2>
          
            <img className="holiday-image" src="https://i0.wp.com/scandification.com/wp-content/uploads/2021/10/Swedish-Christmas-traditions-5-scaled.jpg?resize=1024%2C640&ssl=1"
                alt="Swedish snack" /> 
            
                <p className="holiday-text">
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
             <div className="holiday-line2"></div>
   </div>
        </>
    )
}


export default HolidayList; 