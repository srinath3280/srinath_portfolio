import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Drawer, List, ListItem, ListItemText, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About Me', path: '/about' },
    { label: 'Experience & Skills', path: '/experience' },
    { label: 'Projects & Portfolio', path: '/projects' },
    // { label: 'Certificates', path: '/certificates' },
    { label: 'Get in Touch', path: '/get-in-touch' },
];

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();

    const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

    const drawer = (
        <Box
            onClick={handleDrawerToggle}
            sx={{
                textAlign: 'center',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
            }}
        >
            <Typography
                variant="h6"
                sx={{
                    my: 2,
                    fontWeight: 700,
                    color: '#333',
                    fontFamily: "'Inter', sans-serif",
                    px: 2,
                    fontSize: { xs: '1rem', sm: '1.2rem' },
                }}
            >
                Lingadahalli Srinath
            </Typography>
            <List sx={{ p: 0, m: 0 }}>
                {navItems.map((item) => (
                    <ListItem
                        button
                        key={item.label}
                        component={Link}
                        to={item.path}
                        sx={{
                            justifyContent: 'flex-start',
                            p: 0,
                            minHeight: 0,
                            '&:hover': { background: '#e0e0e0', borderRadius: 1 },
                        }}
                    >
                        <ListItemText
                            primary={item.label}
                            sx={{
                                textAlign: 'flex-start',
                                fontSize: { xs: '0.9rem', sm: '1rem' },
                                color: location.pathname === item.path ? '#000' : '#555',
                                fontWeight: location.pathname === item.path ? 600 : 400,
                                py: 0.5,
                                px: 5,
                            }}
                        />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            <AppBar
                position="sticky"
                sx={{
                    background: '#f5f5f5',
                    color: '#333',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                    borderBottom: '1px solid #ddd',
                    width: '100%',
                }}
            >
                <Toolbar sx={{ minHeight: 64, px: { xs: 1, sm: 2 } }}>
                    <Typography
                        variant="h6"
                        sx={{
                            flexGrow: 1,
                            fontWeight: 700,
                            fontFamily: "'Inter', sans-serif",
                            px: 1,
                            fontSize: { xs: '0.9rem', sm: '1.2rem' },
                        }}
                    >
                        Lingadahalli Srinath
                    </Typography>
                    <IconButton
                        color="inherit"
                        edge="start"
                        sx={{ mr: 2, display: { sm: 'none' }, color: '#333', p: 1 }}
                        onClick={handleDrawerToggle}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <Button
                                key={item.label}
                                component={Link}
                                to={item.path}
                                sx={{
                                    ml: 2,
                                    fontWeight: location.pathname === item.path ? 600 : 400,
                                    color: location.pathname === item.path ? '#000' : '#555',
                                    position: 'relative',
                                    textTransform: 'none',
                                    fontFamily: "'Inter', sans-serif",
                                    fontSize: '0.9rem',
                                    '&:hover': { color: '#000', background: 'transparent', '&:after': { width: '100%' } },
                                    '&:after': {
                                        content: '""',
                                        position: 'absolute',
                                        width: location.pathname === item.path ? '100%' : 0,
                                        height: '2px',
                                        left: 0,
                                        bottom: -2,
                                        bgcolor: '#000',
                                        transition: '0.3s',
                                    },
                                }}
                            >
                                {item.label}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240, p: 0 },
                }}
            >
                {drawer}
            </Drawer>
        </>
    );
}
