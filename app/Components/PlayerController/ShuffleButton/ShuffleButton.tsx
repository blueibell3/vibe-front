'use client';
import React from 'react';
import styles from './ShuffleButton.module.scss';

type Props = {
    onClick?: () => void;
}
const ShuffleButton = (props: Props) => {

    return (
        <div>
            <button className={styles.controlButton} onClick={props.onClick}>
                <img
                    src='/icons/shuffle.svg'
                    className={styles.icon}
                />
            </button>
        </div>
    )
}


export default ShuffleButton;
