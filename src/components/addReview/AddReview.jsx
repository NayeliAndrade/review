import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid"
import PropTypes from "prop-types";
import React, { useState } from "react";
import { postReview } from "../../store/reviewSlice";
import { Button } from "@mui/material";
import { ContainerAddReviewStyled, TextAreaStyled } from "./AddReview.styled";

const AddReview = ({ stuffId }) => {
    const user = useSelector(state => state.auth)

    const id = uuidv4()
    const [formVisible, setFormVisible] = useState(false)
    const [content, setContent] = useState("")
    const dispatch = useDispatch()

    const handleFormVisible = () => {
        setFormVisible(true)
    }

    const handleFormNoVisible = () => {
        setFormVisible(false)
    }

    const handleAddReview = (e) => {
        e.preventDefault()
        if (user.isAuthenticated && user.isAuthenticated.id) {
            const newReview = {
                content,
                id,
                stuffId,
                userId: user.isAuthenticated.id
            }
            dispatch(postReview(newReview));
        } else {
            alert("El usuario no está autenticado o no tiene un ID válido.");
        }
    }

    return (
        <ContainerAddReviewStyled>
            <Button onClick={handleFormVisible}>Agregar una reseña</Button>
            <Button onClick={handleFormNoVisible}>Cancelar</Button>
            {
                formVisible && (
                    <div>
                        <form onSubmit={handleAddReview}>
                            <TextAreaStyled
                                placeholder="Agrega tu reseña"
                                name="textarea"
                                rows={15}
                                cols={31}
                                onChange={e => setContent(e.target.value)} />
                            <Button sx={{
                                fontWeight: 900
                            }} type="submit">Guardar nueva reseña</Button >
                        </form>
                    </div>
                )
            }
        </ContainerAddReviewStyled>
    );
}

export default AddReview;

AddReview.propTypes = {
    stuffId: PropTypes.string.isRequired
}