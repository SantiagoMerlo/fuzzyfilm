import React from "react"

type GridSize = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' |'9' | '10' | '11' | '12' | 'none'

interface ColumnProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    mobile: GridSize,
    full: GridSize,
    spacing?: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12'
}

// analizar porque taiwlind no reconoce strings dinamicos
export default function Column({ children, className = '', mobile = '2', full = '5', spacing = '0', ...props }: ColumnProps) {
    return <div className={`grid md:grid-cols-${mobile} grid-cols-${full} gap-${spacing} ${className}`} {...props}>
        {children}
    </div>
}