import { BiTrendingDown } from "react-icons/bi";
import { BiTrendingUp } from "react-icons/bi";

interface CardProps {
    isNegative?: boolean;
}

export default function Card({ isNegative }: CardProps) {
    return (
        <div className="bg-gray-50 p-6 rounded-lg flex gap-4 border border-gray-200 justify-between">
            <div className="flex flex-col gap-6">
                <p className="text-gray-500 text-sm xl:text-base">Balance</p>
                <div className="flex flex-col gap-2">
                    <h1 className="text-2xl font-semibold lg:text-3xl xl:text-4xl">
                        $7,123.45
                    </h1>
                    <div>
                        <div className="flex items-center gap-2">
                            <div
                                className={`text-emerald-500 bg-emerald-200 font-medium text-sm flex items-center gap-2 justify-center px-2 py-1 rounded-full w-max ${
                                    isNegative ? "text-red-500 bg-red-200" : ""
                                }`}
                            >
                                {isNegative ? (
                                    <BiTrendingDown className="text-red-500" />
                                ) : (
                                    <BiTrendingUp className="text-emerald-500" />
                                )}
                                <span>2.5%</span>
                            </div>
                            <span className="text-gray-500 text-sm">
                                {" "}
                                From last month
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
