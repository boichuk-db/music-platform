import MainLayout from "../../layouts/MainLayout";
import { Button, Card, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import TrackList from "../../components/TrackList";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { NextThunkDispatch, wrapper } from "../../store";
import { fetchTracks } from "../../store/actions-creators/track";

const index = () => {
  const { tracks, error } = useTypedSelector((state) => state.track);

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
              <Link href={"/tracks/create"}>
                <Button variant="outlined" component="a">
                  Upload
                </Button>
              </Link>
            </Grid>
          </Box>
          <TrackList tracks={tracks} />
        </Card>
      </Grid>
    </MainLayout>
  );
};

export default index;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    const dispatch = store.dispatch as NextThunkDispatch;
    await dispatch(fetchTracks());

    return { props: {} };
  }
);
