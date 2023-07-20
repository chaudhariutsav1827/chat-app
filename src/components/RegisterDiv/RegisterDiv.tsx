import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, Box, Button, TextField, Snackbar, Alert, AlertColor } from "@mui/material"
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import LockIcon from '@mui/icons-material/Lock';
import FaceIcon from '@mui/icons-material/Face';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { register } from "../../services/userServices";
import { user } from "../../Type";



const styles = {
    input: {
        color: "#2f2b40"
    }
}

const RegisterDiv = () => {
    const userName = useRef<HTMLInputElement>(null)
    const phoneNumber = useRef<HTMLInputElement>(null)
    const password = useRef<HTMLInputElement>(null)
    const [openToast, setOpentoast] = useState(false)
    const [toastType, settoastType] = useState<AlertColor>("success")
    const [toastMessage, settoastMessage] = useState("")

    const navigate = useNavigate()

    const registerUser = () => {
        const Name = userName.current?.value;
        const Phone = phoneNumber.current?.value;
        const Pass = password.current?.value;
        if (Name && Phone && Pass) {
            const user: user = {
                UserId: 0,
                UserName: Name.trim(),
                PhoneNumber: Phone.trim(),
                Password: Pass.trim()
            }
            register(user, navigate, showToast)
        }
        else {
            toast.warning("Please fill the required fields");
            // showToast(true, "warning", "Please fill the required fields")
        }
    }

    const showToast = (state: boolean, type: AlertColor, message: string) => {
        setOpentoast(state)
        settoastType(type)
        settoastMessage(message)
    }

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpentoast(false);
    };

    return (
        <Box component="form" autoComplete="off"
            sx={{
                p: 2,
                display: 'flex',
                backgroundImage: 'linear-gradient(to bottom right, #452251, #acc1fa)',
                borderRadius: '2em',
                flexDirection: 'column',
                justifyContent: 'center',
                '& > *': {
                    margin: 1
                },
            }} width={300}>
            <Avatar
                sx={{
                    width: 100,
                    height: 100,
                    backgroundImage: 'linear-gradient(to right, #420223, #6b7fde)',
                    color: '#ac6d78',
                    margin: 'auto',
                }} />
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', margin: 2 }}>
                <FaceIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField inputRef={userName} InputLabelProps={{ style: styles.input }} label="Username" variant="standard" />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', margin: 2 }}>
                <ContactPhoneIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField inputRef={phoneNumber} InputLabelProps={{ style: styles.input }} label="Phone Number" variant="standard" />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', margin: 2 }}>
                <LockIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField inputRef={password} InputLabelProps={{ style: styles.input }} type="password" label="Password" variant="standard" />
            </Box>
            <Button
                sx={{
                    backgroundImage: 'linear-gradient(to right, #420223, #6b7fde)',
                    borderRadius: '0.8em',
                    border: 'none',
                    marginTop: 2,
                    marginBottom: 2,
                }} variant="contained" onClick={registerUser}>Create Account</Button>
            <Snackbar open={openToast} autoHideDuration={4000}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                onClose={handleClose}>
                <Alert onClose={handleClose} severity={toastType} sx={{ width: '100%' }}>
                    {toastMessage}
                </Alert>
            </Snackbar>
        </Box>
    )
}

export default RegisterDiv