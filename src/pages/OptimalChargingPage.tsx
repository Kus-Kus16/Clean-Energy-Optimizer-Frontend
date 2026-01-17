import {Alert, Box, CircularProgress, Divider, Paper, Stack, Typography} from "@mui/material";
import {useQuery} from "@tanstack/react-query";
import api from "../api/Axios.tsx";
import type ChargingWindow from "../types/ChargingWindow.tsx";
import ChargingWindowForm from "../components/ChargingWindowForm.tsx";
import {useState} from "react";
import ChargingWindowCard from "../components/ChargingWindowCard.tsx";

export default function OptimalChargingPage() {
    const [chargingHours, setChargingHours] = useState<number | null>(null);

    const { data, error, isFetching, isFetched } = useQuery({
        queryKey: ["optimal-window", chargingHours],
        queryFn: async ({ queryKey }) => {
            const [, hours] = queryKey;
            if (!hours) {
                throw new Error("Hours not specified");
            }

            const response = await api.get<ChargingWindow>("energy-mix/optimal-window", {
                params: {
                    chargingHours: hours
                }
            });
            return response.data;
        },
        enabled: !!chargingHours,
        staleTime: 1000 * 60 * 5
    });

    const handleCalculate = (hours: number) => {
        setChargingHours(hours);
    };

    return (
        <Box justifyItems={"center"}>
            <Paper sx={{width: "50%", height: "100%", p: 3, m: 4, mb: 1}} elevation={6}>
                <Stack spacing={4}>
                    <Box>
                        <Typography variant="h4" gutterBottom>
                            Optimal Charging Window
                        </Typography>
                        <Divider/>
                    </Box>

                    <ChargingWindowForm onCalculate={handleCalculate} disabled={isFetching}/>

                    {(isFetched || error || isFetching) && (
                        <Divider/>
                    )}

                    <Box>
                        {isFetching && (
                            <Box sx={{ display: 'flex', justifyContent: 'center', m: 5 }}>
                                <CircularProgress />
                            </Box>
                        )}

                        {error && (
                            <Alert severity="error">
                                Failed to fetch energy data
                            </Alert>
                        )}

                        {!isFetching && !error && data && (
                            <ChargingWindowCard window={data}/>
                        )}
                    </Box>
                </Stack>
            </Paper>
        </Box>
    );
}
