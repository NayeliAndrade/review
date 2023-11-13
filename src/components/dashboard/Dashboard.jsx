import { Grid, Typography } from "@mui/material";
import Stuff from "../stuff/Stuff";
import Users from "../users/users";
import SelectRanking from "../selectRanking/selectRanking";
import { useState } from "react";

const Dashboard = () => {
    const [selectedRanking, setSelectedRanking] = useState(-1);

    const handleRankingChange = (ranking) => {
        setSelectedRanking(ranking);
    };

    return (
        <Grid container spacing={2} sx={{ padding: "1rem" }}>
            <Grid item xs={12} sm={8} md={9} lg={9} xl={9} sx={{ maxWidth: "1200px", display: "flex", flexWrap: "wrap", marginTop: "4rem" }}>
                <Stuff ranking={selectedRanking} />
            </Grid>
            <Grid item xs={12} sm={4} md={3} lg={3} xl={3} sx={{ marginTop: { xs: "0rem", sm: "4rem" } }} >
                <Grid container direction="row" >
                    <Grid item sx={{ maxHeight: "400px", overflowY: "auto" }}>
                        <Typography variant="h5" sx={{ margin: "1rem" }}>Usuarios</Typography>
                        <Users />
                    </Grid>
                    <Grid item >
                        <Typography variant="h5" sx={{ margin: "1rem" }}>Filtra por ranking</Typography>
                        <SelectRanking onRankingChange={handleRankingChange} selectedRanking={selectedRanking} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Dashboard;
