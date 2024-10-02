import { useEffect, useRef, useState } from 'react';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { useRecoilState } from 'recoil';
import {
    indexState,
    isPlayingState,
    musicId,
    tabletMenuState,
} from '@/app/state';
import { searchTermState } from '@/app/state';
import Bin from '../Bin/Bin';
import DropDownMenu from '../DropDownMenu/DropDownMenu';

import styles from './MusicCard.module.scss';

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
    const [menuStyles, setMenuStyles] = useState<React.CSSProperties>({
        position: 'absolute',
        top: '0',
        left: '20px', // Default left for larger screens
    });
    const [globalId] = useRecoilState(musicId);
    const musicCardRef = useRef<HTMLDivElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);
    const [searchTerm] = useRecoilState(searchTermState);
    const [isOpen] = useRecoilState(tabletMenuState);
    const [isPlaying] = useRecoilState(isPlayingState);
    const [index] = useRecoilState(indexState);

    useEffect(() => {
        // Dynamically check screen size and update menu style accordingly
        const updateMenuPosition = () => {
            if (window.matchMedia('(max-width: 768px)').matches) {
                // For mobile screens
                setMenuStyles({
                    position: 'absolute',
                    top: '0',
                    left: '-250px', // Mobile size left
                });
            } else {
                // For larger screens
                setMenuStyles({
                    position: 'absolute',
                    top: '0',
                    left: '20px', // Default left for larger screens
                });
            }
        };

        // Call once on component mount and also when resizing window
        updateMenuPosition();
        window.addEventListener('resize', updateMenuPosition);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', updateMenuPosition);
        };
    }, []);

    useEffect(() => {
        if (props.menuOpen && musicCardRef.current) {
            const rect = musicCardRef.current.getBoundingClientRect();
            if (rect.left >= window.innerWidth - rect.right) {
                setMenuStyles((prevStyles) => ({
                    ...prevStyles,
                    left: '-250px', // Ensure proper alignment for small screens
                }));
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

    const handleEditClick = (event: React.MouseEvent) => {
        event.stopPropagation();
        event.preventDefault();
        if (props.toggleMenu) {
            props.toggleMenu();
        }
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
                                src="/icons/pause.svg"
                                alt="Pause Button"
                            />
                        ) : (
                            <img
                                className={styles.image}
                                src="/icons/play.svg"
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
                {props.deleteOrLike && <Bin musicId={props.id} />}
                <div
                    onClick={handleEditClick}
                    className={searchTerm || isOpen ? '' : styles.dots}
                >
                    <BiDotsVerticalRounded size={24} color="white" />
                    {props.menuOpen && (
                        <div
                            ref={menuRef}
                            style={menuStyles}
                            className={styles.menu}
                        >
                            <DropDownMenu id={props.id} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MusicCard;
