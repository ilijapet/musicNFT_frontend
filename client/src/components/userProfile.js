import React, {useState, useEffect} from "react";
import CryptoUser from "./cryptoUser";
import CreditCardUser from "./creditCardUser";
import Dashboard from "./dashboard/dashboard";

import axiosInstance from "../axios";

// JWT token
import { jwtDecode } from "jwt-decode";


function UserProfile() {
    const [userStatus, setStatus] = useState(null);
    const token =  localStorage.getItem('access_token')
    const decoded = jwtDecode(token);

    // Read from database status of login user
    const getUserStatus = async () => {
        try {
            const res = await axiosInstance.post('userStatus/', {
                user_id: decoded["user_id"],
            });
            console.log(res);
            setStatus(res.data["user_id"]); // Set the state here
        } catch (error) {
            console.error('There was an error!', error.res.data);
            alert('There was an error!');
        }
    };

    
    // Turn on later on
    // useEffect(() => {
    //         getUserStatus();
    //     }, []); 



    if (true) {
        return (
            // <CryptoUser />
            <Dashboard />
        )
    } else {
        return (
            <CreditCardUser />
        )
    }
    

}



export default UserProfile;