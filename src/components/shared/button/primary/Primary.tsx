import { Button } from "../../../base"
import { ButtonProps } from "../../../base/button/types"

export type PrimaryButtonProps = ButtonProps & {};

const primaryStyle = "border-black-primary bg-indigo-700 hover:bg-indigo-500 text-white hover:border-transparent disabled:bg-indigo-500";

export default function PrimaryButton({ children, className, ...props}: PrimaryButtonProps) {
    return (
        <Button className={`${primaryStyle} ${className}`} {...props}>
            { children }
        </Button>
    )
}