import React from "react";
import "./NewStreetModal.css"

function StreetNameModal() {
   return(
    <form>
        <div className="street-form ">
            <div className="street-form-box">
                <p>CREATE STREET NAME</p>
                <div className="account-input">
                    <input type="text" className='input' placeholder='Street Name' />
                </div>
                <button type='submit' className='street-button'>Create</button>
            </div>
        </div>
    </form>
   );
};

export default StreetNameModal;