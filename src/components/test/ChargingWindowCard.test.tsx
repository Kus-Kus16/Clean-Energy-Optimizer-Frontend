import { render, screen } from "@testing-library/react";
import ChargingWindowCard from "../ChargingWindowCard";

const window = {
    startDate: "2026-01-17T12:00:00",
    endDate: "2026-01-17T15:00:00",
    cleanEnergyPercentage: 21.55,
};

describe("ChargingWindowCard", () => {
    it("renders data", () => {
        render(<ChargingWindowCard window={window} />);

        expect(screen.getByText("17.01 - 12:00")).toBeInTheDocument();
        expect(screen.getByText("17.01 - 15:00")).toBeInTheDocument();
        expect(screen.getByText(/21.55%/)).toBeInTheDocument();
    });
});
