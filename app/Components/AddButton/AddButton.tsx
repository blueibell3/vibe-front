'use client';
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import Button from '../Button/Button';
import styles from './AddButton.module.scss';

type Playlist = {
    id: number;
    name: string;
    description?: string;
    lastName: string;
};

type PlaylistFormData = {
    name: string;
};

type AddButtonProps = {
    onPlaylistCreated: (newPlaylist: Playlist) => void;
};

const AddButton: React.FC<AddButtonProps> = ({ onPlaylistCreated }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { register, handleSubmit, reset, getValues } = useForm<PlaylistFormData>();

    const handleOpenModal = () => setIsOpen(true);
    const handleCloseModal = () => {
        setIsOpen(false);
        reset();
    };

    const handleDone = (newPlaylist: Playlist) => {
        const data = getValues();
        if (!data.name) {
            return;
        }
        onPlaylistCreated(newPlaylist); 
        setIsOpen(false);
        reset();
    };

    const onSubmit: SubmitHandler<PlaylistFormData> = async (values) => {
        const data = new FormData();
        data.append('name', values.name);

        try {
            const token = document.cookie
                .split('; ')
                .find((row) => row.startsWith('token='))
                ?.split('=')[1];

            const response = await axios.post('https://vibetunes-backend.onrender.com/playlist', data, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.status === 201) {
                const newPlaylist: Playlist = response.data;
                handleDone(newPlaylist);
            }
        } finally {
            setIsOpen(false);
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
            {isOpen && (
                <div className={styles.reausableModalContainer}>
                    <div className={styles.reusableModal}>
                        <div className={styles.addPlaylist}>
                            <span className={styles.addPlaylistText}>Add Playlist</span>
                            <button onClick={handleCloseModal} className={styles.addPlaylistIcon}>
                                <img src="xicon.svg" alt="x" />
                            </button>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className={styles.addPlaylistTitle}>
                            <div className={styles.addPlaylistTitleText}>
                                <span className={styles.playlistText}>Add Playlist Title</span>
                            </div>
                            <input
                                className={styles.inputPlaylist}
                                type="text"
                                placeholder="Add title"
                                {...register('name', { required: true })}
                                title="Add Playlist"
                            />
                            <div className={styles.modalButton}>
                                <div className={styles.cancel} onClick={handleCloseModal}>
                                    <Button title={'cancel'} type={'secondary'} />
                                </div>
                                <div className={styles.done}>
                                    <Button title={'done'} type={'primary'} />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default AddButton;
