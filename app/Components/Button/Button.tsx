import styles from './Button.module.scss'


type Props = {
    title: string;
    type: "primary" | "secondary";
    width?: string;
}

export default (props: Props) => {

    const classes = [styles.button]
    
    if (props.type == 'secondary') classes.push(styles.secondary)
    else classes.push(styles.primary)

    return (
        <button
            style={{width: `${props.width}` }} className={classes.join(' ').trim()}>
            {props.title}
        </button>
    )
}