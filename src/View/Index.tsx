import { Box, Container, ThemeProvider, createTheme } from "@mui/material"
import { useState } from "react";

import { Sidebar } from '../components/Sidebar/Sidebar';
import { Header } from '../components/Header/Header';
import { MessageBox } from "../components/MessageBox/MessageBox";

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
                <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <Header toggleSidebar={toggleSidebar} />
                    <Box sx={{ display: "flex", height: '100%', overflow:"hidden" }}>
                        <Sidebar state={sidebarState} toggleSidebar={toggleSidebar} />
                        <MessageBox />
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    )
}

export default Index