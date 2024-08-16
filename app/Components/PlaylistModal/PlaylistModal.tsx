'use client'

import React, { useState } from 'react';
import styles from './PlaylistModal.module.scss';
import Button from '../Button/Button';

type Props = {
    isOpen: boolean;
    onClose: () => void;
    onDone: () => void;
    playlistTitle: string;
    setPlaylistTitle: (title: string) => void;
}

const PlaylistModal = (props: Props) => {

    if (!props.isOpen) return null;


    return (
        <>
            <div className={styles.reusableModal}>
                <div className={styles.addPlaylist}>
                    <span className={styles.addPlaylistText}>Add Playlist</span>
                    <button onClick={props.onClose} className={styles.addPlaylistIcon}>
                        <img src="xicon.svg" alt="x" />
                    </button>
                </div>
                <div className={styles.addPlaylistTitle}>
                    <span className={styles.playlistText}>Add playlist Title</span>
                    <input className={styles.inputPlaylist} type="text" placeholder='add title' value={props.playlistTitle}
                        onChange={(e) => props.setPlaylistTitle(e.target.value)} />
                </div>
                <div className={styles.modalButton}>
                    <div className={styles.cancel} onClick={props.onClose}>
                        <Button title={'cancel'} type={'secondary'} />
                    </div>
                    <div className={styles.done} onClick={props.onDone}>
                        <Button title={'done'} type={'primary'} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default PlaylistModal 