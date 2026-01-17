import { render, screen } from "@testing-library/react";
import EnergyMixPage from "../EnergyMixPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

describe("EnergyMixPage", () => {
    it("shows loading and data", async () => {
        render(
            <QueryClientProvider client={new QueryClient()}>
                <EnergyMixPage />
            </QueryClientProvider>
        );

        expect(screen.getByRole("progressbar")).toBeInTheDocument();
        expect(await screen.findByText(/clean energy percentage/i)).toBeInTheDocument();
    });
});
