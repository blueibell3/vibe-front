import { atom } from 'recoil';

export interface Track {
  artist: string;
  name: string;
  photo: string;
  url: string;
  duration?: number; // Optional duration field
}

export const playlistState = atom<Track[]>({
  key: 'playlistState',
  default: [
    {
      artist: 'Imagine dragons',
      name: '- Believer',
      photo: '/background/backImageFullScreeen.jpg',
      url: '/music/ImagineDragonsBeliever.mp3',
      duration: 204 // Add duration in seconds if available
    },
    {
      artist: 'Katana',
      name: '- Help Me',
      photo: '/katana.jpg',
      url: '/music/MichaelKatanaHelpMe.mp3',
      duration: 182
    },
    {
      artist: 'Kaxidze',
      name: '- Watermelon',
      photo: '/jansulKaxize.jpg',
      url: '/music/WatermelonJansulKaxidze.mp3',
      duration: 198
    },
  ],
});

// Other atoms as before...


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