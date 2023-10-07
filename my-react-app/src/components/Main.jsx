import HolidayList from "./HolidayList"

const Main = () => {
    return (
        <>
        
            <main id="some-id1" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <h2>Sweden Local Traditions</h2>
                <img src="https://i0.wp.com/scandification.com/wp-content/uploads/2021/09/Swedish-Holidays-1-scaled.jpg?resize=1155%2C770&ssl=1"
                    alt="Swedish dancing women" style={{ width: '280px', height: '280px' }} />
                
<br></br>
                <p >
                    Swedish locals known to be cultured and festive at
                    heart. Many partipate in the numerous local festivities 
                    for the holidays, some of which can be found below. Let's 
                    explore!
                </p>
<br></br>
                <HolidayList/>
               
        
            </main> 
           
        </>
    )
}


export default Main;