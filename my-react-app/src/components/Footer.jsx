import '../styles/Footer.css'

const Footer = () => {
    return (
        <>
            <div className='footer-container'>
            <h2 className='footer-title' id="some-id4">Celebrating the Swedish Culture</h2>
                <img className='footer-image' src="https://i0.wp.com/scandification.com/wp-content/uploads/2021/09/Swedish-Holidays-7-scaled.jpg?resize=1024%2C640&ssl=1" alt="Sweden Statue" />
                
                <p className='footer-text'>
                    Swedish holidays provide a special opportunity to get a peek into
                    Swedish culture and get to know the people better. While some of the
                    important holidays in Sweden are like ours, the Swedish natives also
                    have their special customs that are interesting to explore.
                    In Sweden, people take their holidays quite seriously.
                    Public holidays come with a bunch of Swedish traditions that the locals strictly adhere to. Each day comes with its own set of things to do,
                    special foods to enjoy, and many other exciting customs. Explore your next
                    trip to Sweden around a festivity in mind!
                </p>
            </div>
             
            <nav className='footer-navLinks'>
                <div className="footer-line" ></div>
                    <ul>
                        <li><a href="#some-id1">Sweden Local Traditions</a></li>
                        <li><a href="#some-id2">Holidays Celebrated in Sweden</a></li>
                        <li><a href="#some-id3">Swedish Jul</a></li>
                        <li><a href="#some-id4">Celebrating the Swedish Culture</a></li>
                        <li><a href="#top">Go to top! </a></li>
                    </ul>
            </nav>
 
            <p className='footer-text2'>Copyright Avocado 2023</p>
        </>
    )
}


export default Footer;