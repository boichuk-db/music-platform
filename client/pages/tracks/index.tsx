import MainLayout from "../../layouts/MainLayout";
import { Button, Card, Grid, TextField, Typography, Box } from "@mui/material";

import Link from "next/link";
import TrackList from "../../components/TrackList";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { NextThunkDispatch, wrapper } from "../../store";
import { fetchTracks, searchTracks } from "../../store/actions-creators/track";
import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";

const Index = () => {
  const { tracks, error } = useTypedSelector((state) => state.track);
  const dispatch = useDispatch() as NextThunkDispatch;
  const [query, setQuery] = useState<string>("");
  const [timer, setTimer] = useState(null);

  const search = async (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    if (timer) {
      clearTimeout(timer);
    }
    setTimer(
      setTimeout(async () => {
        await dispatch(await searchTracks(e.target.value));
      }, 500)
    );
  };

  if (error) {
    return (
      <MainLayout>
        <Typography variant="h2">{error}</Typography>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <Grid container justifyContent="center">
        <Card style={{ width: "90%" }}>
          <Box p={3}>
            <Grid container justifyContent="space-between">
              <Typography variant="h4">List of Tracks</Typography>
              <Link href={"/tracks/create"} passHref>
                <Button variant="outlined" component="a">
                  Upload
                </Button>
              </Link>
            </Grid>
            <TextField
              fullWidth
              value={query}
              onChange={search}
              placeholder="Search"
            />
          </Box>
          <TrackList tracks={tracks} />
        </Card>
      </Grid>
    </MainLayout>
  );
};

export default Index;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    const dispatch = store.dispatch as NextThunkDispatch;
    await dispatch(fetchTracks());

    return { props: {} };
  }
);
