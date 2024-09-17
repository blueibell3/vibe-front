'use client'
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import styles from './AddButton.module.scss';
import Modal from '../Modal/Modal';
import axios from 'axios';

type FormValues = {
    playlistTitle: string;
};

const AddButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { register, handleSubmit, reset, getValues } = useForm<FormValues>();

    const handleOpenModal = () => setIsOpen(true);
    const handleCloseModal = () => {
        setIsOpen(false);
        reset();
    };

    const handleDone = () => {
        const data = getValues();
        if (!data.playlistTitle) {
            return;
        }
        setIsOpen(false);
        reset();
    };

    const token = document.cookie
        .split('; ')
        .find((row) => row.startsWith('token='))
        ?.split('=')[1];
    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        try {
            const response = await axios.post('https://vibe-backend-prrr.onrender.com/playlists', {
                playlistTitle: data.playlistTitle,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            });

            if (response.status !== 200) {
                throw new Error('Network response was not ok');
            }
            handleDone();
        } catch (error) {
            console.error('There was a problem with the axios operation:', error);
        }
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
                    <Modal
                        isOpen={isOpen}
                        onClose={handleCloseModal}
                        onDone={handleDone}
                        title='Add Playlist'
                    >
                        <form onSubmit={handleSubmit(onSubmit)} className={styles.addPlaylistTitle}>
                            <span className={styles.playlistText}>Add Playlist Title</span>
                            <input
                                className={styles.inputPlaylist}
                                type="text"
                                placeholder='Add title'
                                {...register('playlistTitle', { required: true })}
                            />

                        </form>
                    </Modal>
                </div>
            }
        </>
    );
}

export default AddButton;