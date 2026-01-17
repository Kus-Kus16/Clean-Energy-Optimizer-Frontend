import { render, screen, fireEvent } from "@testing-library/react";
import ChargingWindowForm from "../ChargingWindowForm";
import {expect} from "vitest";

describe("ChargingWindowForm", () => {
    it("calls onCalculate with charging hours", () => {
        const onCalculate = vi.fn();

        render(<ChargingWindowForm onCalculate={onCalculate} disabled={false} />);

        const input = screen.getByLabelText(/charging hours/i);
        fireEvent.change(input, { target: { value: "3" } });
        fireEvent.click(screen.getByText(/calculate/i));

        expect(onCalculate).toHaveBeenCalledWith(3);
    });

    it("disables form components", () => {
        render(<ChargingWindowForm onCalculate={() => {}} disabled />);

        expect(screen.getByRole("button")).toBeDisabled();
        expect(screen.getByRole("spinbutton")).toBeDisabled();
    });

    it("shows error for invalid input", () => {
        const onCalculate = vi.fn();
        render(<ChargingWindowForm onCalculate={onCalculate} disabled={false} />);

        const input = screen.getByLabelText(/charging hours/i);
        fireEvent.change(input, { target: { value: "0" } });
        fireEvent.click(screen.getByText(/calculate/i));
        fireEvent.change(input, { target: { value: "7" } });
        fireEvent.click(screen.getByText(/calculate/i));

        expect(onCalculate).not.toHaveBeenCalled();
    });
});
