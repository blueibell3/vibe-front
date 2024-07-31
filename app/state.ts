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
      artist: 'Imagine Dragons',
      name: 'Believer',
      photo: '/photos/believer.jpg',
      url: '/music/ImagineDragonsBeliever.mp3'
    },
    {
      artist: 'katana',
      name: 'Song 2',
      photo: '/photos/song2.jpg',
      url: '/music/MichaelKatanaHelpMe.mp3'
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
