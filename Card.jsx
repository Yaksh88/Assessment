import React from 'react'
import './Card.css';
import {Button} from "@material-ui/core";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';


const Card = () => {
    return (
        <div className="card">
            <div className="result ">
            <img className="logo" src="https://logos.skyscnr.com/images/airlines/favicon/WZ.png" alt=""/>
            <p>06:30</p>
            <p>08:30</p>
            <p className="time">2h 00</p>
            </div>
            <ArrowForwardIcon className="arrow"/> 
            <div className="location result">
                <p>EDI</p>
                <p>LHR</p>
                <p>Direct</p>
            </div>
            <div className="result">
            <img className="logo" src="https://logos.skyscnr.com/images/airlines/favicon/WZ.png" alt=""/>
            <p>14:30</p>
            <p>16:00</p>
            <p className="time">1h 30</p>
            </div>
            <div className="result">
               <p className="price">£98</p> 
               <Button variant="outlined" className="button">Select</Button>
            </div>
            
            <div> 
            <p className="light">wizzair.com</p>
            </div>
            <hr />
            <div className="result">
            <img className="logo" src="https://logos.skyscnr.com/images/airlines/favicon/BA.png" alt=""/>
            <p>06:30</p>
            <p>08:30</p>
            <p className="time">2h 00</p>
            </div>
            <ArrowForwardIcon className="arrow"/> 
            <div className="location result">
                <p>EDI</p>
                <p>LHR</p>
                <p>Direct</p>
            </div>
            <div className="result">
            <img className="logo" src="https://logos.skyscnr.com/images/airlines/favicon/BA.png" alt=""/>
            <p>14:30</p>
            <p>16:00</p>
            <p className="time">1h 30</p>
            </div>
            <div className="result">
               <p className="price">£98</p> 
               <Button variant="outlined" className="button">Select</Button>
            </div>
            <div> 
              
            <p className="light">British Airways</p>
            </div>
            <hr />
            <div className="result">
            <img className="logo" src="https://logos.skyscnr.com/images/airlines/favicon/LH.png" alt=""/>
            <p>06:30</p>
            <p>08:30</p>
            <p className="time">2h 00</p>
            </div>
            <ArrowForwardIcon className="arrow"/> 
            <div className="location result">
                <p>EDI</p>
                <p>LHR</p>
                <p>Direct</p>
            </div>
            <div className="result">
            <img className="logo" src="https://logos.skyscnr.com/images/airlines/favicon/LH.png" alt=""/>
            <p>14:30</p>
            <p>16:00</p>
            <p className="time">1h 30</p>
            </div>
            <div className="result">
               <p className="price">£98</p> 
               <Button variant="outlined" className="button">Select</Button>
            </div>
            
            <div> 
            <p className="light">Lufthansa</p>
            </div>
            <hr />
            <div className="result">
            <img className="logo" src="https://logos.skyscnr.com/images/airlines/favicon/WZ.png" alt=""/>
            <p>06:30</p>
            <p>08:30</p>
            <p className="time">2h 00</p>
            </div>
            <ArrowForwardIcon className="arrow"/> 
            <div className="location result">
                <p>EDI</p>
                <p>LHR</p>
                <p>Direct</p>
            </div>
            <div className="result">
            <img className="logo" src="https://logos.skyscnr.com/images/airlines/favicon/WZ.png" alt=""/>
            <p>14:30</p>
            <p>16:00</p>
            <p className="time">1h 30</p>
            </div>
            <div className="result">
               <p className="price">£98</p> 
               <Button variant="outlined" className="button">Select</Button>
            </div>
            
            <div> 
            <p className="light">Trip.com</p>
            </div>
            <hr />
            <div className="result">
            <img className="logo" src="https://logos.skyscnr.com/images/airlines/favicon/BA.png" alt=""/>
            <p>06:30</p>
            <p>08:30</p>
            <p className="time">2h 00</p>
            </div>
            <ArrowForwardIcon className="arrow"/> 
            <div className="location result">
                <p>EDI</p>
                <p>LHR</p>
                <p>Direct</p>
            </div>
            <div className="result">
            <img className="logo" src="https://logos.skyscnr.com/images/airlines/favicon/BA.png" alt=""/>
            <p>14:30</p>
            <p>16:00</p>
            <p className="time">1h 30</p>
            </div>
            <div className="result">
               <p className="price">£98</p> 
               <Button variant="outlined" className="button">Select</Button>
            </div>
            
            <div> 
            <p className="light">Trip.com</p>
            </div>
            <hr />
            <div className="result">
            <img className="logo" src="https://logos.skyscnr.com/images/airlines/favicon/LH.png" alt=""/>
            <p>06:30</p>
            <p>08:30</p>
            <p className="time">2h 00</p>
            </div>
            <ArrowForwardIcon className="arrow"/> 
            <div className="location result">
                <p>EDI</p>
                <p>LHR</p>
                <p>Direct</p>
            </div>
            <div className="result">
            <img className="logo" src="https://logos.skyscnr.com/images/airlines/favicon/LH.png" alt=""/>
            <p>14:30</p>
            <p>16:00</p>
            <p className="time">1h 30</p>
            </div>
            <div className="result">
               <p className="price">£98</p> 
               <Button variant="outlined" className="button">Select</Button>
            </div>
            <p className="light">Kiwi.com</p>
            
            
        </div>
        
    )
}

export default Card
