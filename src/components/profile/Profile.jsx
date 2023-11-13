import { useSelector } from "react-redux";
import { H1Styled, ProfileDivStyled } from "./Profile.styled";

const Profile = () => {
    const user = useSelector((state) => state.auth);

    return (
        <ProfileDivStyled >
            <H1Styled key={user.user.id}>Hola, Mi nombre es: {user.user.name}</H1Styled>
        </ProfileDivStyled>
    );
}

export default Profile;
