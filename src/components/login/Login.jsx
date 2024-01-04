import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../store/userSlice";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../store/authSlice";
import { Box, Button, CircularProgress, TextField } from "@mui/material";
import { ErrorStyled, FormStyled } from "./Login.styled";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const users = useSelector((state) => state.user.data);
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userToLogin = users.find((user) => user.email === email);

        if (!userToLogin) {
            setError("Usuario no encontrado")
        } else {
            if (userToLogin.password === password) {
                dispatch(loginUser(userToLogin))
                navigate("/dashboard")
                setIsLoading(true)
            } else {
                setError("Contraseña incorrecta");
            }
        }
    };

    return (
        <Box sx={{ width: "300px", margin: "5rem auto", padding: "1rem", borderRadius: "5px" }}>
            <FormStyled onSubmit={handleSubmit}>
                <TextField
                    size="small"
                    id="email"
                    label="correo"
                    variant="outlined"
                    type="email"
                    sx={{ width: "100%", marginBottom: "1rem" }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <TextField
                    size="small"
                    id="password"
                    label="contraseña"
                    variant="outlined"
                    type="password"
                    sx={{ width: "100%", marginBottom: "1rem" }}
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <Button type="submit">Iniciar sesión</Button>

                {isLoading && <CircularProgress />}
                {error && <ErrorStyled>{error}</ErrorStyled>}
            </FormStyled>
        </Box>
    );
};

export default Login;