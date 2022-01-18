import { FC } from "react";

interface TrackProgressProps {
  left: number;
  right: number;
  onChange: (e: any) => void;
}

const TrackProgress: FC<TrackProgressProps> = ({ left, right, onChange }) => {
  const timeFormater = (value: number) => {
    let totalSeconds = value;
    let minutes: number | string = Math.floor(totalSeconds / 60);
    let seconds: number | string = totalSeconds % 60;
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    return minutes + ":" + seconds;
  };

  return (
    <div style={{ display: "flex" }}>
      <input
        type="range"
        min={0}
        max={right}
        value={left}
        onChange={onChange}
      />
      <div>
        {timeFormater(left)}/{timeFormater(right)}
      </div>
    </div>
  );
};

export default TrackProgress;
