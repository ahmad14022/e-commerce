import styles from './Select.module.scss'

type Options = {
    value: string,
    label: string
}

type PropsTypes = {
    label?: string,
    name: string,
    defaultValue?: string
    disabled?: boolean
    options: Options[]
}
const Select = (props: PropsTypes) => {
    const { label, name, defaultValue, disabled, options } = props
    return (
        <div className={styles.container}>
            <label htmlFor={name}>{label}</label>
            <select name={name} id={name} defaultValue={defaultValue} disabled={disabled} className={styles.container__select}>
                {options.map((option) => (
                    <option value={option.value} key={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    )
}

export default Select