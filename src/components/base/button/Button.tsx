import React from "react"
import { ButtonProps } from './types';

const styling = {
    expandible: 'button-hover-expand',
    nonExpandible: `py-2 px-4 font-semibold border rounded transition ease-in duration-200 transform outline:none`
};

const Button = ({
    children,
    expandible = false,
    className,
    ...props
}: ButtonProps) => {
    const baseClassname = expandible ? styling.expandible : styling.nonExpandible
    const finalClassname = `${baseClassname} ${className}`

    return (
        <button className={finalClassname} {...props}>
            {children}
        </button>
    );
}

export default Button