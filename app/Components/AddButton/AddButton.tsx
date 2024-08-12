'use client'
import React, { useState } from 'react';
import styles from './AddButton.module.scss';
import ReusableModal from '../PlaylistModal/PlaylistModal';



const AddButton = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [playlistTitle, setPlaylistTitle] = useState('');

    const handleOpenModal = () => setIsOpen(true);
    const handleCloseModal = () => {
        setIsOpen(false)
        setPlaylistTitle('');
    };
    const handleDone = () => {
        console.log('Playlist Title:', playlistTitle);
        setIsOpen(false);
        setPlaylistTitle('');
    };

    return (
        <>
            <div className={styles.button}>
                <div className={styles.buttonStyle}>
                    <div onClick={handleOpenModal} className={styles.addButton}>
                        <img className={styles.addButtonImg} src="addbuttonimg.svg" alt="add" />
                    </div>
                    <div className={styles.createPlaylist}>
                        <span className={styles.createPlaylistText}>Create Playlist</span>
                    </div>
                </div>
            </div>
            {
                isOpen &&
                <div className={styles.reausableModalContainer}>
                    <ReusableModal
                        isOpen={isOpen}
                        onClose={handleCloseModal}
                        onDone={handleDone}
                        playlistTitle={playlistTitle}
                        setPlaylistTitle={setPlaylistTitle} />
                </div>
            }
        </>
    )
}

export default AddButton