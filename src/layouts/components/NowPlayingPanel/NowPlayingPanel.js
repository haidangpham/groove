import classNames from "classnames/bind";
import { useCallback, useContext, useEffect, useRef, useState } from "react";

import styles from './NowPlayingPanel.module.scss'
import { TrackContext } from "../../../App";
import { artists } from "../../../assets/data/users";
import { FullScreenIcon, HeartIcon, LyricsIcon, NextIcon, PreviousIcon, QueueIcon, RepeatIcon, ShuffleIcon, VolumeHighIcon, VolumeLowIcon, VolumeMuteIcon } from "../../../components/Icons";
import PlayButton from '../PlayButton/PlayButton'


const cx= classNames.bind(styles)
function NowPlayingPanel({track}) {
  const {globalAudioRef,isPlaying,setIsPlaying, addLoadedMetadataListener}= useContext(TrackContext)
  const progressBarRef= useRef(null);
  const volumeRef= useRef(null);
  const playAnimationRef = useRef();

  const [isMute, setIsMute]= useState(false);
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [prevVolume, setPrevVolume] = useState(0.5);
  const [volumeProgress, setVolumeProgress] = useState(50);


    const togglePlayPause= ()=>{
        isPlaying?globalAudioRef.current.pause(): globalAudioRef.current.play()
        setIsPlaying((prev)=>!prev)
    }
    //handle progress bar
    const handleProgressChange = () => {
      globalAudioRef.current.currentTime = progressBarRef.current.value;
      };
    //handle duration
    
      useEffect(()=>{
        const onloadedmetadata =()=>{
          const seconds = globalAudioRef.current.duration;
          setDuration(seconds);
          progressBarRef.current.max = seconds;
        }
        addLoadedMetadataListener(onloadedmetadata);
        return()=>{
          addLoadedMetadataListener(onloadedmetadata);
        }
      },[addLoadedMetadataListener, globalAudioRef])
      
      //format display time
      const formatTime = (time) => {
        if (time && !isNaN(time)) {
          const minutes = Math.floor(time / 60);
          const formatedMinutes =
            minutes < 10 ? `${minutes}` : `${minutes}`;
          const seconds = Math.floor(time % 60);
          const formatedSeconds =
            seconds < 10 ? `0${seconds}` : `${seconds}`;
          return `${formatedMinutes}:${formatedSeconds}`;
        }
        return '00:00';
      };

      const repeat = useCallback(() => {
        const currentTime = globalAudioRef.current.currentTime;
        setTimeProgress(currentTime);
        progressBarRef.current.value = currentTime;
        progressBarRef.current.style.setProperty(
            '--range-progress',
            `${(progressBarRef.current.value / duration) * 100}%`
        );
      
        playAnimationRef.current = requestAnimationFrame(repeat);
      },[globalAudioRef, duration, progressBarRef, setTimeProgress]);
      useEffect(() => {
        
        if (isPlaying) {
          globalAudioRef.current.play();
          playAnimationRef.current = requestAnimationFrame(repeat);
        } else {
          globalAudioRef.current.pause();
        }
      }, [isPlaying, globalAudioRef, repeat]);

      //handle volume
      const handleVolumeChange = () => {
        globalAudioRef.current.volume= volumeRef.current.value
        setVolumeProgress(volumeRef.current.value)
        volumeRef.current.style.setProperty(
          '--volume-progress',
          `${(volumeProgress / 1) * 100}%`
        );
      }
      const handleMute= () =>{
        if(isMute){
          if(globalAudioRef.current.volume!== 0){setPrevVolume(globalAudioRef.current.volume)}
          globalAudioRef.current.volume= 0
          volumeRef.current.value= 0
          volumeRef.current.style.setProperty(
            '--volume-progress',
            `0%`
          );
        }else{
          globalAudioRef.current.volume= prevVolume
          volumeRef.current.value= globalAudioRef.current.volume
          volumeRef.current.style.setProperty(
            '--volume-progress',
            `${( volumeRef.current.value / 1) * 100}%`
          );
        }

        setIsMute(!isMute)
      }

      
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
                        {/* <audio ref={audioRef} src={track.src} onLoadedMetadata={onloadedmetadata}/> */}
                    </div>
                </div>
                <div className={cx('options')}>
                    <LyricsIcon className={cx('icon')}/>
                    <QueueIcon className={cx('icon')}/>
                    <div className={cx('volume-control')}>
                        <button onClick={handleMute}>
                        {globalAudioRef.current?.volume === 0 && <VolumeMuteIcon className={cx('icon')} />}
                        {globalAudioRef.current?.volume > 0 && globalAudioRef.current?.volume < 0.5 && <VolumeLowIcon className={cx('icon')} />}
                        {globalAudioRef.current?.volume >= 0.5 && <VolumeHighIcon className={cx('icon')} />}
                        </button>
                        <input ref={volumeRef} onChange={handleVolumeChange} className={cx('volume-bar')} type="range"  min="0" max="1" step="0.01" defaultValue="0.5"/>
                    </div>
                    <FullScreenIcon className={cx('icon')}/>
                </div>
           </div>
        </footer>
    );
}

export default NowPlayingPanel;