import React from "react";
import "./MyAccount.css"

function MyAccount(params) {
    return(
       <div className="full-account-wrapper">
            <div className="accountdetails-flex">
                <div className="bankaccount-container size-all">
                    <div className="flex-me">
                        <p className="account-text">Bank Account</p>
                        <div><button type="button" className="edit-button">Edit</button></div>
                    </div> 
                    <div className="account-text">
                        <p className="account-text transform-text">NANE OF BANK</p>
                    </div>
                    <div>
                        <p className="account-text">1234 1234 1234 1234</p>
                    </div>
                </div>
           
                <div className="profile-active-container size-all">
                    <div className="flex-me">
                        <div><p className="account-text">Profile</p></div>
                        <div><p className="account-text active">Active</p></div>
                    </div>              
                    <div>
                        <p className="account-text transform-text">BEACH WOOD ESTATE</p>
                    </div>
                    <div className="location-detail">
                        <p className="account-text ">Location:</p>
                        <p className="account-text ">address details from client</p>
                    </div>
                </div>
           
                <div className="profile-container size-all">
                    <div className="flex-me">
                        <div><p className="account-text">Profile</p> </div> 
                        
                    </div>
                    <div>
                        <div><p className="account-text location-text">Office Email:</p></div>
                        <p className="account-text location-text">Client's email address</p>
                    </div>
                    <div>
                        <div className="account-text location-text"><p>Contant:</p></div>
                        <div className="account-text location-text"><p>client's phone number</p></div>
                    </div>            
                </div>      
            </div> 

            <div className="add-street-flex">
                <div><button className="add-street-button">+Add Street</button></div> {/*the couldn't add the plus icon */}
                <div><input className="add-street-input" placeholder="Search"></input></div>
            </div>
            <div className="street-details-flex">
                <div className="street-details-grid">
                    <div className="street-details-added">
                        <div className="street-circle">18</div>
                        <div className="passed-street-name">Bajoga Street </div>
                    </div>
                    <div className="street-details-added">
                        <div className="street-circle">18</div>
                        <div className="passed-street-name">Bajoga Street </div>
                    </div>
                    <div className="street-details-added">
                        <div className="street-circle">18</div>
                        <div className="passed-street-name">Bajoga Street </div>
                    </div>
                    <div className="street-details-added">
                        <div className="street-circle">18</div>
                        <div className="passed-street-name">Bajoga Street </div>
                    </div>
                    <div className="street-details-added">
                        <div className="street-circle">18</div>
                        <div className="passed-street-name">Bajoga Street </div>
                    </div>
                    <div className="street-details-added">
                        <div className="street-circle">18</div>
                        <div className="passed-street-name">Bajoga Street </div>
                    </div>
                    <div className="street-details-added">
                        <div className="street-circle">18</div>
                        <div className="passed-street-name">Bajoga Street </div>
                    </div>
                    <div className="street-details-added">
                        <div className="street-circle">18</div>
                        <div className="passed-street-name">Bajoga Street </div>
                    </div>
                    <div className="street-details-added">
                        <div className="street-circle">18</div>
                        <div className="passed-street-name">Bajoga Street </div>
                    </div>
                </div>
            </div>
        </div>
    );   
};

export default MyAccount;