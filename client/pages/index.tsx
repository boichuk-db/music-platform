import { Box, Typography } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Navbar from "../components/Navbar";
import MainLayout from "../layouts/MainLayout";

const Home: NextPage = () => {
  return (
    <MainLayout title={"All tracks"}>
      <Box className={styles.container}>
        <Navbar />
        <Typography variant="h3" component="h2" gutterBottom>
          Welcome to Quasar Player
        </Typography>
        <Typography variant="h4" component="h3" gutterBottom>
          Here you can find best music
        </Typography>
      </Box>
    </MainLayout>
  );
};

export default Home;
