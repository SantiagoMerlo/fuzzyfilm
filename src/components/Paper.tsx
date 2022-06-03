import React from "react"

interface PaperProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
}

export default function Paper({ children, className, ...props }: PaperProps) {
    return <div className={`bg-white shadow-sm rounded-sm ${className}`} {...props}>
        {children}
    </div>
}