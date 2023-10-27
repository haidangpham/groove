// import { artists } from "./users"
import { currentUser } from "./users"

//USER RECENT PLAYLISTS
export const userPlaylists= [
    {   
        id: 1,
        name: 'My Playlist #1',
        author: currentUser.name,
        coverImage: require('../images/playlistCoverImgs/liked-playlist.png'),
        songIds:[1, 2, 3],
        duration: '',
        
        type: 'Playlist',
    },
    {   
        id: 2,
        name: 'My Playlist #2',
        author: currentUser.name,
        coverImage: require('../images/playlistCoverImgs/liked-playlist.png'),
        songIds:[1, 2, 3],
        duration: '',
        type: 'Playlist',
    },
    {   
        id: 3,
        name: 'My Playlist #3',
        author: currentUser.name,
        coverImage: require('../images/playlistCoverImgs/liked-playlist.png'),
        songIds:[1, 2, 3],
        duration: '',
        type: 'Playlist',
    },
    {   
        id: 4,
        name: 'My Playlist #4',
        author: currentUser.name,
        coverImage: require('../images/playlistCoverImgs/liked-playlist.png'),
        songIds:[1, 2, 3],
        duration: '',
        type: 'Playlist',
    },
    {   
        id: 5,
        name: 'My Playlist #5',
        author: currentUser.name,
        coverImage: require('../images/playlistCoverImgs/liked-playlist.png'),
        songIds:[1, 2, 3],
        duration: '',
        type: 'Playlist',
    },
    {   
        id: 6,
        name: 'My Playlist #6',
        author: currentUser.name,
        coverImage: require('../images/playlistCoverImgs/liked-playlist.png'),
        songIds:[1, 2, 3],
        duration: '',
        type: 'Playlist',
    },
    {   
        id: 7,
        name: 'My Playlist #7',
        author: currentUser.name,
        coverImage: require('../images/playlistCoverImgs/liked-playlist.png'),
        songIds:[1, 2, 3],
        duration: '',
        type: 'Playlist',
    },
]
export const recentPlaylists= [2,3,5,7,1,6]