import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, useMediaQuery } from "@mui/material"
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

type sidebarProps = {
    state:boolean,
    toggleSidebar : (open:boolean)=>void
}

export const Sidebar = (props:sidebarProps) => {
    const matches = useMediaQuery('(max-width:600px)');

    const list = () => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={()=>{props.toggleSidebar(false)}}
            onKeyDown={()=>{props.toggleSidebar(false)}}
        >
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
    return (
        <Box sx={{ position: 'sticky', left: 0, top: 0, overflowY:'auto', backgroundColor:'azure'}} >
            {!matches && list()}
            {matches && <Drawer
                anchor={'left'}
                open={props.state}
                onClose={()=>{props.toggleSidebar(false)}}>
                {list()}
            </Drawer>
            }
        </Box>
    )
}