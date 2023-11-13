import { useState } from "react";
import { useDispatch } from "react-redux";
import { postStuff } from "../../store/stuffSlice";
import { v4 as uuidv4 } from "uuid"
import { useNavigate } from "react-router-dom";
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";

const AddStuff = () => {
    const [title, setTitle] = useState("")
    //const [image, setimage] = useState(null)
    const [ranking, setRanking] = useState("")

    const dispatch = useDispatch()
    const id = uuidv4()
    const navigate = useNavigate()
    const image = "assets/camara.jpg"
    const handleSumbit = (e) => {
        e.preventDefault()
        const newStuff = {
            id, title, image, ranking
        }

        dispatch(postStuff(newStuff))

        setTitle("");
        //setimage(null);
        setRanking("");
        navigate("/dashboard")
        console.log("sd");
    }
    const options = [1, 2, 3, 4, 5]

    return (
        <Box sx={{ width: "300px", margin: "5rem auto", padding: "1rem", border: "1px solid #ccc", borderRadius: "5px" }}>
            <form onSubmit={handleSumbit}>
                <Typography variant="h5" sx={{ fontWeight: "bold", padding: ".5rem", marginBottom: "1rem" }}>Agrega Producto Nuevo</Typography >
                <TextField size="small" id="outlined-basic" label="Nombre del producto" variant="outlined" type="text" sx={{ width: "100%", marginBottom: "1rem" }} value={title} onChange={e => setTitle(e.target.value)} required />
                {/* <input type="file" onChange={e => setimage(e.target.files[0])} required /> */}

                <FormControl fullWidth size="small" sx={{ marginBottom: "1rem" }}>
                    <InputLabel id="ranking-label">Elige una opción</InputLabel>
                    <Select
                        labelId="ranking-label"
                        id="ranking"
                        value={ranking}
                        onChange={(e) => setRanking(e.target.value)}
                        required
                    >
                        <MenuItem value="">
                            <em>Elige una opción</em>
                        </MenuItem>
                        {options.map((option, index) =>
                            <MenuItem key={index} value={option}>
                                {option}
                            </MenuItem>
                        )}
                    </Select>
                </FormControl>

                <Button type="submit">Agregar</Button>
            </form>
        </Box>
    );
}

export default AddStuff;
