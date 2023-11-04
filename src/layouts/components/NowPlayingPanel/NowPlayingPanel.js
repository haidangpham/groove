import classNames from "classnames/bind";
import styles from './NowPlayingPanel.module.scss'
import { artists } from "../../../assets/data/users";
import { FullScreenIcon, HeartIcon, LyricsIcon, NextIcon, PreviousIcon, QueueIcon, RepeatIcon, ShuffleIcon, VolumeIcon } from "../../../components/Icons";
import PlayButton from '../PlayButton/PlayButton'
import { useCallback, useEffect, useRef, useState } from "react";


const cx= classNames.bind(styles)
function NowPlayingPanel({track}) {
    const audioRef= useRef(null);
    const progressBarRef= useRef(null);
    const volumeRef= useRef(null);
    const playAnimationRef = useRef();

    const [isPlaying, setIsPlaying]= useState(false);
    const [timeProgress, setTimeProgress] = useState(0);
    const [duration, setDuration] = useState(0);

    const togglePlayPause= ()=>{
        isPlaying?audioRef.current.pause(): audioRef.current.play()
        setIsPlaying((prev)=>!prev)
    }
    //handle progress bar
    const handleProgressChange = () => {
        audioRef.current.currentTime = progressBarRef.current.value;
      };
    //handle duration
    const onloadedmetadata =()=>{
        const seconds = audioRef.current.duration;
        setDuration(seconds);
        progressBarRef.current.max = seconds;
      }
      //format display time
      const formatTime = (time) => {
        if (time && !isNaN(time)) {
          const minutes = Math.floor(time / 60);
          const formatedMinutes =
            minutes < 10 ? `0${minutes}` : `${minutes}`;
          const seconds = Math.floor(time % 60);
          const formatedSeconds =
            seconds < 10 ? `0${seconds}` : `${seconds}`;
          return `${formatedMinutes}:${formatedSeconds}`;
        }
        return '00:00';
      };
      //handle volume
      const handleVolumeChange = () => {
        audioRef.current.volume= volumeRef.current.value
      }
      //API
      const repeat = useCallback(() => {
        const currentTime = audioRef.current.currentTime;
        setTimeProgress(currentTime);
        progressBarRef.current.value = currentTime;
        progressBarRef.current.style.setProperty(
            '--range-progress',
            `${(progressBarRef.current.value / duration) * 100}%`
        );
      
        playAnimationRef.current = requestAnimationFrame(repeat);
      },[audioRef, duration, progressBarRef, setTimeProgress]);
      useEffect(() => {
        

        if (isPlaying) {
          audioRef.current.play();
          playAnimationRef.current = requestAnimationFrame(repeat);
        } else {
          audioRef.current.pause();
        }
      }, [isPlaying, audioRef, repeat]);
    return (
        <footer>
           <div className={cx('wrapper')}>
                <div className={cx('track-details')}>
                    <img src={track.coverImage} className={cx('cover-img')} alt=""/>
                    <div className={cx('track-title')}>
                        <p className={cx('title')}>{track.title}</p>
                        <span className={cx('author')}>{artists.find((artist)=>track.artistId=== artist.uniqueId).name}</span>
                    </div>
                    <HeartIcon className={cx('icon')}/>
                </div>
                <div className={cx('controller')}>
                    <div className={cx('player-control')}>
                        <ShuffleIcon className={cx('icon')} />
                        <PreviousIcon className={cx('icon')}/>
                        {isPlaying?<PlayButton onClick={togglePlayPause} pause small white/>:<PlayButton onClick={togglePlayPause} small white/>}
                        <NextIcon className={cx('icon')}/>
                        <RepeatIcon className={cx('icon')}/>
                    </div>
                    <div className={cx('playback-bar')}>
                        <span className={cx('playback-position')}>{formatTime(timeProgress)}</span>
                        <div className={cx('slide-container')}>
                            <input ref={progressBarRef} onChange={handleProgressChange} className={cx('playback-progress')} type="range" min="0" defaultValue="0"/>
                        </div> 
                      
                        <span className={cx('playback-duration')}>{formatTime(duration)}</span>
                        {/* audio */}
                        <audio ref={audioRef} src={track.src} onLoadedMetadata={onloadedmetadata}/>
                    </div>
                </div>
                <div className={cx('options')}>
                    <LyricsIcon className={cx('icon')}/>
                    <QueueIcon className={cx('icon')}/>
                    <div className={cx('volume-control')}>
                        <VolumeIcon className={cx('icon')}/>
                        <input ref={volumeRef} onChange={handleVolumeChange} type="range"  min="0" max="1" step="0.01"/>
                    </div>
                    <FullScreenIcon className={cx('icon')}/>
                </div>
           </div>
        </footer>
    );
}

export default NowPlayingPanel;