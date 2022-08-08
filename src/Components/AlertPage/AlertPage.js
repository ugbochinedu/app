import React from "react";
import "./Alertpage.css"

function AlertPage(params) {
    return(
        <div className="alert-page-container">
           <div className="notification-flex">
                <p className="notification">Notifications</p>
                <div>
                    <input placeholder="Search" className="residence_search"></input>
                </div>
           </div>
           <div className="alert-details-flex">
                <div className="house-address-flex">
                    <img src="/Images/pic1.png" alt="" className="alert-img"/>
                    <p className="alert-text">7, awka road, Beechwood Estate, Gbogije</p>
                </div>
                <div className="alert-name">
                    <p className="alert-text">Tayo Johnson</p>
                </div>
                <div className="alert-phone">
                    <p className="alert-text">0819997654</p>
                </div>
                <div className="alert-name">
                    <p className="alert-text">Tayo Johnson</p>
                </div>
                <div className="alert-button">
                    <button className="confirm-alert">Confirm</button>
                    <button className="decline-alert">Decline</button>
                </div>
           </div>
        </div>
    );
};

export default AlertPage;