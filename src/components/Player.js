import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({ currentSong }) => {
  //Ref
  const audioRef = useRef(null);

  //Event Handler
  const playSongHandler = () => {
    audioRef.current.play();
  };

  return (
    <div className="player">
      <div className="time-control">
        <p>Start Time</p>
        <input type="range" />
        <p>End Time</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon className="skip-back" icon={faAngleLeft} size="2x" />
        <FontAwesomeIcon
          className="play"
          icon={faPlay}
          size="2x"
          onClick={playSongHandler}
        />
        <FontAwesomeIcon
          className="skip-forward"
          icon={faAngleRight}
          size="2x"
        />
      </div>
      <audio src={currentSong.audio} ref={audioRef}></audio>
    </div>
  );
};

export default Player;
