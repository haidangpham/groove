
const songs=[
    {
        id: 1,
        uniqueId: '935189f8',
        title: 'Galway Girl',
        coverImage: require('../images/albumCoverImgs/divide-cover.jpg'),
        authorId: ['9e78406f'],
        albumId: '3e25f1d4',
        releaseDate: 'Mar 3, 2017',
        duration: '2:50',
        playCount: '1,222,787,439',
        src: require('./data/GalwayGirl-EdSheeran.mp3'),
        type: 'Song',
    },
    {
        id: 2,
        uniqueId: '31e5f3c5',
        title: 'I Feel It Coming',
        coverImage: require('../images/albumCoverImgs/starboy-cover.jpg'),
        authorId: ['a55c21b4'],
        albumId: '72a2ef1b',
        releaseDate: 'Nov 25, 2016',
        duration: '4:29',
        playCount: '1,583,524,512',
        src: require('./data/I Feel It Coming-The Weeknd.mp3'),
        type: 'Song',
    },
    {
        id: 3,
        uniqueId: '9d3a6d85',
        title: 'Counting Stars',
        coverImage: require('../images/albumCoverImgs/native-cover.jpg'),
        authorId: ['1c0a1523'],
        albumId: '815a6ecd',
        releaseDate: 'Nov 25, 2016',
        duration: '4:17',
        playCount: '1,583,524,512',
        src: require('./data/Counting Stars - OneRepublic.mp3'),
        type: 'Song',
    },
    {
        id: 4,
        uniqueId: '8a087349',
        title: 'Anh Là Ngoại Lệ Của Em',
        coverImage: require('../images/albumCoverImgs/anh-la-ngoai-le-cua-em-cover.jpg'),
        authorId: ['3e572185'],
        albumId: '815a6ecd',
        releaseDate: 'Oct 05, 2023',
        duration: '3:08',
        playCount: '1,583,524,512',
        src: require('./data/AnhLaNgoaiLeCuaEm-PhuongLy.mp3'),
        type: 'Song',
        themeColor: 'rgba(185,11,33,255)'
    },
    {
        id: 5,
        uniqueId: 'f36e5afa',
        title: 'Túy Âm',
        coverImage: require('../images/albumCoverImgs/TuyAm-cover.jpg'),
        authorId: ['4b60eda5'],
        albumId: '72a2ef1b',
        releaseDate: 'Jan 01, 2020',
        duration: '3:22',
        playCount: '7,149,361',
        src: require('./data/TuyAm-XesiMasewNhatNguyen.mp3'),
        type: 'Song',
    },
    {
        id: 5,
        uniqueId: '60aba40d',
        title: 'Hãy Trao Cho Anh',
        coverImage: require('../images/albumCoverImgs/HayTraoChoAnh-cover.jpg'),
        authorId: ['99e464ae'],
        albumId: '72a2ef1b',
        releaseDate: 'Jul 02, 2019',
        duration: '4:05',
        playCount: '7,149,361',
        src: require('./data/HayTraoChoAnh-SonTungMTPSnoopDogg.mp3'),
        type: 'Song',
    },
    {
        id: 6,
        uniqueId: '832801c2',
        title: 'Từng Quen',
        coverImage: require('../images/albumCoverImgs/TungQuen-cover.jpg'),
        authorId: ['a5631d0f'],
        albumId: '72a2ef1b',
        releaseDate: 'Oct 25, 2023',
        duration: '2:55',
        playCount: '4,681,069',
        src: require('./data/TungQuen-WrenEvansitsnk.mp3'),
        type: 'Song',
    },
    {
        id: 7,
        uniqueId: '01adb04c',
        title: 'Ngủ Một Mình (tình rất tình)',
        coverImage: require('../images/albumCoverImgs/NguMotMinh-cover.jpg'),
        authorId: ['a5a46b52'],
        albumId: '3e25f1d4',
        releaseDate: 'Dec 15, 2022',
        duration: '3:12',
        playCount: '14,737,138',
        src: require('./data/NguMotMinh-HIEUTHUHAINegavKewtiie.mp3'),
        type: 'Song',
    },
    {
        id: 8,
        uniqueId: '0de36070',
        title: 'Cheating On You',
        coverImage: require('../images/albumCoverImgs/cheating-on-you-cover.jpg'),
        authorId: ['fbba52e1'],
        albumId: '3e25f1d4',
        releaseDate: 'Oct 1, 2019',
        duration: '3:16',
        playCount: '349,259,395',
        src: require('./data/CheatingOnYou-CharliePuth.mp3'),
        type: 'Song',
        themeColor: 'rgba(117,117,117,255)'
    },
    {
        id: 9,
        uniqueId: 'f2d46ad6',
        title: 'Before You Go',
        coverImage: require('../images/albumCoverImgs/before-you-go-cover.jpg'),
        authorId: ['8e28dc53'],
        albumId: '72a2ef1b',
        releaseDate: 'Nov 22, 2019',
        duration: '3:35',
        playCount: '1,711,309,070',
        src: require('./data/BeforeYouGo-LewisCapaldi.mp3'),
        type: 'Song',
    },
    {
        id: 10,
        uniqueId: 'd69983d6',
        title: 'If the World Was Ending (feat. Julia Michaels)',
        coverImage: require('../images/albumCoverImgs/if-the-world-was-ending-cover.jpg'),
        authorId: ['4865a78c'],
        albumId: '815a6ecd',
        releaseDate: 'Oct 17, 2019',
        duration: '3:29',
        playCount: '1,044,417,413',
        src: require('./data/IfTheWorldWasEnding-JPSaxefeatJuliaMichaels.mp3'),
        type: 'Song',
    },
    {
        id: 11,
        uniqueId: '6840748d',
        title: 'Angels Like You',
        coverImage: require('../images/albumCoverImgs/angels-like-you-cover.jpg'),
        authorId: ['bbf92dab'],
        albumId: '72a2ef1b',
        releaseDate: 'Nov 27, 2020',
        duration: '3:14',
        playCount: '731,353,624',
        src: require('./data/AngelsLikeYou-MileyCyrus.mp3'),
        type: 'Song',
    },
    {
        id: 12,
        uniqueId: '217d3406',
        title: 'Until I Found You (with Em Beihold) - Em Beihold Version',
        coverImage: require('../images/albumCoverImgs/until-I-found-you-cover.jpg'),
        authorId: ['2fd41389'],
        albumId: '72a2ef1b',
        releaseDate: 'Apr 22, 2022',
        duration: '2:56',
        playCount: '755,759,090',
        src: require('./data/UntilIFoundYouEmBeiholdVersion-StephenSanchezEmBeihold.mp3'),
        type: 'Song',
    },
    {
        id: 13,
        uniqueId: 'c0e575ca',
        title: 'Eyes Closed',
        coverImage: require('../images/albumCoverImgs/eyes-closed-cover.jpg'),
        authorId: ['9e78406f'],
        albumId: '815a6ecd',
        releaseDate: 'Mar 24, 2022',
        duration: '3:14',
        playCount: '275,624,198',
        src: require('./data/EyesClosed-EdSheeran.mp3'),
        type: 'Song',
    },
    {
        id: 14,
        uniqueId: 'd9093b0c',
        title: 'Nếu Lúc Đó',
        coverImage: require('../images/albumCoverImgs/neu-luc-do-cover.jpg'),
        authorId: ['ccbeb2f4'],
        albumId: '3e25f1d4',
        releaseDate: 'Mar 2, 2023',
        duration: '4:24',
        playCount: '25,887,361',
        src: require('./data/NeuLucDo-tlinh2pillz.mp3'),
        type: 'Song',
    },
    {
        id: 14,
        uniqueId: 'e53a0a9f',
        title: 'Em Không Hiểu',
        coverImage: require('../images/albumCoverImgs/em-khong-hieu-cover.jpg'),
        authorId: ['68f6f03c'],
        albumId: '72a2ef1b',
        releaseDate: 'Jun 28, 2021',
        duration: '3:57',
        playCount: '14,822,670',
        src: require('./data/EmKhongHieu-ChanggMinhHuy.mp3'),
        type: 'Song',
    },
    {
        id: 15,
        uniqueId: 'd81a36b0',
        title: 'Muộn Rồi Mà Sao Còn',
        coverImage: require('../images/albumCoverImgs/muon-roi-ma-sao-con-cover.jpg'),
        authorId: ['99e464ae'],
        albumId: '72a2ef1b',
        releaseDate: 'Apr 29, 2021',
        duration: '4:35',
        playCount: '32,056,841',
        src: require('./data/MuonRoiMaSaoCon-SonTungMTP.mp3'),
        type: 'Song',
    },
    {
        id: 16,
        uniqueId: '047a58df',
        title: 'GODS',
        coverImage: require('../images/albumCoverImgs/GODS_cover.jpg'),
        authorId: ['72477c1f'],
        albumId: '72a2ef1b',
        releaseDate: 'Oct 4, 2023',
        duration: '3:40',
        playCount: '50,783,021',
        src: require('./data/Gods-LeagueOfLegendsNewJeans.mp3'),
        type: 'Song',
        themeColor: 'rgba(42,56,92,255)'
    },
    {
        id: 16,
        uniqueId: 'b403e6d1',
        title: 'STAR WALKIN\' (League of Legends Worlds Anthem)',
        coverImage: require('../images/albumCoverImgs/STAR-WALKIN\'_cover.jpg'),
        authorId: ['1fe9ade3'],
        albumId: '72a2ef1b',
        releaseDate: 'Sep 22, 2022',
        duration: '3:30',
        playCount: '375,538,128',
        src: require('./data/StarWalkinLeagueOfLegendsWorldsAnthem-LilNasX.mp3'),
        type: 'Song',
        themeColor: 'rgba(79,42,34,255)'
    },
    {
        id: 17,
        uniqueId: '25e4d077',
        title: 'The Joker And The Queen',
        coverImage: require('../images/albumCoverImgs/the-joker-and-the-queen_cover.jpg'),
        authorId: ['9e78406f'],
        albumId: '72a2ef1b',
        releaseDate: 'Fed 11, 2022',
        duration: '3:05',
        playCount: '161,249,002',
        src: require('./data/TheJokerAndTheQueenFeatTaylorSwift-EdSheeran.mp3'),
        type: 'Song',
        themeColor: 'rgba(227,131,94,255)'
    },
    {
        id: 18,
        uniqueId: '3a070e49',
        title: '10,000 Hours (with Justin Bieber)',
        coverImage: require('../images/albumCoverImgs/10,000-hours_cover.jpg'),
        authorId: ['9ec78364', 'bbcd1d79'],
        albumId: '72a2ef1b',
        releaseDate: 'Oct 4, 2019',
        duration: '2:47',
        playCount: '992,870,743',
        src: require('./data/10000Hours-DanShayJustinBieber.mp3'),
        type: 'Song',
        themeColor: 'rgba(104,240,194,255)'
    },
    {
        id: 19,
        uniqueId: '46276a6f',
        title: 'Thức Giấc',
        coverImage: require('../images/albumCoverImgs/thuc-giac_cover.jpg'),
        authorId: ['a59f6139'],
        albumId: '72a2ef1b',
        releaseDate: 'Jul 14, 2021',
        duration: '4:29',
        playCount: '21,127,023',
        src: require('./data/ThucGiac-DaLAB.mp3'),
        type: 'Song',
        themeColor: 'rgba(140,44,36,255)'
    },
    {
        id: 20,
        uniqueId: '11d824c6',
        title: 'Chuyện Đôi Ta (feat. Muộii)',
        coverImage: require('../images/albumCoverImgs/chuyen-doi-ta_cover.jpg'),
        authorId: ['55811b8f','a59f6139'],
        albumId: '72a2ef1b',
        releaseDate: 'Dec 1, 2021',
        duration: '3:28',
        playCount: '29,268,667',
        src: require('./data/ChuyenDoiTa-EmceeLDaLAB.mp3'),
        type: 'Song',
        themeColor: 'rgba(212, 205,193,190)'
    },
    {
        id: 21,
        uniqueId: '9cec521d',
        title: 'POP/STARS',
        coverImage: require('../images/albumCoverImgs/pop-stars_cover.jpg'),
        authorId: ['5d12f87a','2a72970f','6f6d69c3','72477c1f'],
        albumId: '72a2ef1b',
        releaseDate: 'Nov 3, 2018',
        duration: '3:11',
        playCount: '327,480,226',
        src: require('./data/PopStars-LeagueOfLegendsKDAMadisonBeerGIDLEJairaBurns.mp3'),
        type: 'Song',
        themeColor: 'rgba(70,62,157,255)'
    },
    {
        id: 22,
        uniqueId: 'da9997ee',
        title: 'Ánh Sao Và Bầu Trời',
        coverImage: require('../images/albumCoverImgs/anh-sao-va-bau-troi_cover.jpg'),
        authorId: ['fc5d250d'],
        albumId: '72a2ef1b',
        releaseDate: 'Sep 10, 2021',
        duration: '4:20',
        playCount: '24,621,421',
        src: require('./data/AnhSaoVaBauTroi-TRI.mp3'),
        type: 'Song',
        themeColor: 'rgba(238,148,57,255)'
    },
    {
        id: 23,
        uniqueId: '9500f20e',
        title: 'có hẹn với thanh xuân',
        coverImage: require('../images/albumCoverImgs/co-hen-voi-thanh-xuan_cover.jpg'),
        authorId: ['4c036ec9','4baf54e7'],
        albumId: '72a2ef1b',
        releaseDate: 'Jul 18, 2021',
        duration: '3:38',
        playCount: '24,621,421',
        src: require('./data/cohenvoithanhxuan-MONSTAR.mp3'),
        type: 'Song',
        themeColor: 'rgba(112,120,112,255)'
    },
    {
        id: 24,
        uniqueId: '9406d40d',
        title: 'Waiting For You',
        coverImage: require('../images/albumCoverImgs/waiting-for-you_cover.jpg'),
        authorId: ['0bc89cd5','8c7fddb5'],
        albumId: '72a2ef1b',
        releaseDate: 'Aug 18, 2022',
        duration: '4:25',
        playCount: '19,310,430',
        src: require('./data/WaitingForYou-MONOOnionn.mp3'),
        type: 'Song',
        themeColor: 'rgba(112,120,112,255)'
    },
    {
        id: 25,
        uniqueId: '1bbf6471',
        title: 'Cà Phê',
        coverImage: require('../images/albumCoverImgs/ca-phe_cover.jpg'),
        authorId: ['32158d37'],
        albumId: '72a2ef1b',
        releaseDate: 'Mar 22, 2022',
        duration: '3:10',
        playCount: '15,600,698',
        src: require('./data/CaPhe-MIN.mp3'),
        type: 'Song',
        themeColor: 'rgba(172,157,210,255)'
    },
    {
        id: 26,
        uniqueId: '0ef236a1',
        title: 'THE BADDEST',
        coverImage: require('../images/albumCoverImgs/the-baddest_cover.jpg'),
        authorId: ['5d12f87a', '2a72970f', 'd8ce8383', '0c0b6048', '72477c1f'],
        albumId: '72a2ef1b',
        releaseDate: 'Aug 27, 2020',
        duration: '2:43',
        playCount: '185,609,563',
        src: require('./data/TheBaddest-KDAGIDLEBeaMillerWolftyla.mp3'),
        type: 'Song',
        themeColor: 'rgba(133,155,194,255)'
    },
]
export default songs