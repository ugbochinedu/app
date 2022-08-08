import React from 'react';
import './NewFormModal.css';

function NewFormModal() {
    return (
        <form>
            <div  className='account-container'>
               <div className='account-box'>
                     <p>EDIT BANK INFORMATION</p>
                    <div className='account_form'>
                        <div className="">
                            <input type="text" placeholder='Bank Name' />
                        </div>
                        <div className="">
                            <input type="text"  placeholder='Account Number'/>
                        </div>
                        <div className="">
                            <input type="text"  placeholder='Account Name' />
                        </div>
                        <div className="">
                            <input type="text"  placeholder='Bank Verification Number' />
                        </div>
                        <button className='form-button' type='submit'>Save on Change</button>
                    </div>  
               </div>
            </div>
        </form>
    );
};

export default NewFormModal;