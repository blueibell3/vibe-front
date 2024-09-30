import axios from 'axios';
import { Key } from 'react';
import { atom } from 'recoil';
import { Track } from './types/type';



export const playlistState = atom<Track[]>({
  key: 'playlistState', 
  default: [
  ], 
});


// export const playlistState = atom<Track[]>({
//   key: 'playlistState',
//   default: [
//     {
//       artist: 'Imagine dragons',
//       name: '- Believer',
//       photo: '/background/backImageFullScreeen.jpg',
//       url: '/music/ImagineDragonsBeliever.mp3',
//     },
//     {
//       artist: 'Katana',
//       name: '- Help Me',
//       photo: '/katana.jpg',
//       url: '/music/MichaelKatanaHelpMe.mp3',
//     },
//     {
//       artist: 'Kaxidze',
//       name: '- Watermelon',
//       photo: '/jansulKaxize.jpg',
//       url: '/music/WatermelonJansulKaxidze.mp3',
//     },
//     {
//       artist: 'Imagine dragons',
//       name: '- Believer',
//       photo: '/background/backImageFullScreeen.jpg',
//       url: '/music/ImagineDragonsBeliever.mp3',
//     },
//     {
//       artist: 'Eminem',
//       name: '- lose yourself',
//       photo: '/Eminem.jpg',
//       url: '/music/eminem.mp3',
//     },

//     {
//       artist: 'Kaxidze',
//       name: '- Watermelon',
//       photo: '/jansulKaxize.jpg',
//       url: '/music/WatermelonJansulKaxidze.mp3',
//     },
//   ],
// });



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