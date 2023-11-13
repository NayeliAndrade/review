import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { putStuff } from "../../store/stuffSlice";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";

const EditStuff = () => {
    const { id } = useParams()
    const stuff = useSelector((state) => state.stuff.data);
    const existingStuff = stuff.filter((stuffItem) => stuffItem.id == id);

    const { title, ranking } = existingStuff[0]
    const [editTitle, setEditTitle] = useState(title);
    //const [editImage, setEditImage] = useState(null);
    const [editRanking, setEditRanking] = useState(ranking)

    const dispatch = useDispatch();
    const navigate = useNavigate()


    const handleUpdate = (e) => {
        e.preventDefault()
        const updateItem = {
            id: id,
            title: editTitle,
            image: "assets/pelota.jpg",
            ranking: editRanking
        }
        dispatch(putStuff(updateItem))
        navigate("/dashboard")
    }
    const options = [1, 2, 3, 4, 5]
    return (
        <Box sx={{ width: "300px", margin: "5rem auto", padding: "1rem", border: "1px solid #ccc", borderRadius: "5px" }}>
            <form onSubmit={handleUpdate}>
                <Typography variant="h5" sx={{ fontWeight: "bold", padding: ".5rem", marginBottom: "1rem" }}>Editar producto</Typography >
                <TextField sx={{ marginBottom: "2rem" }} fullWidth id="outlined-basic" variant="outlined" size="small" value={editTitle} onChange={e => setEditTitle(e.target.value)} />
                {/*  <input type="file" onChange={e => setEditImage(e.target.files[0])} /> */}
                <FormControl fullWidth size="small" sx={{ marginBottom: "1rem" }}>
                    <InputLabel id="ranking-label">Elige una opción</InputLabel>
                    <Select
                        labelId="ranking-label"
                        id="ranking"
                        value={editRanking}
                        onChange={(e) => setEditRanking(e.target.value)}
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


export default EditStuff;