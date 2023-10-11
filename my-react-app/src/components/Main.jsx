import HolidayList from "./HolidayList"
import '../styles/Main.css'

const Main = () => {
    return (
        <>
            
        
            <main className="main-container" id="some-id1" >
                <div className="main-line1"></div>
                <h2 className="main-title">Sweden Local Traditions</h2>
                <img className="main-image" src="https://i0.wp.com/scandification.com/wp-content/uploads/2021/09/Swedish-Holidays-1-scaled.jpg?resize=1155%2C770&ssl=1"
                    alt="Swedish dancing women" />
                

                <p className="main-text">
                    Swedish locals known to be cultured and festive,
                    partipate in the numerous yearly festivities. Many of these
                    holidays are referred to as red days, due to swedish people using this
                    as a signal to mark off in their calendars.
                    Some of these popular days are common all around the world, like Christmas, and Easter.
                    While others are not as common, such as Ascension, Midsummer, and Swedish National Day.
                    Sweden native are big on their festives, so it’s common for celebrations to begin the day before the official festivities.
                    An example of this is how many businesses close at lunch time so employees
                    can go home to prepare for the festivities.
                    Let's explore some of the common holidays below!
                </p>
                
                 <div className="main-line2"></div>
            
                <HolidayList/>
               
        
            </main> 
           
        </>
    )
}


export default Main;