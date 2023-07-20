import { AlertColor } from "@mui/material"
import { toast } from "react-toastify";

import { user, error } from "../Type"

const baseUrl = 'https://localhost:44359/api/Account'
const postApiHeader = {
    'method': 'POST',
    'headers': { 'Content-Type': 'application/json' }
}
const phoneRegex = /^\d{10}$/; 
const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/;

const register = async (user: user,
                        callback: (navigateTo: string) => void,
                        stoast: (state: boolean,
                                type: AlertColor,
                                message: string) => void) => {

    const isPhoneValid = phoneRegex.test(user.PhoneNumber);
    if(!isPhoneValid){
        toast.warning("Enter valid phone number");
        stoast(true, "error", "Enter valid phone number")
        return
    } 
    
    const isPasswordValid = passwordRegex.test(user.Password);
    if(!isPasswordValid){
        toast.warning("Enter valid password")
        stoast(true, "error", "Enter valid password")
        return
    } 

    const response = await fetch(`${baseUrl}/Register`, {
        ...postApiHeader,
        body: JSON.stringify(user)
    })
    if (response.status != 400) {
        callback("/")
        toast.success("Enter valid password");
        stoast(true, "success", "Registered Successfully");
    }
    else {
        const result: error[] = await response.json();
        result.map((error)=>{
            toast.error(error.errorMessage);
        })
        // stoast(true, "error", result[0].errorMessage);
    }
}


const upsertUser = async (userId: number) => {
    const connectionId = sessionStorage.getItem('connectionId')
    const user = {
        userId: userId,
        connectionId: connectionId
    }
    const response = await fetch(`${baseUrl}/UpsertUser`, {
        ...postApiHeader,
        body: JSON.stringify(user)
    })
    if (response.status == 400) {
        const result = await response.json()
        console.log(result);
    }
}

export {
    register,
    upsertUser
}