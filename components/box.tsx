import { twMerge } from "tailwind-merge";

interface box_properties {
    children: React.ReactNode;
    className?: string;
}

const Box: React.FC<box_properties> = ({
    children,
    className
}) => {
    return (
        <div 
            className={twMerge(
                'bg-neutral-900',
                'rounded-lg',
                'w-full',
                'h-fit',
                className
            )}
        >
            {children}
        </div>
    );
}

export default Box