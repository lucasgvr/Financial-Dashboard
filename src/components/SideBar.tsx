import { useState, useEffect } from "react";
import { BiCategory } from "react-icons/bi";
import { BiBookContent } from "react-icons/bi";
import { BiWalletAlt } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { BiWalk } from "react-icons/bi";
import { BiMenu } from "react-icons/bi";
import { BiX } from "react-icons/bi";

import MenuOption from "./MenuOption";
import UserInfo from "./UserInfo";

export default function SideBar({
    ...props
}: React.HTMLAttributes<HTMLElement>) {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            const isMobileScreen = window.innerWidth < 1080; // 1080p width
            setIsMobile(isMobileScreen);
            if (isMobileScreen) {
                setIsCollapsed(true);
            } else {
                setIsCollapsed(false);
            }
        };

        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);

        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    const toggleSidebar = () => {
        if (isMobile) {
            setIsCollapsed(!isCollapsed);
        }
    };

    return (
        <>
            {/* Mobile overlay */}
            {isMobile && !isCollapsed && (
                <div
                    className="fixed inset-0 bg-black/50 z-40"
                    onClick={() => setIsCollapsed(true)}
                />
            )}

            {/* Toggle button for mobile */}
            {isMobile && (
                <button
                    onClick={toggleSidebar}
                    className={`fixed top-4 right-4 z-50 p-3 rounded cursor-pointer transition-all duration-200 ${
                        isCollapsed ? "hover:bg-gray-200" : "hover:bg-black/5"
                    }`}
                >
                    {isCollapsed ? <BiMenu size={24} /> : <BiX size={24} />}
                </button>
            )}

            <section
                className={`
                    flex flex-col gap-1 p-4 border-r border-gray-200 h-screen bg-white
                    transition-transform duration-300 ease-in-out
                    ${
                        isMobile
                            ? "fixed top-0 left-0 z-40 w-64"
                            : "relative w-auto"
                    }
                    ${
                        isMobile && isCollapsed
                            ? "-translate-x-full"
                            : "translate-x-0"
                    }
                `}
                {...props}
            >
                <div className={isMobile ? "mt-4" : ""}>
                    <UserInfo />
                </div>
                <menu className="flex flex-col justify-between flex-1">
                    <div>
                        <MenuOption
                            Icon={BiCategory}
                            label="Dashboard"
                            setIsCollapsed={setIsCollapsed}
                        />
                        <MenuOption
                            Icon={BiBookContent}
                            label="Transactions"
                            setIsCollapsed={setIsCollapsed}
                        />
                        <MenuOption
                            Icon={BiWalletAlt}
                            label="Wallet"
                            setIsCollapsed={setIsCollapsed}
                        />
                    </div>
                    <div className="border-t border-gray-200 pt-6">
                        <MenuOption
                            Icon={BiCog}
                            label="Settings"
                            setIsCollapsed={setIsCollapsed}
                        />
                        <MenuOption
                            Icon={BiWalk}
                            label="Log out"
                            isLink={false}
                            customColor="text-red-500 hover:bg-red-100"
                            onClick={() => {
                                console.log("Log out clicked");
                            }}
                        />
                    </div>
                </menu>
            </section>
        </>
    );
}
