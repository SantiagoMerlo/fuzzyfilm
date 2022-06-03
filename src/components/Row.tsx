import React from "react"

interface RowProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export default function Row({ children, className, ...props }: RowProps) {
    return <div className={`form-row ${className}`} {...props}>
        {children}
    </div>
}