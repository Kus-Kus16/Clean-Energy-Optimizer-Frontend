import {Box, Paper, Stack, Typography} from "@mui/material";
import type ChargingWindow from "../types/ChargingWindow.tsx";
import {Gauge, gaugeClasses} from "@mui/x-charts";

interface ChargingWindowCardProps {
    window: ChargingWindow;
}

function dateTimeFormatter(dateTimeString: string) {
    const match = dateTimeString.match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})$/);

    if (!match) return "";

    const [, , month, day, hour, minute] = match;
    return `${day}.${month} - ${hour}:${minute}`;
}

export default function ChargingWindowCard({ window }: ChargingWindowCardProps) {
    console.log("ChargingWindowCard", window);

    return (
        <Paper sx={{p: 3}} elevation={3}>
            <Stack direction={"row"} spacing={2} justifyContent={"space-between"}>
                <Stack spacing={2}>
                    <Typography variant="h6" fontWeight={600} color="text.primary">
                        Best Charging Schedule
                    </Typography>

                    <Box>
                        <Typography variant="subtitle2" color="text.secondary">
                            Start Time
                        </Typography>
                        <Typography variant="body1" fontWeight={500} color="text.primary">
                            {dateTimeFormatter(window.startDate)}
                        </Typography>
                    </Box>

                    <Box>
                        <Typography variant="subtitle2" color="text.secondary">
                            End Time
                        </Typography>
                        <Typography variant="body1" fontWeight={500} color="text.primary">
                            {dateTimeFormatter(window.endDate)}
                        </Typography>
                    </Box>
                </Stack>
                <Stack alignItems={"center"}>
                    <Box sx={{ height: 150, overflow: "hidden"}}>
                        <Gauge width={200} height={200} value={window.cleanEnergyPercentage}
                               startAngle={-90} endAngle={90}
                               text={({value}) => `${value?.toFixed(2)}%`}
                               sx={(theme) => ({
                                   [`& .${gaugeClasses.valueText}`]: {
                                       fontSize: 20,
                                       fontFamily: theme.typography.fontFamily,
                                   },
                                   [`& .${gaugeClasses.valueArc}`]: {
                                       fill: theme.palette.primary,
                                   },
                                   [`& .${gaugeClasses.referenceArc}`]: {
                                       fill: theme.palette.text.disabled,
                                   },
                                   transform: 'translateY(-30px)',
                               })}
                        />
                    </Box>
                    <Typography variant={"body2"} sx={{transform: 'translateY(-15px)'}}>
                        Clean Energy
                    </Typography>
                </Stack>
            </Stack>
        </Paper>
    )
}