import { Box, Container, ThemeProvider, createTheme } from "@mui/material"
import Sidebar from '../components/Sidebar';
import { Header } from '../components/Header';
import { MessageList } from '../components/MessageList';
import { useState } from "react";

const theme = createTheme({
    components: {
        MuiContainer: {
            styleOverrides: {
                root: {
                    '@media (min-width: 600px)': {
                        paddingLeft: 0,
                        paddingRight: 0,
                    },
                    padding: 0,
                    height: '100vh',
                    backgroundColor: 'purple',
                },
            },
        },
    },
});

const Index = () => {
    const [sidebarState, setSidebarState] = useState(false);

    const toggleSidebar =
        (open: boolean) => {
            setSidebarState(open);
        };

    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth={false} >
                <Header toggleSidebar={toggleSidebar} />
                <Box sx={{ display: 'flex', height: '100vh', backgroundColor: 'blue' }}>
                    <Sidebar state={sidebarState} toggleSidebar={toggleSidebar} />
                    <Box sx={{
                        flexGrow: 1,
                        bgcolor: 'grey.100',
                        color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
                        backgroundColor: 'white',
                        borderColor: 'grey.300',
                        padding: '16px',
                        overflowY: 'auto',
                        position: 'fixed',
                        top: 64,
                        bottom: 0,
                        left: 250,
                        right: 0
                    }}>
                        <MessageList />
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    )
}

export default Index