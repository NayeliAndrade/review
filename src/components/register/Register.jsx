import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid"
import { useNavigate } from "react-router-dom";
import { postUser } from "../../store/userSlice";
import { Box, Button, TextField, Typography } from "@mui/material";

const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()
    const id = uuidv4()
    const navigate = useNavigate()

    const handleSumbit = (e) => {
        e.preventDefault()
        const newUser = {
            id, name, email, password
        }

        dispatch(postUser(newUser));

        setName("");
        setEmail("");
        setPassword("");
        navigate("/login");
    }


    return (
        <Box sx={{ width: "300px", margin: "5rem auto", padding: "1rem", borderRadius: "5px" }}>

            <FormStyled onSubmit={handleSumbit}>
                <TextField
                    size="small"
                    label="Nombre"
                    variant="outlined"
                    type="text"
                    sx={{ width: "100%", marginBottom: "1rem" }}
                    name="name"
                    id="name"
                    onChange={e => setName(e.target.value)}
                    required
                />
                <TextField
                    size="small"
                    label="Correo"
                    variant="outlined"
                    type="email"
                    sx={{ width: "100%", marginBottom: "1rem" }}
                    name="email"
                    id="email"
                    onChange={e => setEmail(e.target.value)}
                    required
                />
                <TextField
                    size="small"
                    label="Contraseña"
                    variant="outlined"
                    sx={{ width: "100%", marginBottom: "1rem" }}
                    type="password"
                    name="password"
                    id="password"
                    onChange={e => setPassword(e.target.value)}
                    required
                />
                <Button type="submit">Registrarse</Button>
            </FormStyled>
            <Typography>Una vez que te hayas registrado, inicia sesión</Typography>
        </Box>
    );
}

export default Register;