import React from "react";
import "./NewStreetModal.css"

function NewStreetModal() {
   return(
    <form>
        <div className="street-form ">
           <div className="street-form-box">
                <p> STREET NAME</p>
                <div className="account-input">
                    <input type="text" className='input' placeholder='Street Name' />
                </div>
                <button type='submit' className='street-button'>Save Changes</button>
            </div>
        </div>
    </form>
   );
};

export default NewStreetModal;