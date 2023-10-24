


//USER
export const currentUser= {
    username: 'haidangpham',
    name: 'Hai Dang',
    email: 'haidangpham582@gmail.com',
    avatar: '',
    playlists: [
        {   
            name: 'My Playlist #1',
            author: '',
            coverImage: require('../images/liked-playlist.png'),
            songIds:[1, 2, 3],
            duration: '',
            type: 'Playlist',
        },
        {   
            name: 'My Playlist #2',
            author: '',
            coverImage: require('../images/liked-playlist.png'),
            songIds:[1, 2, 3],
            duration: '',
            type: 'Playlist',
        },
        {   
            name: 'My Playlist #3',
            author: '',
            coverImage: require('../images/liked-playlist.png'),
            songIds:[1, 2, 3],
            duration: '',
            type: 'Playlist',
        },
    ],
}
currentUser.playlists.forEach(playlist => {
    playlist.author = currentUser.name;
});

//Artists
export const artists=[
    {   
        id: 1,
        name: 'Ed Sheeran',
        mthlyCount: '76,247,649',
        verified: true,
        albums: [],
    },
    {
        id: 2,
        name: 'Coldplay',
        mthlyCount: '66,290,514',
        verified: true,
        albums: [],
    },
    {
        id: 3,
        name: 'The Weeknd',
        mthlyCount: '105,660,539',
        verified: true,
        albums: [],
    }
]