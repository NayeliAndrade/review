import { Outlet } from "react-router-dom";
import NavBar from "../components/navBar/NavBar.jsx";

export default function Root() {
    return (
        <>
            <NavBar />
            <div>
                <Outlet />
            </div>
        </>
    );
}
