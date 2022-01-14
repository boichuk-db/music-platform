import { FC } from "react";
import { ITrack } from "../types/track";
import styles from "../styles/TrackItem.module.scss";
import { Card, IconButton, Grid, Typography } from "@mui/material";
import { PlayArrow, Pause, Delete } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";

interface TrackItemProps {
  track: ITrack;
  active?: boolean;
}
const TrackItem: FC<TrackItemProps> = ({ track, active = false }) => {
  return (
    <>
      <Link href={"/tracks/" + track._id}>
        <Card className={styles.track}>
          <IconButton onClick={(e) => e.stopPropagation()}>
            {active ? <Pause /> : <PlayArrow />}
          </IconButton>
          <img
            className={styles.img}
            width={70}
            height={70}
            src={track.picture}
            alt="Track picture"
          />

          <Grid container direction="column" className={styles.title}>
            <Typography variant="body1">{track.name}</Typography>
            <Typography variant="body2" className={styles.artist}>
              {track.artist}
            </Typography>
          </Grid>

          {active && <div>02:42 / 03:55</div>}
          <IconButton
            className={styles.delete}
            onClick={(e) => e.stopPropagation()}
          >
            <Delete />
          </IconButton>
        </Card>
      </Link>
    </>
  );
};

export default TrackItem;
