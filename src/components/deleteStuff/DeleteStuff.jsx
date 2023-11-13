import { useDispatch } from 'react-redux';
import { deleteStuff } from '../../store/stuffSlice';
import PropTypes from "prop-types";
import { Button } from '@mui/material';

const DeleteStuff = ({ itemId }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteStuff(itemId));
    };

    return (
        <Button sx={{ color: "red" }} variant="text" onClick={handleDelete}>Eliminar</Button>
    );
};

export default DeleteStuff

DeleteStuff.propTypes = {
    itemId: PropTypes.string.isRequired
}
