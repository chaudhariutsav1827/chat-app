import { Avatar, Box, Button, TextField } from "@mui/material"
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import LockIcon from '@mui/icons-material/Lock';
import FaceIcon from '@mui/icons-material/Face';
import { useRef } from "react";



const styles = {
    input: {
        color: "#2f2b40"
    }
}

const RegisterDiv = () => {
    const userName = useRef<HTMLInputElement>(null)
    const phoneNumber = useRef<HTMLInputElement>(null)
    const password = useRef<HTMLInputElement>(null)

    const register = () => {
        console.log(userName.current?.value)
        console.log(phoneNumber.current?.value)
        console.log(password.current?.value)
    }

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
                <TextField inputRef ={password} InputLabelProps={{ style: styles.input }} type="password" label="Password" variant="standard" />
            </Box>
            <Button
                sx={{
                    backgroundImage: 'linear-gradient(to right, #420223, #6b7fde)',
                    borderRadius: '0.8em',
                    border: 'none',
                    marginTop: 2,
                    marginBottom: 2,
                }} variant="contained" onClick={register}>Create Account</Button>
        </Box>
    )
}

export default RegisterDiv