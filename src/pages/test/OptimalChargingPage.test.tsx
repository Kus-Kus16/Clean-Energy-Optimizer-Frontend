import { render, screen, fireEvent } from "@testing-library/react";
import OptimalChargingPage from "../OptimalChargingPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

describe("OptimalChargingPage", () => {
    it("shows loading ad data", async () => {
        render(
            <QueryClientProvider client={new QueryClient()}>
                <OptimalChargingPage />
            </QueryClientProvider>
        );

        fireEvent.change(screen.getByLabelText(/charging hours/i), {
            target: { value: "3" },
        });
        fireEvent.click(screen.getByText(/calculate/i));

        expect(screen.getByRole("progressbar")).toBeInTheDocument();
        expect(await screen.findByText(/clean energy/i)).toBeInTheDocument();
        expect(await screen.findByText(/90.00%/)).toBeInTheDocument();
    });
});
