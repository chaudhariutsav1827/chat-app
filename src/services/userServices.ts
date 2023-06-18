const baseUrl = 'https://localhost:44338/Chat'
const postApiHeader = {
    'method': 'POST',
    'headers': { 'Content-Type': 'application/json' }
}


const upsertUser = async (userId: number) => {
    const connectionId = sessionStorage.getItem('connectionId')
    const user = {
        userId: userId,
        connectionId: connectionId
    }
    const response = await fetch(`${baseUrl}/UpsertUser`, {
        ...postApiHeader,
        body:JSON.stringify(user)
    })
    if(response.status == 400){
        const result = await response.json()
        console.log(result);
    }
    
}