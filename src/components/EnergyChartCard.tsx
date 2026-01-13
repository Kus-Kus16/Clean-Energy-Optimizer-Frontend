import {Box, Paper, Stack, Typography } from "@mui/material";
import type DayEnergyMix from "../types/DayEnergyMix.tsx";
import { PieChart } from "@mui/x-charts";

interface EnergySourceChartProps {
    title: string;
    energyMix: DayEnergyMix
}

function energySourceNameToColor(name: string) {
    switch (name) {
        case "COAL": return "#8C564B";
        case "SOLAR": return "#FFB422";
        case "HYDRO": return "#4254FB";
        case "GAS": return "#0DBEFF";
        case "BIOMASS": return "#22BF75";
        case "NUCLEAR": return "#FF7511";
        case "WIND": return "#BAB0AB";
        case "IMPORTS": return "#FA83B4";
        default: return "#FA4F58";
    }
}

function energyMixToChartData(energyMix: DayEnergyMix) {
    return energyMix.energySources.map(({ energySource, energyPercentage }) => ({
        label: energySource.charAt(0).toUpperCase() + energySource.slice(1).toLowerCase(),
        value: energyPercentage,
        color: energySourceNameToColor(energySource),
    }));
}

function dateFormatter(dateString: string) {
    const date = new Date(dateString);

    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString()

    return `${day}.${month}.${year}`;
}

export default function EnergyChartCard({ title, energyMix }: EnergySourceChartProps) {

    return (
        <Paper sx={{p: 2}}>
            <Stack alignItems={"center"}>
                <Typography variant="h4">
                    {title}
                </Typography>
                <Typography variant="body2">
                    {dateFormatter(energyMix.date)}
                </Typography>

                <Box sx={{ height: 220, overflow: "hidden" }}>
                    <PieChart
                        series={[
                            {
                                startAngle: -90,
                                endAngle: 90,
                                paddingAngle: 0.2,
                                innerRadius: '60%',
                                outerRadius: '90%',
                                data: energyMixToChartData(energyMix),
                                valueFormatter: (val) => {
                                    return `${val.value.toFixed(2)}%`;
                                }
                            }
                        ]}
                        hideLegend
                        height={380}
                        width={380}
                    />
                </Box>

                <Typography variant={"h6"}>
                    Clean Energy Percentage:
                </Typography>
                <Typography variant="subtitle1">
                    {`${energyMix.cleanEnergyPercentage.toFixed(2)}%`}
                </Typography>
            </Stack>
        </Paper>
    )
}