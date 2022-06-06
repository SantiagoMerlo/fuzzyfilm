export type ButtonProps = WithChildren & {
	onClick?: () => void
	disabled?: boolean
	expandible?: boolean
	className?: string
};