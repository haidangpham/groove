import classNames from "classnames/bind";

import styles from "./Lyrics.module.scss";
import { useContext, useEffect, useRef, useState } from "react";
import { TrackContext } from "../../App";
import { lyrics } from "../../assets/tracks/lyrics";
import songs from "../../assets/tracks";
const cx = classNames.bind(styles);
function LyricsPage() {
    const { playingItems, globalAudioRef } = useContext(TrackContext);
    const lyricsData = lyrics.find(
        (lyrics) => lyrics.songId === playingItems.playingTrack
    );
    const trackColor = songs.find(
        (song) => song.uniqueId === playingItems.playingTrack
    ).themeColor;
    const backgroundRef = useRef();
    const activeLineRef = useRef(null);
    const [currentLyricIndex, setCurrentLyricIndex] = useState(0);
    useEffect(() => {
        //background color
        backgroundRef.current.style.setProperty(
            "--background-color",
            trackColor
        );
    
        //
        const updateLyricIndex = () => {
            const currentTime = globalAudioRef.current.currentTime;
            const newIndex = lyricsData.lyrics.findIndex(
                (line) =>
                    line.startTime <= currentTime && line.endTime >= currentTime
            );
            if (newIndex !== -1 && newIndex !== currentLyricIndex) {
                setCurrentLyricIndex(newIndex);
                // Scroll the active line into view
                // if (activeLineRef.current) {
                //     // activeLineRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
                //     // activeLineRef.current.classList.add('active')
                // }
            }
            console.log(currentTime);
        };

        globalAudioRef.current.addEventListener(
            "timeupdate",
            updateLyricIndex
        );
        return () => {
            globalAudioRef.current.removeEventListener(
                "timeupdate",
                updateLyricIndex
            );
        };
    }, [trackColor, globalAudioRef, currentLyricIndex]);
    //
    const jumpToLine= (startTime)=>{
        globalAudioRef.current.currentTime= startTime
    }
    return (
        <div className={cx("wrapper")} ref={backgroundRef}>
            <div>
                {lyricsData.lyrics.map((item, index) => (
                    <div
                        className={cx("line",`${index === currentLyricIndex? 'active': ''}`, `${index < currentLyricIndex? 'passed': ''}`)}
                        key={index}
                        ref={(ref)=>{
                                if (index === currentLyricIndex) {
                                    activeLineRef.current = ref;
                                }
                            }
                        }
                        onClick={()=>jumpToLine(item.startTime)}
                    >
                        {item.line}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LyricsPage;
