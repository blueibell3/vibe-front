import { atom } from 'recoil';

export type Track = {
  artist: string;
  id: number;
  name: string;
  artistName: string;
  photo: {
    url: string;
  };
  url: string;
}

export const playlistState = atom<Track[]>({
  key: 'playlistState',
  default: [],
});



export const currentTrackIndexState = atom<number>({
  key: 'currentTrackIndexState',
  default: 0,
});

export const volumeState = atom<number>({
  key: 'volumeState',
  default: 50,
});

export const isPlayingState = atom<boolean>({
  key: 'isPlayingState',
  default: false,
});

export const isUpState = atom<boolean>({
  key: 'isUpState',
  default: false
})

export const isShufflingState = atom<boolean>({
  key: 'isShufflingState',
  default: false,
});

export const currentTimeState = atom<number>({
  key: 'currentTimeState',
  default: 0,
});

export const isFullscreenState = atom<boolean>({
  key: 'isFullscreenState',
  default: false,
});

export const tabletFullscreenState = atom<boolean>({
  key: 'tabletFullscreenState',
  default: false,
});

export const isMutedState = atom<boolean>({
  key: 'isMutedState',
  default: false,
});

export const globalMusicState = atom<number>({
  key: 'globalmusic',
  default: 0
})

export const clickState = atom<boolean>({
  key: 'click',
  default: false
})