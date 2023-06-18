import { Avatar, Box, Button, TextField } from "@mui/material"
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import LockIcon from '@mui/icons-material/Lock';

const styles = {
    input: {
        color: "#2f2b40"
    }
}

const LoginDiv = () => {
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
                <ContactPhoneIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField InputLabelProps={{ style: styles.input }} label="Phone Number" variant="standard" />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', margin: 2 }}>
                <LockIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField InputLabelProps={{ style: styles.input }} type="password" label="Password" variant="standard" />
            </Box>
            <Button
                sx={{
                    backgroundImage: 'linear-gradient(to right, #420223, #6b7fde)',
                    borderRadius: '0.8em',
                    border: 'none',
                    marginTop: 2,
                    marginBottom: 2,
                }} variant="contained">Login</Button>
        </Box>
    )
}

export default LoginDiv