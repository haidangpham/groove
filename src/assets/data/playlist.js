// import { artists } from "./users"
import { currentUser } from "./users";


//GET UNIQUE ID
import { v4 as uuid } from "uuid";
const uniqueId= uuid().slice(0,8);
console.log(uniqueId);

//USER RECENT PLAYLISTS
export const userPlaylists= [
    {   
        id: 1,
        uniqueId: 'd02bafdb',
        name: 'My Playlist #1',
        author: currentUser.name,
        coverImage: require('../images/playlistCoverImgs/liked-playlist.png'),
        songIds:['935189f8', '60aba40d', '9d3a6d85','31e5f3c5','9d3a6d85','935189f8','31e5f3c5','9d3a6d85','935189f8','31e5f3c5','9d3a6d85','935189f8','31e5f3c5','9d3a6d85','935189f8','31e5f3c5','9d3a6d85','935189f8','31e5f3c5','9d3a6d85'],
        duration: '',
        type: 'Playlist',
    },
    {   
        id: 2,
        uniqueId: '4a927a89',
        name: 'Idk, it\'s kinda dope',
        author: currentUser.name,
        coverImage: require('../images/playlistCoverImgs/liked-playlist.png'),
        songIds:['8a087349', '31e5f3c5', '9d3a6d85'],
        duration: '',
        type: 'Playlist',
    },
    {   
        id: 3,
        uniqueId: '2c6c6c95',
        name: 'My Playlist #3',
        author: currentUser.name,
        coverImage: require('../images/playlistCoverImgs/liked-playlist.png'),
        songIds:['31e5f3c5', '935189f8', '9d3a6d85'],
        duration: '',
        type: 'Playlist',
    },
    {   
        id: 4,
        uniqueId: 'd02bafdb',
        name: 'My Playlist #4',
        author: currentUser.name,
        coverImage: require('../images/playlistCoverImgs/liked-playlist.png'),
        songIds:['935189f8', '31e5f3c5', '9d3a6d85'],
        duration: '',
        type: 'Playlist',
    },
    {   
        id: 5,
        uniqueId: 'a9cb6333',
        name: 'My Playlist #5',
        author: currentUser.name,
        coverImage: require('../images/playlistCoverImgs/liked-playlist.png'),
        songIds:['935189f8', '31e5f3c5', '9d3a6d85'],
        duration: '',
        type: 'Playlist',
    },
    {   
        id: 6,
        uniqueId: '824e3987',
        name: 'My Playlist #6',
        author: currentUser.name,
        coverImage: require('../images/playlistCoverImgs/liked-playlist.png'),
        songIds:['935189f8', '31e5f3c5', '9d3a6d85'],
        duration: '',
        type: 'Playlist',
    },
    {   
        id: 7,
        uniqueId: '375c047d',
        name: 'V-Pop Hits',
        author: currentUser.name,
        coverImage: require('../images/playlistCoverImgs/V-Pop-Hits-cover.jpg'),
        songIds:['8a087349','832801c2' ,'f36e5afa', '60aba40d', '01adb04c'],
        duration: '',
        type: 'Playlist',
    },
]
export const globalPlaylists=[
    ...userPlaylists,
    {    
        id: 8,
        uniqueId: '7435bcd8',
        name: 'My Playlist #8',
        author: 'Groove',
        coverImage: require('../images/playlistCoverImgs/liked-playlist.png'),
        songIds:['935189f8', '31e5f3c5', '9d3a6d85'],
        duration: '',
        type: 'Playlist',
    },
    {
        id: 9,
        uniqueId: '7435bcd8',
        name: 'V-Pop Hits',
        author: 'Groove',
        coverImage: require('../images/playlistCoverImgs/liked-playlist.png'),
        songIds:['8a087349'],
        duration: '',
        type: 'Playlist',
    },
]
export const recentPlaylists= [2,3,5,7,1,6]