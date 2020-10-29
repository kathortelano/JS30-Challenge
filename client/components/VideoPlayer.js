import React, { useState, useRef, useEffect } from "react";
import "../styles/VideoPlayer.css";
import { FaPlay, FaPause } from "react-icons/fa";
<<<<<<< HEAD
import { RiFullscreenFill } from "react-icons/ri";
=======
>>>>>>> day 11 completed: converted tutorial lessons from plain js to react js
//get elements
//build functions
//hook event listenrs

export const VideoPlayer = () => {
  const [play, setPlay] = useState();
  const [video, setVideo] = useState();
  const [scrubProgress, setScrubProgress] = useState();
  const [playbackRate, setPlaybackRate] = useState(1);
  const [volume, setVolume] = useState(1);
<<<<<<< HEAD

=======
>>>>>>> day 11 completed: converted tutorial lessons from plain js to react js
  const [progress, setProgress] = useState(0);
  const videoRef = useRef(null);
  const progressRef = useRef(null);

  function togglePlay() {
    if (video.paused) {
      video.play();
      setPlay(false);
    } else {
      video.pause();
      setPlay(true);
    }
  }

  function handleSkip(time) {
    video.currentTime += time;
  }

  function handleRangeChange(e) {
    video[e.target.name] = e.target.value;
    if (e.target.name === "volume") {
      setVolume(e.target.value);
    } else if (e.target.name === "playbackRate") {
      setPlaybackRate(e.target.value);
    }
  }

  function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;

    setProgress(percent);
  }
  function handleScrub(event) {
    const scrubTime =
      (event.offsetX / scrubProgress.offsetWidth) * video.duration;

    video.currentTime = scrubTime;
  }

<<<<<<< HEAD
  function handleFullScreen() {
    if (!document.fullscreenElement) {
      video.requestFullscreen();
    } else video.exitFullscreen();
  }
  useEffect(() => {
    setVideo(videoRef.current);
    setScrubProgress(progressRef.current);
    console.log(videoRef);
=======
  useEffect(() => {
    setVideo(videoRef.current);
    setScrubProgress(progressRef.current);
>>>>>>> day 11 completed: converted tutorial lessons from plain js to react js
  });

  return (
    <div className="container">
      <div className="player">
        <video
          ref={videoRef}
          onClick={togglePlay}
          onTimeUpdate={handleProgress}
<<<<<<< HEAD
          className={`player__video viewer `}
=======
          className="player__video viewer"
>>>>>>> day 11 completed: converted tutorial lessons from plain js to react js
          src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
        ></video>

        <div className="player__controls">
          <div
            className="progress"
            ref={progressRef}
            onClick={(e) => handleScrub(e.nativeEvent)}
          >
            <div
              className="progress__filled"
              style={{ flexBasis: `${progress}%` }}
            ></div>
          </div>
          <button
            className="player__button toggle"
            title="Toggle Play"
            onClick={togglePlay}
          >
            {play ? <FaPlay /> : <FaPause />}
          </button>
          <input
            type="range"
            name="volume"
            className="player__slider"
            min="0"
            max="1"
            step="0.05"
            value={volume}
            onChange={handleRangeChange}
          />
          <input
            type="range"
            name="playbackRate"
            className="player__slider"
            min="0.5"
            max="2"
            step="0.1"
            value={playbackRate}
            onChange={handleRangeChange}
          />
          <button
            data-skip="-10"
            className="player__button"
            onClick={() => handleSkip(-10)}
          >
            « 10s
          </button>
          <button
            data-skip="25"
            className="player__button"
            onClick={() => handleSkip(25)}
          >
            25s »
          </button>
<<<<<<< HEAD
          <button className="player__button" onClick={handleFullScreen}>
            <RiFullscreenFill />
          </button>
=======
>>>>>>> day 11 completed: converted tutorial lessons from plain js to react js
        </div>
      </div>
    </div>
  );
};
