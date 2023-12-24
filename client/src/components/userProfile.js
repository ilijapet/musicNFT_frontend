import React, {useState, useEffect} from "react";
import CryptoUser from "./cryptoUser";
import CreditCardUser from "./creditCardUser";
import Dashboard from "./dashboard/dashboard";

import axiosInstance from "../axios";


function UserProfile() {
    
    const [paymentType, setPaymentType] = useState(null);

    const getUserStatus = async () => {
        try {
            const res = await axiosInstance.get('user/userStatus/');
            console.log(res);
            setPaymentType(res.data["payment_type"]); // Set the state here
        } catch (error) {
            console.error('There was an error!', error);
            alert('There was an error!');
        }
    };
    
    useEffect(() => {
            getUserStatus();
        }, []); 


        return (
            <Dashboard  paymentType={paymentType} />
        )
}



export default UserProfile;