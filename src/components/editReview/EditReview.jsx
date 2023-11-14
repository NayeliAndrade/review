import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { putReview } from "../../store/reviewSlice";
import PropTypes from "prop-types";
import { Box, Button } from "@mui/material";
import { FormStyled, TextareaStyled } from "./EditReview.styled";

const EditReview = ({ review, closeEdit }) => {
    const dispatch = useDispatch()
    const [content, setContent] = useState(review.content)
    const textRef = useRef()

    useEffect(() => {
        textRef.current.value = review.content
    }, [review]);


    const handleUpdate = (e) => {
        e.preventDefault()
        const updateReview = {
            id: review.id,
            content,
            userId: review.userId,
            stuffId: review.stuffId
        }
        dispatch(putReview(updateReview))
        closeEdit()
    }

    const close = () => {
        closeEdit()
    }

    return (
        <FormStyled onSubmit={handleUpdate}>
            <TextareaStyled
                name="textarea"
                rows={15}
                cols={31}
                ref={textRef}
                onChange={e => setContent(e.target.value)} />
            <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                <Button
                    sx={{
                        fontWeight: 900
                    }}
                    type="submit">Guardar</Button>
                <Button
                    onClick={close}
                    sx={{
                        fontWeight: 900
                    }}
                >Cancelar</Button>
            </Box>
        </FormStyled>
    );
}

export default EditReview;

EditReview.propTypes = {
    review: PropTypes.object.isRequired,
    closeEdit: PropTypes.func.isRequired
}