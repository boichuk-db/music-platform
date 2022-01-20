import { FC } from "react";
import Navbar from "../components/Navbar";
import { Container } from "@mui/material";
import Player from "../components/Player";
import Head from "next/head";

interface MainLayoutProps {
  title?: string;
  description?: string;
  keywords?: string;
}

const MainLayout: FC<MainLayoutProps> = ({
  children,
  title,
  description,
  keywords,
}) => {
  return (
    <>
      <Head>
        <title>{title || "Quasar Tracks"}</title>
        <meta
          name="description"
          content={"Music App based on React" + description}
        ></meta>
        <meta name="robots" content="index, follow"></meta>
        <meta
          name="keywords"
          content={keywords || "Music, track, popular, dance"}
        ></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>

      <Navbar />
      <Container
        component="main"
        style={{
          margin: "90px auto",
        }}
      >
        {children}
      </Container>
      <Player />
    </>
  );
};

export default MainLayout;
