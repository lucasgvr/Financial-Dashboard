export default function TransactionsTable() {
    return (
        <div className="flex-1 bg-gray-50 p-6 rounded-lg">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Recent Activity</h1>
                <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 cursor-pointer">
                    Add Transaction
                </button>
            </div>
            <table className="min-w-full mt-4 border border-gray-200">
                <thead className="bg-gray-100">
                    <tr className="text-left">
                        <th className="px-4 py-2">Date</th>
                        <th className="px-4 py-2">Description</th>
                        <th className="px-4 py-2">Category</th>
                        <th className="px-4 py-2">Amount</th>
                        <th className="px-4 py-2">Type</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2">2024-06-01</td>
                        <td className="px-4 py-2">Grocery Shopping</td>
                        <td className="px-4 py-2">Food</td>
                        <td className="px-4 py-2">$150.00</td>
                        <td className="px-4 py-2">Expense</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2">2024-06-02</td>
                        <td className="px-4 py-2">Salary</td>
                        <td className="px-4 py-2">Income</td>
                        <td className="px-4 py-2">$3,000.00</td>
                        <td className="px-4 py-2">Income</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
