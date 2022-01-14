import { FC } from "react";
import Navbar from "../components/Navbar";
import { Container } from "@mui/material";

const MainLayout: FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container
        component="main"
        style={{
          marginTop: 90,
          marginLeft: 60,
        }}
      >
        {children}
      </Container>
    </>
  );
};

export default MainLayout;
