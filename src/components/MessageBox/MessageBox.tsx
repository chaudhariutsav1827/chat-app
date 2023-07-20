import { Box, IconButton, TextField } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';

import { MessageList } from "../MessageList/MessageList"

export const MessageBox = () => {

    return (
        <Box sx={{
            flexGrow: 1,
            bgcolor: 'grey.100',
            color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
            backgroundColor: 'white',
            borderColor: 'grey.300',
            padding: '20px',
            marginBottom: 0,
            overflowY: 'auto',
            position: 'relative',
        }}>
            <MessageList />
            <Box sx={{
                position: "absolute",
                display: "flex",
                width: '90%',
                bottom: 0,
                paddingTop: '8px',
                paddingBottom: '8px',
                paddingLeft: '16px',
                paddingRight: '16px',
                backgroundColor: "#FFFFFF",
            }}>
                <TextField
                    id="outlined-textarea"
                    label="Multiline Placeholder"
                    placeholder="Placeholder"
                    multiline
                    sx={{ flexGrow: 1}} // Added fullWidth to ensure the TextField takes up all available space
                />
                <IconButton sx={{ borderRadius: '50%', backgroundColor: '#5196d9', marginLeft: 2 }} aria-label="send">
                    <SendIcon fontSize="large" />
                </IconButton>
            </Box>
        </Box>
    )
}