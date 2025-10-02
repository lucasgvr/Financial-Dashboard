import { Chart as ChartJS } from "chart.js/auto";
import { Line, Pie } from "react-chartjs-2";

export default function BalanceChart() {
    const lineData = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
                label: "Balance Over Time",
                data: [1000, 2000, 1500, 3000, 2500, 4000],
                borderColor: "rgba(0, 0, 0, 1)",
                backgroundColor: "rgba(0, 0, 0, 1)",
            },
        ],
    };

    const pieData = {
        labels: [
            "Savings",
            "Investments",
            "Checking",
            "Emergency Fund",
            "Credit Cards",
        ],
        datasets: [
            {
                label: "Account Distribution",
                data: [35, 25, 20, 15, 5],
                backgroundColor: [
                    "rgba(59, 130, 246, 0.8)", // Blue
                    "rgba(16, 185, 129, 0.8)", // Green
                    "rgba(245, 158, 11, 0.8)", // Amber
                    "rgba(139, 92, 246, 0.8)", // Purple
                    "rgba(239, 68, 68, 0.8)", // Red
                ],
                borderColor: [
                    "rgba(59, 130, 246, 1)",
                    "rgba(16, 185, 129, 1)",
                    "rgba(245, 158, 11, 1)",
                    "rgba(139, 92, 246, 1)",
                    "rgba(239, 68, 68, 1)",
                ],
                borderWidth: 2,
            },
        ],
    };

    const lineOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: "Balance Over Time",
                font: {
                    size: 16,
                    weight: "bold" as const,
                },
                padding: {
                    bottom: 20,
                },
            },
            legend: {
                display: false,
            },
        },
        scales: {
            y: {
                grid: { display: false },
            },
            x: {
                grid: { display: false },
            },
        },
    };

    const pieOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: "Expenses Distribution",
                font: {
                    size: 16,
                    weight: "bold" as const,
                },
                padding: {
                    bottom: 20,
                },
            },
            legend: {
                display: false,
                position: "bottom" as const,
            },
        },
    };

    return (
        <div className="w-full">
            <h1 className="text-2xl font-bold mb-4">Balance Chart</h1>
            <div className="p-6 grid grid-cols-1 xl:grid-cols-2 gap-6">
                <div className="relative w-full h-64 md:h-80 lg:h-96">
                    <Line data={lineData} options={lineOptions} />
                </div>
                <div className="relative w-full h-64 md:h-80 lg:h-96">
                    <Pie data={pieData} options={pieOptions} />
                </div>
            </div>
        </div>
    );
}
