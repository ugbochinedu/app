import React from "react";
import "./Residence.css"


function Residence(params) {
    return(
       <div>
            <div className="residence_container">
                <div className="button_search_flex">
                    <div className="button_container_flex">
                        <div className="button_flex">                        
                            <button className="button_house">House</button>                                          
                            <button className="button_apartment">Apartments</button>                                             
                        </div>
                        <div>
                            <p className="total_houses">2,517<span className="span_house">Houses</span></p>
                        </div>
                    </div>
                    <div>
                        <input placeholder="Search" className="residence_search"></input>
                    </div>
                </div>
                <div className="house-property-box">
                    <div className="checkbox-houses">                       
                        <input type="checkbox"/>                       
                        <div>
                            <p className="houses-text">Houses</p>
                        </div>
                    </div>
                    <div className="property-occupant">
                        <div >
                            <p className="property-text">Property Type</p>
                        </div>
                        <div>
                            <p className="occupants-text">Occupants</p>
                        </div>
                    </div>
                </div>
                <div className="address-property-box">
                    <div className="checkbox-address">                       
                        <input type="checkbox"/>
                        <div>
                            <img src="/Images/pic1.png" alt=""/>
                        </div>
                        <div>
                            <p className="houses-text">7, awka road, Beechwood Estate, Gbogije</p>
                        </div>
                    </div>
                    <div className="property-occupant">
                        <div >
                            <p className="property-text">Residential</p>
                        </div>
                        <div>
                            <img src="/images/pix.png" className="images-occupant" alt=""/>
                            <img src="/images/pix2.png" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="group-from-house">
                    <div className="text-button-box">
                        <div >
                            <p className="group-house-text">Create a group from the 255 houses selected</p>
                        </div>
                        <div>
                            <button className="create-group-button">+ Create Group</button>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    );
};

export default Residence;