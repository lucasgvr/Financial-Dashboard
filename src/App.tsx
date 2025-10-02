import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { useState, useEffect } from "react";

import SideBar from "./components/SideBar";

import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Wallet from "./pages/Wallet";
import Settings from "./pages/Settings";

export default function App() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 1920);
        };

        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);

        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    return (
        <BrowserRouter>
            <div
                className={`h-screen ${
                    isMobile
                        ? "flex"
                        : "grid grid-cols-[25%_75%] xl:grid-cols-[15%_85%]"
                }`}
            >
                <SideBar />
                <main className={`${isMobile ? "flex-1" : ""} overflow-auto`}>
                    <Routes>
                        <Route
                            path="/"
                            element={<Navigate to="/dashboard" replace />}
                        />

                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route
                            path="/transactions"
                            element={<Transactions />}
                        />
                        <Route path="/wallet" element={<Wallet />} />
                        <Route path="/settings" element={<Settings />} />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
}
