import { Box, Typography, Button, Stack } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function HomePage() {
    return (
        <Box
            sx={{
                maxWidth: 800,
                mx: "auto",
                mt: 16,
                textAlign: "center",
            }}
        >
            <Typography variant="h3" gutterBottom>
                Clean Charging
            </Typography>

            <Typography variant="h6" color="text.secondary">
                Check the current and future energy mix to see
                how much clean energy is available throughout the day.
                Choose the optimal charging time window,
                to maximize the use of renewable energy, and make your charging smarter and greener!
            </Typography>

            <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                justifyContent="center"
                mt={4}
            >
                <Button
                    variant="contained"
                    size="large"
                    component={RouterLink}
                    to="/energy-mix"
                >
                    Check Energy Mix
                </Button>

                <Button
                    variant="outlined"
                    size="large"
                    component={RouterLink}
                    to="/charging"
                >
                    Calculate Optimal Charging
                </Button>
            </Stack>
        </Box>
    );
}
