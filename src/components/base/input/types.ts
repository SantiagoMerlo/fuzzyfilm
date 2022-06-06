export interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label?: string
    Icon?: React.ReactNode | undefined
    helper?: string
    error?: string
}