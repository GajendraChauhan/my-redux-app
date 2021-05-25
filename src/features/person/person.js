import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewPErson } from './personSlice';
import { useHistory } from 'react-router-dom';

export function Person(){
    let history = useHistory();
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [details, setDetails] = useState("");
    const dispatch = useDispatch();

    const addNewPerson = (e) => {
        e.preventDefault();
        const newPerson = {
            fullName: fullName,
            email: email,
            contactNumber: contactNumber,
            details: details
        };
        dispatch(addNewPErson(newPerson));
        history.push('/display');
    };

    return <> <h1>Form</h1>
        <form onSubmit={(e) => addNewPerson(e)} autoComplete="off">
            <div>
                <label htmlFor="fullName">Full Name</label><br/>
                <input type="text" id="fullName" 
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)} /><br/>
            </div>
            <div>
                <label htmlFor="email">Email</label><br/>
                <input type="text" id="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} /><br/>
            </div>
            <div>
                <label htmlFor="contactNumber">Contact Number</label><br/>
                <input type="text" id="contactNumber" 
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)} /><br/>
            </div>
            <div>
                <label htmlFor="details">About Me</label><br/>
                <textarea type="text" id="details" 
                    rows="5" cols="40"
                    value={details}
                    onChange={(e) => setDetails(e.target.value)} /><br/>
            </div>
            <button type="submit" value="submit">Submit Form</button>
        </form>
    </>;
}