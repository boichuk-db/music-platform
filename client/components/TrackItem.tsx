import { FC } from "react";
import { ITrack } from "../types/track";
import styles from "../styles/TrackItem.module.scss";
import { Card, IconButton, Grid, Typography } from "@mui/material";
import { PlayArrow, Pause, Delete } from "@mui/icons-material";
import { useActions } from "../hooks/useAction";
import Image from "next/image";
import { useRouter } from "next/router";

// import { deleteTrack } from "../store/actions-creators/track";
import axios from "axios";

interface TrackItemProps {
  track: ITrack;
  active?: boolean;
}
const TrackItem: FC<TrackItemProps> = ({ track, active = false }) => {
  const { playTrack, pauseTrack, setActiveTrack } = useActions();
  const router = useRouter();

  const handleClick = (e) => {
    e.stopPropagation();
  };
  const activateTrack = (e) => {
    handleClick(e);
    setActiveTrack(track);
    playTrack();
  };
  const removeTrack = async (e) => {
    handleClick(e);
    pauseTrack();
    // deleteTrack(track);
    try {
      const response = await axios.delete(
        "http://localhost:5000/tracks/" + track._id
      );
    } catch (e) {
      console.log(e);
    }
    router.push("/tracks");
  };
  const openTrack = (e) => {
    handleClick(e);
    router.push("tracks/" + track._id);
  };
  return (
    <Card className={styles.track} onClick={openTrack}>
      <IconButton onClick={activateTrack}>
        {active ? <Pause /> : <PlayArrow />}
      </IconButton>
      <Image
        className={styles.img}
        width={70}
        height={70}
        src={"http://localhost:5000/" + track.picture}
        alt="Track picture"
      />
      <Grid
        container
        direction="column"
        style={{ width: 200, margin: "0 20px" }}
      >
        <Typography variant="body1">{track.name}</Typography>
        <Typography variant="body2" className={styles.artist}>
          {track.artist}
        </Typography>
      </Grid>
      {active && <div>00:00 / 03:33</div>}
      <IconButton onClick={removeTrack} className={styles.delete}>
        <Delete />
      </IconButton>
    </Card>
  );
};

export default TrackItem;
