import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout.tsx";
import HomePage from "./pages/HomePage.tsx";
import EnergyMixPage from "./pages/EnergyMixPage.tsx";
import OptimalChargingPage from "./pages/OptimalChargingPage.tsx";

export default function App() {
    return (
        <Routes>

            <Route element={<Layout />}>
                <Route path="/" element={<HomePage />} />

                <Route path="/energy-mix" element={<EnergyMixPage />} />
                <Route path="/charging" element={<OptimalChargingPage />} />
            </Route>

        </Routes>
    )
}