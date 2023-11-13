import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import PropTypes from "prop-types";

const SelectRanking = ({ onRankingChange, selectedRanking }) => {

    const handleChange = (e) => {
        const newRanking = Number(e.target.value);

        onRankingChange(newRanking);
    };
    const options = [1, 2, 3, 4, 5]
    return (
        <div>
            <FormControl fullWidth size="small" sx={{ marginBottom: "1rem" }}>
                <InputLabel id="ranking-label">Elige una opción</InputLabel>
                <Select
                    labelId="ranking-label"
                    id="ranking"
                    value={selectedRanking}
                    onChange={handleChange}
                    required
                >
                    <MenuItem value={-1}>Mostrar todos</MenuItem>
                    {options.map((option, index) =>
                        <MenuItem key={index} value={option}>
                            {option}
                        </MenuItem>
                    )}
                </Select>
            </FormControl>
        </div>
    );
}

export default SelectRanking;
SelectRanking.propTypes = {
    onRankingChange: PropTypes.func.isRequired,
    selectedRanking: PropTypes.number.isRequired,

}