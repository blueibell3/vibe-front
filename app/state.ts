import { atom } from 'recoil';

export interface Track {
  artist: string;
  name: string;
  photo: string;
  url: string;
}

export const playlistState = atom<Track[]>({
  key: 'playlistState',
  default: [
    {
      artist: 'Imagine dragons',
      name: '- Believer',
      photo: '/background/backImageFullScreeen.jpg',
      url: '/music/ImagineDragonsBeliever.mp3'
    },
    {
      artist: 'katana ',
      name: '- help me',
      photo: '/katana.jpg',
      url: '/music/MichaelKatanaHelpMe.mp3'
    },
    {
      artist: 'kaxidze',
      name: '- watermelon',
      photo: '/jansulKaxize.jpg',
      url: '/music/WatermelonJansulKaxidze.mp3'
    },
  ],
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