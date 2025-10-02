import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const transactionSchema = z.object({
    amount: z.number().positive("Amount must be positive"),
    description: z.string().min(1, "Description is required"),
    category: z.string().min(1, "Category is required"),
    date: z.string().min(1, "Date is required"),
    type: z.enum(["income", "expense"]),
});

type TransactionFormData = z.infer<typeof transactionSchema>;

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

export default function AddTransactionModal({ isOpen, onClose }: Props) {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<TransactionFormData>({
        resolver: zodResolver(transactionSchema),
        defaultValues: {
            date: new Date().toISOString().split("T")[0], // Default to today
        },
    });

    const onSubmit = async (data: TransactionFormData) => {
        // Here you'll add Supabase logic later
        console.log("Transaction data:", data);
        reset();
        onClose();
    };

    const categories = [
        "Food & Dining",
        "Transportation",
        "Shopping",
        "Entertainment",
        "Bills & Utilities",
        "Healthcare",
        "Education",
        "Travel",
        "Other",
    ];

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={onClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/50" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-md transform rounded-2xl bg-white p-6 shadow-xl transition-all">
                                <Dialog.Title className="text-lg font-medium mb-4">
                                    Add Transaction
                                </Dialog.Title>

                                <form
                                    onSubmit={handleSubmit(onSubmit)}
                                    className="space-y-4"
                                >
                                    {/* Transaction Type */}
                                    <div>
                                        <label className="block text-sm font-medium mb-2">
                                            Type
                                        </label>
                                        <div className="flex gap-4">
                                            <label className="flex items-center">
                                                <input
                                                    type="radio"
                                                    value="income"
                                                    {...register("type")}
                                                    className="mr-2"
                                                />
                                                Income
                                            </label>
                                            <label className="flex items-center">
                                                <input
                                                    type="radio"
                                                    value="expense"
                                                    {...register("type")}
                                                    className="mr-2"
                                                />
                                                Expense
                                            </label>
                                        </div>
                                        {errors.type && (
                                            <p className="text-red-500 text-sm">
                                                {errors.type.message}
                                            </p>
                                        )}
                                    </div>

                                    {/* Amount */}
                                    <div>
                                        <label className="block text-sm font-medium mb-1">
                                            Amount
                                        </label>
                                        <input
                                            type="number"
                                            step="0.01"
                                            placeholder="0.00"
                                            {...register("amount", {
                                                valueAsNumber: true,
                                            })}
                                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                        {errors.amount && (
                                            <p className="text-red-500 text-sm">
                                                {errors.amount.message}
                                            </p>
                                        )}
                                    </div>

                                    {/* Description */}
                                    <div>
                                        <label className="block text-sm font-medium mb-1">
                                            Description
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Enter description..."
                                            {...register("description")}
                                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                        {errors.description && (
                                            <p className="text-red-500 text-sm">
                                                {errors.description.message}
                                            </p>
                                        )}
                                    </div>

                                    {/* Category */}
                                    <div>
                                        <label className="block text-sm font-medium mb-1">
                                            Category
                                        </label>
                                        <select
                                            {...register("category")}
                                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        >
                                            <option value="">
                                                Select a category
                                            </option>
                                            {categories.map((category) => (
                                                <option
                                                    key={category}
                                                    value={category}
                                                >
                                                    {category}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.category && (
                                            <p className="text-red-500 text-sm">
                                                {errors.category.message}
                                            </p>
                                        )}
                                    </div>

                                    {/* Date */}
                                    <div>
                                        <label className="block text-sm font-medium mb-1">
                                            Date
                                        </label>
                                        <input
                                            type="date"
                                            {...register("date")}
                                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                        {errors.date && (
                                            <p className="text-red-500 text-sm">
                                                {errors.date.message}
                                            </p>
                                        )}
                                    </div>

                                    {/* Buttons */}
                                    <div className="flex gap-4 pt-4">
                                        <button
                                            type="button"
                                            onClick={onClose}
                                            className="cursor-pointer flex-1 py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            className="cursor-pointer flex-1 py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                                        >
                                            Add Transaction
                                        </button>
                                    </div>
                                </form>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}
