import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";
import { baseURL } from "../api/Axios";

export const server = setupServer(
    http.get(`${baseURL}/energy-mix`, async () => {
        return HttpResponse.json([
            {
                date: "2026-01-17",
                energySources: [
                    { energySource: "SOLAR", energyPercentage: 20 },
                    { energySource: "WIND", energyPercentage: 30 },
                    { energySource: "NUCLEAR", energyPercentage: 50 },
                ],
                cleanEnergyPercentage: 100,
            },
        ]);
    }),

    http.get(`${baseURL}/energy-mix/optimal-window`, async () => {
        return HttpResponse.json({
            startDate: "2026-01-17T10:00:00",
            endDate: "2026-01-17T13:00:00",
            cleanEnergyPercentage: 90,
        });
    })
);
