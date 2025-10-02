import Card from "../components/Card";
import BalanceChart from "../components/BalanceChart";
import TransactionsTable from "../components/TransactionsTable";

export default function Dashboard() {
    return (
        <div className="p-6 flex flex-col gap-12">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4">
                <Card />
                <Card isNegative />
                <Card isNegative />
            </div>
            <div className="flex-col gap-12 justify-between">
                <BalanceChart />
                <TransactionsTable />
            </div>
        </div>
    );
}
