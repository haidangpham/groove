// import { artists } from "./users"
// import { currentUser } from "./users";


//GET UNIQUE ID
import { v4 as uuid } from "uuid";
const uniqueId= uuid().slice(0,8);
console.log(uniqueId);

//USER RECENT PLAYLISTS
export const userPlaylists= [
    {   
        id: 1,
        uniqueId: 'd02bafdb',
        title: 'My Playlist #1',
        description: null,
        authorId: ['9d2c865a'],
        coverImage: require('../images/playlistCoverImgs/liked-playlist.png'),
        songIds:['047a58df', 'b403e6d1', '9d3a6d85','31e5f3c5','9d3a6d85','935189f8','31e5f3c5','9d3a6d85','935189f8','31e5f3c5','9d3a6d85','935189f8','31e5f3c5','9d3a6d85','935189f8','31e5f3c5','9d3a6d85','935189f8','31e5f3c5','9d3a6d85'],
        duration: '',
        type: 'Playlist',
        themeColor: '#60789e'
    },
    {   
        id: 2,
        uniqueId: '4a927a89',
        title: 'Idk, it\'s kinda dope',
        description: null,
        authorId: ['9d2c865a'],
        coverImage: require('../images/playlistCoverImgs/liked-playlist.png'),
        songIds:['8a087349', '31e5f3c5', '9d3a6d85'],
        duration: '',
        type: 'Playlist',
        themeColor: '#60789e'
    },
    {   
        id: 3,
        uniqueId: '2c6c6c95',
        title: 'My Playlist #3',
        description: null,
        authorId: ['9d2c865a'],
        coverImage: require('../images/playlistCoverImgs/liked-playlist.png'),
        songIds:['31e5f3c5', '935189f8', '9d3a6d85'],
        duration: '',
        type: 'Playlist',
        themeColor: '#60789e'
    },
    {   
        id: 4,
        uniqueId: 'd02bafdb',
        title: 'My Playlist #4',
        description: null,
        authorId: ['9d2c865a'],
        coverImage: require('../images/playlistCoverImgs/liked-playlist.png'),
        songIds:['935189f8', '31e5f3c5', '9d3a6d85'],
        duration: '',
        type: 'Playlist',
        themeColor: '#60789e'
    },
    {   
        id: 5,
        uniqueId: 'a9cb6333',
        title: 'My Playlist #5',
        description: null,
        authorId: ['9d2c865a'],
        coverImage: require('../images/playlistCoverImgs/liked-playlist.png'),
        songIds:['935189f8', '31e5f3c5', '9d3a6d85'],
        duration: '',
        type: 'Playlist',
        themeColor: '#60789e'
    },
    {   
        id: 6,
        uniqueId: '824e3987',
        title: 'My Playlist #6',
        description: null,
        authorId: ['9d2c865a'],
        coverImage: require('../images/playlistCoverImgs/liked-playlist.png'),
        songIds:['935189f8', '31e5f3c5', '9d3a6d85'],
        duration: '',
        type: 'Playlist',
        themeColor: '#60789e'
    },
    {   
        id: 7,
        uniqueId: '375c047d',
        title: 'V-Pop Hits',
        description: null,
        authorId: ['9d2c865a'],
        coverImage: require('../images/playlistCoverImgs/V-Pop-Hits-cover.jpg'),
        songIds:['8a087349','832801c2' ,'f36e5afa', '60aba40d', '01adb04c'],
        duration: '',
        type: 'Playlist',
        themeColor: '#60789e'
    },
]
export const globalPlaylists=[
    ...userPlaylists,
    {    
        id: 8,
        uniqueId: '7435bcd8',
        title: 'Chill Hits',
        description: 'Kick back to the best new and recent chill hits.',
        authorId: ['9d2cb826'],
        coverImage: require('../images/playlistCoverImgs/chill-hits-cover.jpg'),
        songIds:['0de36070','c0e575ca', 'f2d46ad6', 'd69983d6', '6840748d', '217d3406', '25e4d077','3a070e49'],
        duration: '',
        type: 'Playlist',
        themeColor: '#60789e'
    },
    {
        id: 9,
        uniqueId: '8227f292',
        title: 'V-Pop Hits',
        description: 'Những ca khúc nhạc Việt hot nhất 2023.',
        authorId: ['9d2cb826'],
        coverImage: require('../images/playlistCoverImgs/V-Pop-Hits-cover.jpg'),
        songIds:['8a087349','11d824c6', 'd9093b0c', 'e53a0a9f', 'd81a36b0', '46276a6f'],
        duration: '',
        type: 'Playlist',
        themeColor: '#60789e'
    },
    {
        id: 10,
        uniqueId: 'd839b189',
        title: 'Party Hits',
        description: 'A mix of the biggest pop, dance, and hip hop party songs.',
        authorId: ['9d2cb826'],
        coverImage: require('../images/playlistCoverImgs/party-hits-cover.jpg'),
        songIds:['8a087349'],
        duration: '',
        type: 'Playlist',
        themeColor: '#60789e'
    },
    {
        id: 11,
        uniqueId: '960fdcff',
        title: 'The Ultimate Hit Mix',
        description: 'Mixing the decades: 1990s, 2000s, 2010s and 2020s.',
        authorId: ['9d2cb826'],
        coverImage: require('../images/playlistCoverImgs/the-ultimate-hit-cover.jpg'),
        songIds:['8a087349'],
        duration: '',
        type: 'Playlist',
        themeColor: '#60789e'
    },
    {
        id: 11,
        uniqueId: '458fa796',
        title: 'Hit Rewind',
        description: 'Listen to all the tracks you\'ve been missing.',
        authorId: ['9d2cb826'],
        coverImage: require('../images/playlistCoverImgs/hit-rewind-cover.jpg'),
        songIds:['8a087349'],
        duration: '',
        type: 'Playlist',
        themeColor: '#60789e'
    },
]
export const recentPlaylists= [2,3,5,7,1,6]