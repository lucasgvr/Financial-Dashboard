import { BiCategory } from "react-icons/bi";
import { BiBookContent } from "react-icons/bi";
import { BiWalletAlt } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { BiWalk } from "react-icons/bi";

import MenuOption from "./MenuOption";
import UserInfo from "./UserInfo";

export default function SideBar({
    ...props
}: React.HTMLAttributes<HTMLElement>) {
    return (
        <section
            className="flex flex-col gap-1 p-4 border-r border-gray-200 h-screen"
            {...props}
        >
            <div>
                <UserInfo />
            </div>
            <menu className="flex flex-col justify-between flex-1">
                <div>
                    <MenuOption Icon={BiCategory} label="Dashboard" />
                    <MenuOption Icon={BiBookContent} label="Transactions" />
                    <MenuOption Icon={BiWalletAlt} label="Wallet" />
                </div>
                <div>
                    <MenuOption Icon={BiCog} label="Settings" />
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
    );
}
