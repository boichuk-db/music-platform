import { Button, Card, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import React, { useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import { ITrack } from "../../types/track";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import axios from "axios";

const TrackPage = ({ serverTrack }) => {
  const [track, setTrack] = useState<ITrack>(serverTrack);
  const router = useRouter();

  return (
    <MainLayout>
      <Link href={"/tracks"}>
        <Button variant="outlined" component="a" startIcon={<ArrowBackIcon />}>
          <Typography variant="h6">Back to list</Typography>
        </Button>
      </Link>
      <Grid container alignItems="center" style={{ margin: "20px 0" }}>
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
        {track.comments.map((comment: any) => (
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

export const getServersideProps: GetServerSideProps = async ({ params }) => {
  const response = await axios.get("http://localhost:5000/tracks/" + params.id);
  return {
    props: {
      serverTrack: response.data,
    },
  };
};
