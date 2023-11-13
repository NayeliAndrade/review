import { Grid, Typography, Box } from "@mui/material";
import { ImgStyled } from "./HomePage.styled";

const HomePage = () => {
    return (
        <Box
            display="flex"
            alignItems="center"
            height="80vh"
        >
            <Grid container spacing={2}>
                <Grid item xs={12} sm>
                    <Typography variant="h4">Bienvenido a Opina y Comparte: Tu Plataforma de Productos</Typography>
                    <Typography variant="h6" component="p">
                        La aplicación permite a los usuarios expresar sus opiniones y compartir sus productos.
                        Pueden dejar comentarios en los productos existentes y también subir sus propios productos para que otros usuarios los vean y comenten.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm>
                    <ImgStyled src="assets/hablando.jpg" alt="" />
                </Grid>
            </Grid>
        </Box>
    );
}

export default HomePage;
