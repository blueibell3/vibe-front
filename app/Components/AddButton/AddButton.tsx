'use client'
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import styles from './AddButton.module.scss';
import Modal from '../Modal/Modal';
import axios from 'axios';
import Button from '../Button/Button';

type FormValues = {
    name: string;
    isOpen: boolean;
    onClose: () => void;
    onDone: () => void;
};

const AddButton = (props: FormValues) => {
    const [isOpen, setIsOpen] = useState(false);
    const { register, handleSubmit, reset, getValues } = useForm<FormValues>();

    const handleOpenModal = () => setIsOpen(true);
    const handleCloseModal = () => {
        setIsOpen(false);
        reset();
    };

    const handleDone = () => {
        const data = getValues();
        if (!data.name) {
            return;
        }
        setIsOpen(false);
        reset();
    };


    const onSubmit: SubmitHandler<FormValues> = async (values: FormValues) => {
        console.log(values);

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
                    Authorization: `Bearer ${token}`
                }
            });

            // if (response.status !== 200) {
            //     throw new Error('Network response was not ok');
            // }
            handleDone();
        } finally {
            // handleDone() ;
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
            {
                isOpen &&
                <div className={styles.reausableModalContainer}>
                    <div className={styles.reusableModal}>
                        <div className={styles.addPlaylist}>
                            <span className={styles.addPlaylistText}>Add Playlist</span>
                            <button onClick={props.onClose} className={styles.addPlaylistIcon}>
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
                                placeholder='Add title'
                                {...register('name', { required: true })}
                                 title='Add Playlist'
                                 />
                            <div className={styles.modalButton}>
                                <div className={styles.cancel} onClick={props.onClose}>
                                    <Button title={'cancel'} type={'secondary'} />
                                </div>
                                <div className={styles.done} onClick={props.onDone}>
                                    <Button title={'done'} type={'primary'} />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            }
        </>
    );
}

export default AddButton;