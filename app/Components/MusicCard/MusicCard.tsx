import { useEffect, useRef, useState } from 'react';
import { useParams } from 'next/navigation';

import styles from './MusicCard.module.scss';


import { useRecoilState } from 'recoil';
import {
    clickState,
    indexState,
    isPlayingState,
    musicId,
    tabletMenuState,
} from '@/app/state';
import { searchTermState } from '@/app/state';
import axios from 'axios';


interface Props {
    image: string;
    title: string;
    teamName: string;
    deleteOrLike: boolean;
    id: number;
    onClick: () => void;
    isPlaying: boolean;
    index: number;
    menuOpen: boolean;
    toggleMenu: () => void;
}

const MusicCard = (props: Props) => {
    const [showModal, setShowModal] = useState(false);
    const [, setIsDeleted] = useState(false);
    const [menuStyles, setMenuStyles] = useState<React.CSSProperties>({
        position: 'absolute',
        top: '0',
        left: '20px',
    });
    const [globalId] = useRecoilState(musicId);
    const musicCardRef = useRef<HTMLDivElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);
    const [searchTerm] = useRecoilState(searchTermState);
    const [click, setClick] = useRecoilState(clickState);
    const [isOpen] = useRecoilState(tabletMenuState);
    const params = useParams();
    const [isPlaying] = useRecoilState(isPlayingState);
    const [index] = useRecoilState(indexState);
    useEffect(() => {
        if (props.menuOpen && musicCardRef.current) {
            const rect = musicCardRef.current.getBoundingClientRect();

            if (rect.left >= window.innerWidth - rect.right) {
                setMenuStyles({
                    position: 'absolute',
                    top: '0',
                    left: '-250px',
                });
            }
        }
    }, [props.menuOpen]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node) &&
                musicCardRef.current &&
                !musicCardRef.current.contains(event.target as Node)
            ) {
                props.toggleMenu();
            }
        };

        if (props.menuOpen) {
            document.addEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [props.menuOpen, props.toggleMenu]);

    const data = {
        musicId: props.id,
        playlistId: Number(params.id),
    };

    const handleDelete = async () => {
        try {
            await axios.delete('/playlists/musicId', {
                data,
            });
            setClick(!click);
            setIsDeleted(true);
        } catch (error) {
            alert(error);
        } finally {
            setShowModal(false);
        }
    };

    const handleEditClick = (event: React.MouseEvent) => {
        event.stopPropagation();
        event.preventDefault();
        if (props.toggleMenu) {
            props.toggleMenu();
        }
    };
    const deleteClick = (event: React.MouseEvent) => {
        event.stopPropagation();
        event.preventDefault();
        setShowModal(!showModal);
    };

    return (
        <div
            className={styles.listItem}
            ref={musicCardRef}
            onClick={props.onClick}
        >
            <div className={styles.photo}>
                <div
                    style={{ backgroundImage: `url(${props.image})` }}
                    className={styles.itemImageWrapper}
                >
                    <div className={styles.itemHoverPhoto}>
                        {isPlaying &&
                        props.index === index &&
                        globalId === props.id ? (
                            <img
                                className={styles.image}
                                src="/allFolders/PlayerControler/Play.svg"
                                alt="Pause Button"
                            />
                        ) : (
                            <img
                                className={styles.image}
                                src="/allFolders/PlayerControler/Pause.svg"
                                alt="Play Button"
                            />
                        )}
                    </div>
                </div>
                <div className={styles.musicCardTitle}>
                    <span className={styles.musicCardName}>{props.title}</span>
                    <span className={styles.musicCardTeam}>
                        {props.teamName}
                    </span>
                </div>
            </div>
            <div
                className={
                    searchTerm || isOpen
                        ? styles.button
                        : styles.buttonsContainer
                }
            >
                {props.deleteOrLike && (
                    <div onClick={deleteClick}>
                        {/* <DeleteBox
                            id={props.id}
                            setRemove={() => setShowModal(showModal)}
                            remove={showModal}
                            onConfirm={handleDelete}
                        /> */}
                    </div>
                )}
                <div
                    onClick={handleEditClick}
                    className={searchTerm || isOpen ? '' : styles.dots}
                >
                    {/* <BiDotsVerticalRounded size={24} color="white" /> */}
                    {props.menuOpen && (
                        <div
                            ref={menuRef}
                            style={menuStyles}
                            className={styles.menu}
                        >
                            {/* <DropDownMenu id={props.id} /> */}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MusicCard;
