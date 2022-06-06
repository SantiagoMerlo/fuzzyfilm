type LoadingProps = {
    className?: string
}

export default function Loading({ className } : LoadingProps ) {
    return <svg className={`animate-spin h-5 w-5 mr-3 ${className}`} viewBox="0 0 24 24" />
}