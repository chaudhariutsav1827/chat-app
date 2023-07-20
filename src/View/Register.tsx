import { Container } from "@mui/material"
import RegisterDiv from "../components/RegisterDiv/RegisterDiv"

const Register = () => {
    return(
        <Container
            sx={{
                backgroundImage: 'linear-gradient(to bottom right, #241031, #9a9bc5)',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }} maxWidth={false}>
            <RegisterDiv />
        </Container >
    )
}

export default Register