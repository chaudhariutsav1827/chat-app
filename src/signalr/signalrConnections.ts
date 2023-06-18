import { HubConnectionBuilder } from "@microsoft/signalr";

const connection = new HubConnectionBuilder()
    .withUrl('https://localhost:44357/chatHub', { withCredentials: false })
    .build();

const startConnection = async () => {
    connection.start().then(() => {
        if (connection.connectionId)
            sessionStorage.setItem('connectionId', connection.connectionId);
    })
        .catch(error => {
            console.error('Error starting SignalR connection:', error)
        })
}


export {
    startConnection,
}