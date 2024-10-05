import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface button_properties
    extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

const Button = forwardRef <HTMLButtonElement, button_properties>(({
    className,
    children,
    disabled,
    type = "button",
    ...props
}, ref) => {
    return (
        <button
            type={type}
            className={twMerge(`
                rounded-full
                w-full
                bg-green-700
                text-black
                font-bold
                border
                border-transparent
                px-3
                py-3
                disabled:cursor-not-allowed
                disabled:opacity-50
                hover:opacity-75
                transition
            `,
                className
            )}
            disabled={disabled}
            ref={ref}
            {...props}
        >
            {children}
        </button>
    )
})

Button.displayName = "Button";

export default Button;