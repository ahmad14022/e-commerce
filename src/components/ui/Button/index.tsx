import { signIn } from "next-auth/react"
import styles from './Button.module.scss'

type PropsTypes = {
    type: "button" | "submit" | 'reset' |undefined;
    onClick?: () => void;
    children: React.ReactNode;
    variant?: string;
    className?: string
}

const Button = (props: PropsTypes) => {
    const {type, onClick, children, variant = 'primary', className} = props
    return (
        <button type={type} onClick={onClick} className={`${styles.button} ${styles[variant]} ${className}`}>{children}</button>
    )
}

export default Button