import { atom } from 'recoil';
import { Musicsrc } from './interfaces/test';

export const isPlayingState = atom({
    key: 'isPlaying',
    default: false,
});

export const mutedState = atom({
    key: 'muted',
    default: false,
});

export const searchTermState = atom({
    key: 'searchterm',
    default: '',
});

export const volumeState = atom({
    key: 'volume',
    default: 50,
});

export const tabletMenuState = atom({
    key: 'tabletMenu',
    default: false,
});

export const shuffleState = atom({
    key: 'shuffle',
    default: false,
});

export const currentTimeState = atom({
    key: 'currentTime',
    default: 0,
});

export const audioDurrationState = atom({
    key: 'audioDurration',
    default: 0,
});

export const tabletFullScrenState = atom({
    key: 'tabletFullScreenState',
    default: false,
});

export const fullScreenState = atom({
    key: 'fullscreen',
    default: false,
});

export const logOutState = atom({
    key: 'logout',
    default: false,
});

export const musicGlobalState = atom<Musicsrc[]>({
    key: 'musicGlobalState',
    default: [],
});

export const indexState = atom({
    key: 'index',
    default: 0,
});

export const musicId = atom({
    key: 'musicId',
    default: 0,
});

export const shouldAddTimeState = atom({
    key: 'shouldAddTime',
    default: false,
});

export const shouldRewindState = atom({
    key: 'shouldRewindState',
    default: false,
});

export const globalImageState = atom<string[]>({
    key: 'globalImage',
    default: [],
});

export const musicNameState = atom<string[]>({
    key: 'musicName',
    default: [],
});
export const authorNameState = atom<string[]>({
    key: 'authorName',
    default: [],
});

export const showNavMobileState = atom({
    key: 'showNavMobileState',
    default: true,
});

export const musicPhotoState = atom({
    key: 'musicphoto',
    default: '',
});

export const clickState = atom({
    key: 'click',
    default: false,
});
