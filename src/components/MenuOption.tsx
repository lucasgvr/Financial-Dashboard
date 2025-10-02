import { useLocation, useNavigate } from "react-router";

interface MenuOptionProps extends React.HTMLAttributes<HTMLElement> {
    Icon?: React.ComponentType;
    label: string;
    isLink?: boolean;
    customColor?: string;
    setIsCollapsed?: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MenuOption({
    Icon,
    label,
    isLink = true,
    customColor,
    setIsCollapsed,
    ...props
}: MenuOptionProps) {
    const navigate = useNavigate();
    const location = useLocation();

    const path = `/${label.toLowerCase()}`;
    const isActive = location.pathname === path;

    function handleClick() {
        navigate(path);
        if (setIsCollapsed) setIsCollapsed(true);
    }

    return (
        <div
            onClick={
                isLink
                    ? handleClick
                    : setIsCollapsed
                    ? () => setIsCollapsed(true)
                    : undefined
            }
            className={`flex items-center gap-2 p-3 hover:cursor-pointer hover:bg-gray-200 rounded-xl transition-all duration-200  ${
                isActive ? "bg-gray-300 font-semibold" : ""
            } ${customColor}`}
            {...props}
        >
            {Icon && <Icon />}
            <p>{label}</p>
        </div>
    );
}
