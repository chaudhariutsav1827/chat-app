import { AppBar, Box, IconButton, Toolbar, Typography, Button, useMediaQuery } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';

type headerProps = {
    toggleSidebar: (open: boolean) => void
}

export const Header = (props: headerProps) => {

    const matches = useMediaQuery('(max-width:600px)');

    return (
        <Box sx={{ flexGrow: 1 ,position:'sticky', zIndex: 10, top:'0'}}>
            <AppBar position="static" sx={{ boxShadow: 'none' }}>
                <Toolbar >
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={() => { props.toggleSidebar(true) }}
                    >
                        {matches && <MenuIcon />}
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Chat
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}