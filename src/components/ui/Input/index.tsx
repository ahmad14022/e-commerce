import styles from './Input.module.scss'

type PropsTypes = {
    label?: string,
    name: string,
    type: string,
    placeholder?: string
    defaultValue?: string
    disabled?: boolean
}

const Input = (props: PropsTypes) => {
    const { label, name, type, placeholder, defaultValue, disabled } = props
    return (
        <div className={styles.container}>
            {label && <label htmlFor={name}>{label}</label>}
            <input name={name} placeholder={placeholder} id={name} type={type} defaultValue={defaultValue} disabled={disabled} className={styles.container__input} />
        </div>
    )
}

export default Input