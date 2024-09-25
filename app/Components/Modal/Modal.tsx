'use client'

import React from 'react';
import styles from './Modal.module.scss';
import Button from '../Button/Button';

type Props = {
    title: string;
    isOpen: boolean;
    onClose: () => void;
    onDone?: () => void;
    children: React.ReactNode;
}

const Modal = (props: Props) => {
    if (!props.isOpen) return null;

    return (
        <>
            <div className={styles.reusableModal}>
                <div className={styles.addPlaylist}>
                    <span className={styles.addPlaylistText}>{props.title}</span>
                    <button onClick={props.onClose} className={styles.addPlaylistIcon}>
                        <img src="xicon.svg" alt="x" />
                    </button>
                </div>
                    {props.children}
                <div className={styles.modalButton}>
                    <div className={styles.cancel} onClick={props.onClose}>
                        <Button title={'cancel'} type={'secondary'} />
                    </div>
                    <div  className={styles.done} onClick={props.onDone}>
                        <Button  title={'done'} type={'primary'} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Modal;




{/* <form onSubmit={handleSubmit(onSubmit)} className={styles.addPlaylistTitle}>
<Modal
    isOpen={isOpen}
    onClose={handleCloseModal}
    onDone={handleDone}
    title='Add Playlist'
>
    <div className={styles.addPlaylistTitleText}>
        <span className={styles.playlistText}>Add Playlist Title</span>
    </div>
    <input
        className={styles.inputPlaylist}
        type="text"
        placeholder='Add title'
        {...register('name', { required: true })}
    />
</Modal>
</form> */}
