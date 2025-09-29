import { BrowserRouter, Routes, Route, Navigate } from "react-router";

import SideBar from "./components/SideBar";

import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Wallet from "./pages/Wallet";
import Settings from "./pages/Settings";

export default function App() {
    return (
        <BrowserRouter>
            <div className="h-screen grid grid-cols-[25%_75%] xl:grid-cols-[15%_85%]">
                <SideBar />
                <Routes>
                    <Route
                        path="/"
                        element={<Navigate to="/dashboard" replace />}
                    />

                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/transactions" element={<Transactions />} />
                    <Route path="/wallet" element={<Wallet />} />
                    <Route path="/settings" element={<Settings />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}
