import Link from "next/link";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

interface sidebar_item_properties {
    icon: IconType;
    label: string;
    active?: boolean;
    href: string;
}

const sidebar_item: React.FC<sidebar_item_properties> = ({
    icon: Icon,
    label,
    active,
    href
}) => {
    return (
        <Link
            href={href}
            className={twMerge(`
                flex
                flex-row
                items-center
                text-md
                font-medium
                w-full
                cursor-pointer
                h-auto
                gap-x-4
                hover:text-white
                text-neutral-400
                py-1
                transition
            `,
                active && "text-white"
            )}
        >
            <Icon size={26} />
        </Link>
    );
}

export default sidebar_item