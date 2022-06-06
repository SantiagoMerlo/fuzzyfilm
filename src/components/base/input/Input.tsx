import React from "react";
import { InputProps } from "./types";

const Input = React.forwardRef<any, InputProps>(
    (
        {
            value,
            id,
            label = "",
            helper,
            Icon,
            error,
            className,
            ...props
        },
        ref
    ) => (
        <div className={className}>
            {label && (
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    {label}
                </label>
            )}
            <div className="relative rounded-md shadow-sm">
                {Icon && (
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-500 sm:text-sm">{Icon}</span>
                    </div>
                )}
                <input
                    ref={ref}
                    value={value}
                    {...props}
                    className={`focus:ring-indigo-500 focus:border-indigo-500 block w-full ${Icon && "pl-7"
                        } border-gray-300 rounded-md`}
                />
            </div>
            <span className={`block pl-2 text-xs text-${error ? 'red' : 'gray'}-500 text-left `}>
                {error ?? helper}
            </span>
        </div>
    )
);

export default Input;
