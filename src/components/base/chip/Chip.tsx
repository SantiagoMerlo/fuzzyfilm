import React from 'react'
import { ChipProps } from './types'

export default function Chip({
    children,
    className
}: ChipProps) {

    return <div className={`flex flex-wrap justify-center space-x-2 ${className}`}>
        <span
            className={`px-3 py-1 rounded-full text-indigo-600 bg-indigo-200 font-semibold text-sm flex align-center w-max items-center`}>
            {children}
        </span>
    </div>
}
