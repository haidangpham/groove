import classNames from "classnames/bind";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import { MobileContext, TrackContext } from "../../../App";
import { artists } from "../../../assets/data/users";
import {
    FullScreenIcon,
    HeartIcon,
    LyricsIcon,
    NextIcon,
    PauseIcon,
    PlayIcon,
    PreviousIcon,
    QueueIcon,
    RepeatIcon,
    ShuffleIcon,
    VolumeHighIcon,
    VolumeLowIcon,
    VolumeMuteIcon,
} from "../../../components/Icons";
import PlayButton from "../PlayButton/PlayButton";

import styles from "./NowPlayingPanel.module.scss";
import mobileStyles from './NowPlaingPanelMobile.module.scss';

let cx
function NowPlayingPanel({ track }) {
    const {
        globalAudioRef,
        isPlaying,
        queuedTracks,
        isShuffled,
        playingTrackIndex,
        setIsPlaying,
        toggleIsShuffled,
        addLoadedMetadataListener,
        updatePlayingTrackIndex,
    } = useContext(TrackContext);
    const progressBarRef = useRef(null);
    const volumeRef = useRef(null);
    const playAnimationRef = useRef();
    const artistNames= track.authorId.map((id)=> artists.find((artist)=> id === artist.uniqueId).name)
    const artistData= track.authorId.map((id)=> artists.find((artist)=> id === artist.uniqueId))

    const [isMute, setIsMute] = useState(false);
    const [timeProgress, setTimeProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const [prevVolume, setPrevVolume] = useState(0);
    const [volumeProgress, setVolumeProgress] = useState(50);

    const togglePlayPause = () => {
        isPlaying
            ? globalAudioRef.current.pause()
            : globalAudioRef.current.play();
        setIsPlaying((prev) => !prev);
    };
    //handle progress bar
    const handleProgressChange = () => {
        globalAudioRef.current.currentTime = progressBarRef.current.value;
    };

    //handle duration
    useEffect(() => {
        const onloadedmetadata = () => {
            const seconds = globalAudioRef.current.duration;
            setDuration(seconds);
            progressBarRef.current.max = seconds;
        };
        addLoadedMetadataListener(onloadedmetadata);
        return () => {
            addLoadedMetadataListener(onloadedmetadata);
        };
    }, [addLoadedMetadataListener, globalAudioRef]);

    //format display time
    const formatTime = (time) => {
        if (time && !isNaN(time)) {
            const minutes = Math.floor(time / 60);
            const formatedMinutes = minutes < 10 ? `${minutes}` : `${minutes}`;
            const seconds = Math.floor(time % 60);
            const formatedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
            return `${formatedMinutes}:${formatedSeconds}`;
        }
        return "00:00";
    };
    //progress bar animation
    const repeat = useCallback(() => {
        const currentTime = globalAudioRef.current.currentTime;
        setTimeProgress(currentTime);
        progressBarRef.current.value = currentTime;
        progressBarRef.current.style.setProperty(
            "--range-progress",
            `${(progressBarRef.current.value / duration) * 100}%`
        );

        playAnimationRef.current = requestAnimationFrame(repeat);
    }, [globalAudioRef, duration, progressBarRef, setTimeProgress]);
    useEffect(() => {
        if (isPlaying) {
            globalAudioRef.current.play();
            playAnimationRef.current = requestAnimationFrame(repeat);
            document.title= `${track.title} • ${artistNames[0]}`
        } else {
            globalAudioRef.current.pause();
        }
    }, [isPlaying, globalAudioRef, repeat, artistNames, track.title]);

    //handle volume
    const handleVolumeChange = () => {
        globalAudioRef.current.volume = volumeRef.current.value;
        const currentVolume= volumeRef.current.value
        setVolumeProgress(currentVolume);
        volumeRef.current.style.setProperty(
            "--volume-progress",
            `${volumeProgress * 100}%`
        );
    };
    //Auto update on changes
    useEffect(()=>{
        if(volumeProgress > 0){
            setPrevVolume(volumeProgress)
        }
        if(globalAudioRef.current.volume === 0){
            setIsMute(true)
        }
    },[volumeProgress, globalAudioRef])
    //Mute
    const handleMute = () => {
        if (isMute) {
            globalAudioRef.current.volume = prevVolume;
            volumeRef.current.value = globalAudioRef.current.volume;
            volumeRef.current.style.setProperty(
                "--volume-progress",
                `${(volumeRef.current.value / 1) * 100}%`
            );
        } else {
            if (globalAudioRef.current.volume !== 0) {
                setPrevVolume(globalAudioRef.current.volume);
            }
            globalAudioRef.current.volume = 0;
            volumeRef.current.value = 0;
            volumeRef.current.style.setProperty("--volume-progress", `0%`);
        }
        setIsMute(!isMute);
    };
    //Backward, Forward songs
    const handleSkipping= (isForward)=>{
        if(isForward){
            playingTrackIndex+1 === queuedTracks.length?updatePlayingTrackIndex(0):updatePlayingTrackIndex(playingTrackIndex + 1)
        }else{
            playingTrackIndex - 1 < 0?updatePlayingTrackIndex(0): updatePlayingTrackIndex(playingTrackIndex - 1)
        }
        setIsPlaying(true)
    }
      //Handle Agent
    const {isMobileAgent}= useContext(MobileContext)
    isMobileAgent?cx = classNames.bind(mobileStyles):cx = classNames.bind(styles)

    return (
        <div className={cx('footer')}>
            <div className={cx("wrapper")}>
                <div className={cx("details-wrapper")}>
                    <div className={cx("track-details")}>
                        <img
                            src={track.coverImage}
                            className={cx("cover-img")}
                            alt=""
                        />
                        <div className={cx("track-title")}>
                            <Link to={`/track/${track.uniqueId}`}><p className={cx("title")}>{track.title}</p></Link>
                            {artistData.map((artist, index)=>{
                                if(index>=1){
                                    return(<Link to={`/artist/${artist.uniqueId}`} key={index}>, <span className={cx("author")}>{artist.name}</span></Link>)
                                }else{
                                    return(<Link to={`/artist/${artist.uniqueId}`} key={index}><span className={cx("author")} key={index}>{artist.name}</span></Link>)
                                }
                            }
                            )}
                        </div>
                    </div>
                    <HeartIcon className={cx("icon","m-hidden")} />
                    {isMobileAgent?
                        <div className={cx('m-play-btn')}>
                            <button onClick={togglePlayPause} >{isPlaying?<PauseIcon className={cx('icon')} />: <PlayIcon className={cx('icon')}/> }</button>
                        </div>
                        :<></>
                    }
                </div>
                {/* {
                    isMobileAgent?
                    <div>
                        <button onClick={togglePlayPause} className={cx('m-play-btn')}>{isPlaying?<PauseIcon className={cx('icon')} />: <PlayIcon className={cx('icon')}/> }</button>
                    </div>:
                    <></>
                } */}
                <div className={cx("controller")}>
                    <div className={cx("player-control","m-hidden")}>
                        <button onClick={toggleIsShuffled}><ShuffleIcon className={cx("icon", `${isShuffled?'active': ''}`)} /></button>
                        <button onClick={()=>handleSkipping(false)}><PreviousIcon className={cx("icon")} /></button>
                        {isPlaying ? (
                            <PlayButton
                                onClick={togglePlayPause}
                                pause
                                small
                                white
                            />
                        ) : (
                            <PlayButton onClick={togglePlayPause} small white />
                        )}
                        <button  onClick={()=>handleSkipping(true)}><NextIcon className={cx("icon")} /></button>
                        <RepeatIcon className={cx("icon")} />
                    </div>
                    <div className={cx("playback-bar")}>
                        <span className={cx("playback-position", "m-hidden")}>
                            {formatTime(timeProgress)}
                        </span>
                        <div className={cx("slide-container")}>
                            <input
                                ref={progressBarRef}
                                onChange={handleProgressChange}
                                onMouseUp={handleProgressChange}
                                className={cx("playback-progress")}
                                type="range"
                                min="0"
                                defaultValue="0"
                            />
                        </div>

                        <span className={cx("playback-duration", "m-hidden")}>
                            {formatTime(duration)}
                        </span>
                    </div>
                </div>
                <div className={cx("options", "m-hidden")}>
                    <LyricsIcon className={cx("icon")} />
                    <QueueIcon className={cx("icon")} />
                    <div className={cx("volume-control")}>
                        <button onClick={handleMute}>
                            {globalAudioRef.current?.volume === 0 && (
                                <VolumeMuteIcon className={cx("icon")} />
                            )}
                            {globalAudioRef.current?.volume > 0 &&
                                globalAudioRef.current?.volume < 0.5 && (
                                    <VolumeLowIcon className={cx("icon")} />
                                )}
                            {globalAudioRef.current?.volume >= 0.5 && (
                                <VolumeHighIcon className={cx("icon")} />
                            )}
                        </button>
                        <input
                            ref={volumeRef}
                            onChange={handleVolumeChange}
                            onClick={handleVolumeChange}
                            className={cx("volume-bar")}
                            type="range"
                            min="0"
                            max="1"
                            step="0.01"
                            defaultValue="0.5"
                        />
                    </div>
                    <FullScreenIcon className={cx("icon")} />
                </div>
            </div>
        </div>
    );
}

export default NowPlayingPanel;
