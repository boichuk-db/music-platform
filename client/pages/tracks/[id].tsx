import { Button, Card, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import React from "react";
import MainLayout from "../../layouts/MainLayout";
import { ITrack } from "../../types/track";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const TrackPage = () => {
  const track: ITrack = {
    _id: "61deaf38a286850b8baa4a60",
    listens: 0,
    text: "Brighter than light!",
    artist: "Insidious Space",
    name: "Quasar",
    comments: [],
    audio:
      "http://localhost:5000/audio/7008b561-0332-400a-9995-496d6d4d05fe.mp3",
    picture:
      "http://localhost:5000/image/56bde436-c64f-4cc1-82e4-8a2adee34a7b.jpg",
  };

  return (
    <MainLayout>
      <Link href={"/tracks"}>
        <Button variant="outlined" component="a" startIcon={<ArrowBackIcon />}>
          <Typography variant="h6">Back to list</Typography>
        </Button>
      </Link>
      <Grid container alignItems="center" style={{ margin: "20px 0" }}>
        <img
          style={{ borderRadius: "16px", marginRight: "20px" }}
          src={track.picture}
          width={190}
          height={190}
        />
        <Box>
          <Typography variant="h4">Title: {track.name}</Typography>
          <Typography variant="h4">Artist: {track.artist}</Typography>
          <Typography variant="h5">Listens: {track.listens}</Typography>
        </Box>
      </Grid>
      <Typography variant="h4">Description</Typography>
      <Typography variant="body1">{track.text}</Typography>
      <Typography variant="h4">Comments</Typography>
      <Grid container>
        <TextField label="Your name" fullWidth margin="dense" />
        <TextField
          label="Leave a comment"
          fullWidth
          multiline
          rows={4}
          margin="dense"
        />
        <Button variant="contained">Submit</Button>
      </Grid>
      <Box>
        {track.comments.map((comment) => (
          <Card key={comment._id}>
            <Typography variant="body1">{comment.username}</Typography>
            <Typography variant="body2">{comment.text}</Typography>
          </Card>
        ))}
      </Box>
    </MainLayout>
  );
};

export default TrackPage;
