import { render, screen } from "@testing-library/react";
import EnergyChartCard from "../EnergyChartCard";

const energyMix = {
    date: "2026-01-17",
    cleanEnergyPercentage: 21.2,
    energySources: [
        { energySource: "SOLAR", energyPercentage: 20 },
        { energySource: "WIND", energyPercentage: 41.2 },
    ],
};

describe("EnergyChartCard", () => {
    it("renders energymix data", () => {
        render(
            <EnergyChartCard title="Saturday" energyMix={energyMix} />
        );

        expect(screen.getByText("Saturday")).toBeInTheDocument();
        expect(screen.getByText("17.01.2026")).toBeInTheDocument();
        expect(screen.getByText("21.20%")).toBeInTheDocument();
    });
});
