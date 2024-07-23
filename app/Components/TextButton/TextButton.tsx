import styles from './TextButton.module.scss'
type Props = {
    title: string;
    mode?: 'fill' | 'text';
    width?: string;
    backgroundColor?: string
}
export default (props: Props) => {
    const classes = []
    if (props.mode == 'text') classes.push(styles.text)
    else classes.push(styles.fill)
    return (
        <button style={{ width: `${props.width}`, backgroundColor: `${props.backgroundColor}` }} className={classes.join('').trim()}>{props.title}</button>
    )
}