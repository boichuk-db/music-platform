import React, { useState } from "react";
import { ITrack } from "../../types/track";
import MainLayout from "../../layouts/MainLayout";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import axios from "axios";
import { useInput } from "../../hooks/useInput";

const TrackPage = ({ serverTrack }) => {
  const [track, setTrack] = useState<ITrack>(serverTrack);
  const router = useRouter();
  const username = useInput("");
  const text = useInput("");

  const addComment = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/tracks/comment",
        {
          username: username.value,
          text: text.value,
          trackId: track._id,
        }
      );
      setTrack({ ...track, comments: [...track.comments, response.data] });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <MainLayout
      title={"Quasar App - " + track.name + " - " + track.artist}
      keywords={"Music, Artist " + track.name + ", " + track.artist}
    >
      <Button variant={"outlined"} onClick={() => router.push("/tracks")}>
        Back to list
      </Button>
      <Grid container style={{ margin: "20px 0" }}>
        <img
          src={"http://localhost:5000/" + track.picture}
          width={200}
          height={200}
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
        <TextField label="Your name" fullWidth {...username} margin="dense" />
        <TextField
          label="Comment"
          {...text}
          fullWidth
          multiline
          rows={4}
          margin="dense"
        />
        <Button onClick={addComment}>Submit</Button>
      </Grid>
      <div>
        {track.comments.map((comment) => (
          <div key={comment._id}>
            <div>User - {comment.username}</div>
            <div>Comment - {comment.text}</div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
};

export default TrackPage;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const response = await axios.get("http://localhost:5000/tracks/" + params.id);
  return {
    props: {
      serverTrack: response.data,
    },
  };
};
