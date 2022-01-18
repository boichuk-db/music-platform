import { Button, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import StepWrapper from "../../components/StepWrapper";
import FileUpload from "../../components/FileUpload";
import MainLayout from "../../layouts/MainLayout";
import { useInput } from "../../hooks/useInput";
import { useRouter } from "next/router";
import axios from "axios";

const create = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [picture, setPicture] = useState(null);
  const [audio, setAudio] = useState(null);
  const name = useInput("");
  const artist = useInput("");
  const text = useInput("");
  const router = useRouter();

  const next = () => {
    if (activeStep !== 2) {
      setActiveStep((prev) => prev + 1);
    } else {
      const formData = new FormData();
      formData.append("name", name.value);
      formData.append("artist", artist.value);
      formData.append("text", text.value);
      formData.append("picture", picture);
      formData.append("audio", audio);
      axios
        .post("http://localhost:5000/tracks", formData)
        .then((resp) => {
          console.log({ resp });
          router.push("/tracks");
        })
        .catch((e) => console.log(e));
    }
  };

  const back = () => {
    setActiveStep((prev) => prev - 1);
  };

  return (
    <MainLayout>
      <StepWrapper activeStep={activeStep}>
        {activeStep === 0 && (
          <Grid container direction="column" style={{ padding: 20 }}>
            <TextField
              {...name}
              margin="dense"
              label={"Title of Track"}
              required
            />
            <TextField
              {...artist}
              margin="dense"
              label={"Name of Artist"}
              required
            />
            <TextField
              {...text}
              margin="dense"
              label={"Description"}
              multiline
              rows={4}
            />
          </Grid>
        )}

        {activeStep === 1 && (
          <FileUpload setFile={setPicture} accept="image/*" type="image">
            <Button>Upload Image</Button>
          </FileUpload>
        )}
        {activeStep === 2 && (
          <FileUpload setFile={setAudio} accept="audio/*" type="audio">
            <Button>Upload Track</Button>
          </FileUpload>
        )}
      </StepWrapper>
      <Grid container justifyContent="space-evenly">
        <Button variant="outlined" onClick={back} disabled={activeStep === 0}>
          Back
        </Button>
        <Button variant="contained" onClick={next}>
          {activeStep === 2 ? "Load" : "Next"}
        </Button>
      </Grid>
    </MainLayout>
  );
};

export default create;
