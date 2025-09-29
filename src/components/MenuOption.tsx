import { useNavigate } from "react-router";

interface MenuOptionProps extends React.HTMLAttributes<HTMLElement> {
    Icon?: React.ComponentType;
    label: string;
    isLink?: boolean;
    customColor?: string;
}

export default function MenuOption({
    Icon,
    label,
    isLink = true,
    customColor,
    ...props
}: MenuOptionProps) {
    const navigate = useNavigate();

    function handleClick() {
        const path = `/${label.toLowerCase()}`;

        navigate(path);
    }

    return (
        <div
            onClick={isLink ? handleClick : undefined}
            className={`flex items-center gap-2 p-3 hover:cursor-pointer hover:bg-gray-200 rounded-xl transition-all duration-200 ${customColor}`}
            {...props}
        >
            {Icon && <Icon />}
            <p>{label}</p>
        </div>
    );
}
