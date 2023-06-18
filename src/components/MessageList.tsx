import { Box, List, ListItem, Typography } from "@mui/material"

const messages = [
    { id: 1, sender: 'John', content: 'Hello!', timestamp: '10:00 AM' },
    { id: 2, sender: 'Alice', content: 'Hi there!', timestamp: '10:01 AM' },
    { id: 3, sender: 'John', content: 'How are you?', timestamp: '10:02 AM' },
];

export const MessageList = () => {
    return (
        <List>
            {messages.map((message) => (
                <ListItem
                    key={message.id}
                    alignItems="flex-start"
                    sx={{
                        flexDirection: message.sender === 'John' ? 'row' : 'row-reverse',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: message.sender === 'John' ? 'flex-start' : 'flex-end',
                            width: '100%',
                        }}
                    >
                        <Typography
                            variant="subtitle1"
                            fontWeight="bold"
                            sx={{ mb: 0.5, color: 'black' }}
                        >
                            {message.sender}
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 0.5, color: 'black' }}>
                            {message.content}
                        </Typography>
                        <Typography variant="caption" color="textSecondary" sx={{ fontSize: 12 }}>
                            {message.timestamp}
                        </Typography>
                    </Box>
                </ListItem>
            ))}
        </List>
    )
}