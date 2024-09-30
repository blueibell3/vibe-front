'use client';
import React from 'react';
import styles from './ShuffleButton.module.scss';
import { useRecoilState } from 'recoil';
import { shuffleState } from '@/app/state';


const ShuffleButton = () => {
    const [shuffle,setShuffle] = useRecoilState(shuffleState)
    const shuffleFunc = () => {
        setShuffle(!shuffle)
    }
    return (
        <div>
            <button className={styles.controlButton}>
                {shuffle ? <img src='/icons/pinkShuffle.svg'  onClick={shuffleFunc}/>
                :
                 <img
                    onClick={shuffleFunc}
                    src='/icons/shuffle.svg'
                    className={styles.icon}
                />}
               
            </button>
        </div>
    )
}


export default ShuffleButton;