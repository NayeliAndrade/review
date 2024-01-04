import { AppBar, Avatar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from "@mui/material";
import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../store/authSlice";

const NavBar = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleLogout = () => {
        dispatch(logoutUser())
        navigate("/")
    }
    const pages = [
        {
            id: 2,
            value: "Agregar productos",
            path: "/addStuff"
        },
        {
            id: 3,
            value: "Dashboard",
            path: "/dashboard"
        },
    ]

    const settings = [
        {
            id: 1,
            value: "Mi perfil",
            path: "/profile"
        }
    ]

    const unauthenticatedMenu = [
        {
            id: 1,
            value: "Iniciar sesion",
            path: "/login"
        },
        {
            id: 2,
            value: "Registrarse",
            path: "/register"
        },
    ]

    const user = useSelector((state) => state.auth);
    return (
        <AppBar position="fixed">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        nowrap="true"
                        component={Link}
                        to="/"
                        sx={{
                            mr: 2,
                            display: { xs: "none", md: "flex" },
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none"
                        }}
                    >
                        ProdOpin
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="blue"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {!user.isAuthenticated ? (
                                unauthenticatedMenu.map((option) => (
                                    <MenuItem key={option.id} onClick={handleCloseNavMenu}>
                                        <Link to={option.path} style={{ color: "black", textDecoration: "none" }}>{option.value}</Link>
                                    </MenuItem>
                                ))
                            ) : (
                                pages.map((page) => (
                                    <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                                        <Link to={page.path} style={{ color: "black", textDecoration: "none" }}>{page.value}</Link>
                                    </MenuItem>
                                ))
                            )}
                        </Menu>
                    </Box>
                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        nowrap="true"
                        component={Link}
                        to="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        ProdOpin
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {!user.isAuthenticated ? (
                            unauthenticatedMenu.map((option) => (
                                <MenuItem key={option.id} onClick={handleCloseNavMenu}>
                                    <Link to={option.path} style={{ color: "white", textDecoration: "none" }}>{option.value}</Link>
                                </MenuItem>
                            ))
                        ) : (
                            pages.map((page) => (
                                <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                                    <Link to={page.path} style={{ color: "white", textDecoration: "none" }}>{page.value}</Link>
                                </MenuItem>
                            ))
                        )}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt={user?.user?.name} src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {!user.isAuthenticated ? null : <MenuItem onClick={handleCloseUserMenu} style={{ display: "flex", flexDirection: "column" }}>
                                {settings.map((setting,) => (
                                    <Link key={setting.id} to={setting.path} style={{ margin: "4px", color: "black", textDecoration: "none" }}>{setting.value}</Link>
                                ))} <br />
                                <Button sx={{ color: "red" }} onClick={handleLogout}>cerrar sesion</Button>
                            </MenuItem>}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default NavBar;