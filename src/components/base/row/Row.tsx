import React from "react"
import { RowProps } from "./types"

export default function Row({ children, className, ...props }: RowProps) {
    return <div className={`form-row ${className}`} {...props}>
        {children}
    </div>
}