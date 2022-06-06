import React from "react"
import { PaperProps } from "./types"

export default function Paper({ children, className, ...props }: PaperProps) {
    return <div className={`bg-white shadow-sm rounded-md overflow-hidden ${className}`} {...props}>
        {children}
    </div>
}