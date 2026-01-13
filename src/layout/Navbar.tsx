import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom';
import { Stack } from "@mui/material";

const pages = [
    { label: 'Energy Mix', path: '/energy-mix' },
    { label: 'Charging Calculator', path: '/charging' }
];

export default function Navbar() {

    return (
        <AppBar position="fixed">
            <Toolbar sx={{justifyContent: 'space-between'}}>
                <Typography
                    variant="h6"
                    component={RouterLink}
                    to="/"
                    sx={{ textDecoration: 'none', color: 'inherit', mr: 4 }}
                >
                    🌱 Clean Energy Optimizer
                </Typography>

                <Stack direction="row" spacing={4}>
                    {pages.map((page) => (
                        <Button
                            key={page.path}
                            component={RouterLink}
                            to={page.path}
                            color="inherit"
                        >
                            {page.label}
                        </Button>
                    ))}
                </Stack>
            </Toolbar>
        </AppBar>
    );
}
