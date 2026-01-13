import {Alert, Box, CircularProgress, Divider, Stack, Typography } from "@mui/material";
import {useQuery} from "@tanstack/react-query";
import api from "../api/Axios.tsx";
import type DayEnergyMix from "../types/DayEnergyMix.tsx";
import EnergyChartCard from "../components/EnergyChartCard.tsx";

function getTitleByIndex(index: number) {
    const date = new Date();
    date.setDate(date.getDate() + index);

    return date.toLocaleDateString("en-UK", { weekday: "long" });
}


export default function EnergyMixPage() {
    const { data, error, isPending, isFetched } = useQuery({
        queryKey: ["energy-mix"],
        queryFn: async () => {
            const response = await api.get<DayEnergyMix[]>("energy-mix");
            return response.data;
        }
    })

    return (
        <>
            <Box sx={{m: 3}}>
                <Typography variant="h4" gutterBottom>
                    Daily Energy Mix
                </Typography>
                <Divider/>
            </Box>

            {isPending && (
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
                    <CircularProgress />
                </Box>
            )}

            {error && (
                <Alert severity="error">
                    Failed to fetch energy data
                </Alert>
            )}

            {isFetched && data && (
                <Stack direction={"row"} spacing={2} sx={{m: 3, mt: 6, justifyContent: "space-between"}}>
                    {data.map((item, i) => (
                        <EnergyChartCard key={i} title={getTitleByIndex(i)} energyMix={item}/>
                    ))}
                </Stack>
            )}

        </>
    );
}