import React from "react";
import"./DeleteModal.css";

function DeleteModal(params) {
    
    return(
        <div className="deletemodal-container">
            <div >
                <p className="deletemodal-icon">x</p>     
                {/* please i used text x for the icon */}
            </div>
            <div >
                <p className="deletemodal-writeup">Are you sure you want to delete this group now?</p>
            </div>
            <div className="deletebutton-flex">
                <div >
                    <button className="deletebutton-cancel">Cancel</button>
                </div>
                <div>
                    <button className="deletebutton-delete">Delete</button>
                </div>
            </div>
        </div>
    );
}

export default DeleteModal;