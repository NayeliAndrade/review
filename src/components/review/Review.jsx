import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getReview } from "../../store/reviewSlice";
import { Card, CardContent, CardMedia, Rating, Typography } from "@mui/material";
import ReviewList from "../reviewList/ReviewList";
import AddReview from "../addReview/AddReview";
import { getStuff } from "../../store/stuffSlice";

const Review = () => {
    const { id } = useParams()
    const allStuff = useSelector((state) => state.stuff.data)
    const stuff = allStuff.find(stuff => stuff.id === id)

    const dispatch = useDispatch()
    const review = useSelector((state => state.review.data))

    useEffect(() => {
        if (!stuff) {
            dispatch(getStuff());
        }
        if (review.length === 0) {
            dispatch(getReview());
        }
    }, [dispatch, review, stuff]);

    return (
        <DivStyled>
            {stuff && (
                <>
                    <Card sx={{ width: "250px", margin: "1rem" }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image={`/${stuff.image}`}
                            title={stuff.title}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" style={{ textTransform: "capitalize" }}>
                                {stuff.title}
                            </Typography>
                            <Rating name="read-only" value={Number(stuff.ranking)} readOnly />
                        </CardContent>
                    </Card>
                    <AddReview stuffId={id} />
                    <ReviewList stuffId={id} />
                </>
            )}
        </DivStyled>
    );
}

export default Review;

