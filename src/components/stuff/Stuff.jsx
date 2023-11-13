import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStuff } from "../../store/stuffSlice";
import { Link } from "react-router-dom";
import DeleteStuff from "../deleteStuff/DeleteStuff";
import { Button, Card, CardActions, CardContent, CardMedia, Rating, Typography } from "@mui/material";
import PropTypes from "prop-types";

const Stuff = ({ ranking }) => {
    const dispatch = useDispatch()
    const stuffs = useSelector((state) => state.stuff.data)

    const filteredStuffs = ranking === -1
        ? stuffs
        : stuffs.filter((stuff) => stuff.ranking === ranking)

    useEffect(() => {
        dispatch(getStuff())
    }, [dispatch])

    return (
        <>
            {filteredStuffs.length === 0 ? (
                <Typography sx={{ margin: "0 auto", color: "red", fontSize: "4rem" }}>No hay productos</Typography>
            ) : (filteredStuffs.map((stuff) => (
                <Card key={stuff.id} sx={{ width: "250px", margin: "1rem" }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={stuff.image}
                        title={stuff.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" style={{ textTransform: "capitalize" }}>
                            {stuff.title}
                        </Typography>
                        <Rating name="read-only" value={Number(stuff.ranking)} readOnly />
                    </CardContent>

                    <CardActions>
                        <Button
                            variant="text"
                            nowrap="true"
                            component={Link}
                            to={`/editStuff/${stuff.id}`}
                            sx={{
                                mr: 2,
                                fontWeight: 400,
                                textDecoration: "none"
                            }}
                        >
                            Editar
                        </Button>
                        <DeleteStuff itemId={stuff.id} />
                        <Button
                            variant="text"
                            nowrap="true"
                            component={Link}
                            to={`/review/${stuff.id}`}
                            sx={{
                                mr: 2,
                                fontWeight: 400,
                                color: "black",
                                textDecoration: "none"
                            }}
                        >
                            Reseña
                        </Button>
                    </CardActions>
                </Card>
            )))}
        </>
    );
}

export default Stuff;

Stuff.propTypes = {
    ranking: PropTypes.number.isRequired
}