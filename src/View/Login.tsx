import { Container } from "@mui/material"
import LoginDiv from "../components/LoginDiv"

const Login = () => {

    return (
        <Container
            sx={{
                backgroundImage: 'linear-gradient(to bottom right, #241031, #9a9bc5)',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }} maxWidth={false}>
            <LoginDiv />
        </Container >
    )
}

export default Login