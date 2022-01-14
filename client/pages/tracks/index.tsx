import MainLayout from "../../layouts/MainLayout";
import { Button, Card, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import { ITrack } from "../../types/track";
import TrackList from "../../components/TrackList";

const index = () => {
  const tracks: ITrack[] = [
    {
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
    },
    {
      _id: "61ded75effc0bd479cb3a1aa",
      comments: [],
      audio:
        "http://localhost:5000/audio/7008b561-0332-400a-9995-496d6d4d05fe.mp3",
      picture:
        "http://localhost:5000/image/56bde436-c64f-4cc1-82e4-8a2adee34a7b.jpg",
      listens: 0,
      text: "Save all memories",
      artist: "Copycat",
      name: "Future",
    },
    {
      _id: "61e0009acef371050d161b7a",
      comments: [],
      audio:
        "http://localhost:5000/audio/9be44092-b4d7-4398-84d1-75cd01e1c9c6.mp3",
      picture:
        "http://localhost:5000/image/e939b59e-2665-4855-9e2c-e8db1180c4a2.jpg",
      listens: 0,
      text: "Realy fast",
      artist: "BDB",
      name: "Faster than light",
    },
  ];
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
