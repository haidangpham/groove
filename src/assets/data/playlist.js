// import { artists } from "./users"
import { currentUser } from "./users";


//GET UNIQUE ID
// import { v4 as uuid } from "uuid";
// const uniqueId= uuid().slice(0,8);
// console.log(uniqueId);

//USER RECENT PLAYLISTS
export const userPlaylists= [
    {   
        id: 1,
        uniqueId: 'd02bafdb',
        name: 'My Playlist #1',
        author: currentUser.name,
        coverImage: require('../images/playlistCoverImgs/liked-playlist.png'),
        songIds:[1, 2, 3,2,3,1,2,3,1,2,3,1,2,3,1,2,3,1,2,3],
        duration: '',
        type: 'Playlist',
    },
    {   
        id: 2,
        uniqueId: '4a927a89',
        name: 'Idk, it\'s kinda dope',
        author: currentUser.name,
        coverImage: require('../images/playlistCoverImgs/liked-playlist.png'),
        songIds:[1, 2, 3],
        duration: '',
        type: 'Playlist',
    },
    {   
        id: 3,
        uniqueId: '2c6c6c95',
        name: 'My Playlist #3',
        author: currentUser.name,
        coverImage: require('../images/playlistCoverImgs/liked-playlist.png'),
        songIds:[1, 2, 3],
        duration: '',
        type: 'Playlist',
    },
    {   
        id: 4,
        uniqueId: 'd02bafdb',
        name: 'My Playlist #4',
        author: currentUser.name,
        coverImage: require('../images/playlistCoverImgs/liked-playlist.png'),
        songIds:[1, 2, 3],
        duration: '',
        type: 'Playlist',
    },
    {   
        id: 5,
        uniqueId: 'a9cb6333',
        name: 'My Playlist #5',
        author: currentUser.name,
        coverImage: require('../images/playlistCoverImgs/liked-playlist.png'),
        songIds:[1, 2, 3],
        duration: '',
        type: 'Playlist',
    },
    {   
        id: 6,
        uniqueId: '824e3987',
        name: 'My Playlist #6',
        author: currentUser.name,
        coverImage: require('../images/playlistCoverImgs/liked-playlist.png'),
        songIds:[1, 2, 3],
        duration: '',
        type: 'Playlist',
    },
    {   
        id: 7,
        uniqueId: '375c047d',
        name: 'My Playlist #7',
        author: currentUser.name,
        coverImage: require('../images/playlistCoverImgs/liked-playlist.png'),
        songIds:[1, 2, 3],
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
        author: currentUser.name,
        coverImage: require('../images/playlistCoverImgs/liked-playlist.png'),
        songIds:[1, 2, 3],
        duration: '',
        type: 'Playlist',
    }
]
export const recentPlaylists= [2,3,5,7,1,6]