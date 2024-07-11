import styles from './Button.module.scss'


type Props = {
    title: string;
    type: "primary" | "secondary";
    width?: string;
    color?: string;
    className: string;
}

export default (props: Props) => {

    const classes = [styles.button, props.className]
    if (props.type == 'secondary') classes.push(styles.secondary)
    else classes.push(styles.primary)

    return (
        <button
            className={classes.join(' ').trim()}>
            {props.title}
        </button>
    )
}