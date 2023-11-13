import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteReview, getReview } from "../../store/reviewSlice";
import { getUser } from "../../store/userSlice";
import PropTypes from "prop-types";
import EditReview from "../editReview/EditReview";
import { Button } from "@mui/material";
import { AuthorStyled } from "./ReviewList.styled";

const ReviewList = ({ stuffId }) => {
    const reviews = useSelector(state => state.review.data);
    const [reviewToChange, setReviewToChange] = useState(null)
    const users = useSelector(state => state.user.data);
    const dispatch = useDispatch();
    const userLogin = useSelector(state => state.auth.isAuthenticated)
    const [isEditing, setIsEditing] = useState(false)

    useEffect(() => {
        dispatch(getReview());
        dispatch(getUser());
    }, [dispatch]);

    const handleDeleteReview = (id) => {
        dispatch(deleteReview(id));
    };

    const stuffReviews = reviews.filter(review => review.stuffId === stuffId);

    const handleEditReview = (author, review) => {
        if (userLogin.name === author) {
            setIsEditing(true)
            setReviewToChange(review)
        } else {
            alert("No puedes editar esta reseña, solo el usuario que la escribio");
        }
    }

    const closeEdit = () => {
        setIsEditing(false)
    }

    return (
        <>
            {stuffReviews.map(review => (
                <div key={review.id}>

                    <p>Autor: <AuthorStyled >{users.find(user => user.id === review.userId)?.name || "Anonimo"}</AuthorStyled></p>
                    <p>Reseña:  <AuthorStyled >{review.content}</AuthorStyled> </p>

                    <Button sx={{ color: "black" }} onClick={() => handleEditReview(users.find(user => user.id === review.userId)?.name, review)}>Editar reseña</Button>
                    <Button sx={{ color: "red" }} onClick={() => handleDeleteReview(review.id)}>Eliminar Reseña</Button>
                </div>
            ))}
            {isEditing &&
                <EditReview
                    closeEdit={closeEdit}
                    review={reviewToChange}
                />}
        </>
    );
}

export default ReviewList;


ReviewList.propTypes = {
    stuffId: PropTypes.string.isRequired,
}
