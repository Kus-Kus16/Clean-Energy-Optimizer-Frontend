import { Button, Stack, TextField, Typography } from "@mui/material";
import * as React from "react";
import {useState} from "react";

interface ChargingWindowFormProps {
    onCalculate: (hours: number) => void;
    disabled: boolean;
}

const MIN_CHARGING_HOURS = 1;
const MAX_CHARGING_HOURS = 6;

export default function ChargingWindowForm({ onCalculate, disabled }: ChargingWindowFormProps) {
    const [value, setValue] = useState(1);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        onCalculate(value);
    };

    return (
        <Stack direction="row" spacing={2} alignItems={"start"} justifyContent={"space-between"}>
            <Stack spacing={2} width={"60%"}>
                <Typography variant={"h6"}>
                    Optimize your vehicle charging for clean energy usage.
                </Typography>
                <Typography variant={"body2"}>
                    Based on current energy generation data, this tool analyzes upcoming hours
                    and finds the best charging time window.
                </Typography>
            </Stack>

            <Stack component="form" onSubmit={handleSubmit} spacing={2}>
                <TextField
                    label="Charging hours"
                    name="minPlayers"
                    type="number"
                    value={value}
                    onChange={(e) => setValue(Number.parseInt(e.target.value))}
                    slotProps={{
                        input: {
                            inputProps: {
                                min: MIN_CHARGING_HOURS,
                                max: MAX_CHARGING_HOURS
                            }
                        }
                    }}
                    required
                    disabled={disabled}
                    fullWidth
                />
                <Button
                    type="submit"
                    variant="contained"
                    disabled={disabled}
                    sx={{
                        width:'170px',
                        height:'55px',
                    }}
                >
                    Calculate
                </Button>

            </Stack>

        </Stack>
    )
};