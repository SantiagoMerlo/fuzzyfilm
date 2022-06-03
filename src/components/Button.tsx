import React from "react"

const variantsClasses = {
    'primary': 'border-black-primary bg-indigo-700 hover:bg-indigo-500 text-white hover:border-transparent disabled:bg-indigo-500',
}

interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    variant?: 'primary',
    expandible?: boolean
}

const Button = ({
    children,
    variant = 'primary',
    className = '',
    expandible = false,
    ...props
}: ButtonProps) => (
    <button
        className={`
        ${expandible ?
                `button-hover-expand ${variantsClasses[variant]}`
                :
                `py-2 px-4 bg-transparent font-semibold border rounded transition ease-in duration-200 transform outline:none  ${variantsClasses[variant]}`
            }
        ${className}`}
        {...props}
    >
        {children}
    </button>
)

export default Button