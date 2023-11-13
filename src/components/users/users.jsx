import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../store/userSlice";
import { Avatar, Box, Typography } from "@mui/material";
import { getReview } from "../../store/reviewSlice";

const Users = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.user.data);
    const reviews = useSelector((state) => state.review.data);
    const [userStates, setUserStates] = useState({});

    useEffect(() => {
        dispatch(getUser());
        dispatch(getReview());
    }, [dispatch]);

    const userReviewsCount = {};

    reviews.forEach((review) => {
        if (userReviewsCount[review.userId]) {
            userReviewsCount[review.userId] += 1;
        } else {
            userReviewsCount[review.userId] = 1;
        }
    });

    const toggleVisibility = (userId) => {
        setUserStates((prevStates) => ({
            ...prevStates,
            [userId]: !prevStates[userId],
        }));
    };

    return (
        <>
            {users.map((user) => (
                <div key={user.id}>
                    <Box onClick={() => toggleVisibility(user.id)} sx={{ maxWidth: 340, display: "flex", cursor: "pointer", color: "#1976d2" }}>
                        <Avatar alt={user.name} src="/static/images/avatar/2.jpg" sx={{ margin: ".5rem" }} />
                        <Typography gutterBottom variant="h6" component="div" style={{ textTransform: "capitalize", margin: ".5rem" }}>
                            {user.name}
                        </Typography>
                    </Box>
                    {userStates[user.id] && <Box >
                        <Typography gutterBottom variant="h6" component="div" style={{ textTransform: "capitalize", margin: ".5rem" }}>
                            {userReviewsCount[user.id] ? `Reseñas: ${userReviewsCount[user.id]}` : "Sin reseñas"}
                        </Typography>
                    </Box>}
                </div>
            ))}
        </>
    );
};

export default Users;