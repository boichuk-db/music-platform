import { Button, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import StepWrapper from "../../components/StepWrapper";
import FileUpload from "../../components/FileUpload";
import MainLayout from "../../layouts/MainLayout";

const create = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [picture, setPicture] = useState(null);
  const [audio, setAudio] = useState(null);
  const back = () => {
    setActiveStep((prev) => prev - 1);
  };
  const next = () => {
    if (activeStep !== 2) {
      setActiveStep((prev) => prev + 1);
    }
  };

  return (
    <MainLayout>
      <StepWrapper activeStep={activeStep}>
        {activeStep === 0 && (
          <Grid container direction="column" style={{ padding: 20 }}>
            <TextField margin="dense" label={"Title of Track"} />
            <TextField margin="dense" label={"Name of Artist"} />
            <TextField
              margin="dense"
              label={"Description"}
              multiline
              rows={4}
            />
          </Grid>
        )}

        {activeStep === 1 && (
          <FileUpload setFile={setPicture} accept="image/*">
            <Button>Upload Image</Button>
          </FileUpload>
        )}
        {activeStep === 2 && (
          <FileUpload setFile={setAudio} accept="audio/*">
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
