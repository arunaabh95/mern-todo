import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTask } from "../redux/action";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Alert from "@mui/material/Alert";
import Grid from "@mui/material/Grid";

const AddNewTaskForm = () => {
  const dispatch = useDispatch();
  const { isLoadingPost, successPost, errorPost } = useSelector((state) => state.tasks);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [validationError, setValidationError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (taskTitle.length === 0 || taskDescription.length === 0) {
      setValidationError("Title and Description fields are required");
      return;
    }

    // Clear error message
    setValidationError("");

    // Add new task
    dispatch(createTask({ taskTitle, taskDescription }));

    // Clear input fields
    setTaskTitle("");
    setTaskDescription("");
  };

  useEffect(() => {
    if (successPost) {
      setSuccessMessage(successPost.message);
    } else if (errorPost) {
      setValidationError("Error: " + errorPost.message);
    }
  }, [successPost, errorPost]);

  useEffect(() => {
    setTimeout(() => {
      setSuccessMessage("");
      setValidationError("");
    }, 3000);
  }, [successMessage, validationError]);

  return (
    <Container>
      <Grid container padding={5}>
        <Grid item xs={12}>
          {validationError && <Alert severity="error">{validationError}</Alert>}
          {successMessage && <Alert severity="success">{successMessage}</Alert>}
        </Grid>
        <Container>
        <form onSubmit={handleSubmit}>
          <Grid item s={10}>
            <TextField
              variant="outlined"
              fullWidth
              label="Task Title"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              required
              margin="normal"
            />
          </Grid>
          <Grid item s={10}>
            <TextField
              variant="outlined"
              fullWidth
              label="Task Description"
              multiline
              rows={3}
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              required
              margin="normal"
            />
          </Grid>
          <Grid item s={10}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disabled={isLoadingPost}
            >
              {isLoadingPost ? "Adding ..." : "Add Task"}
            </Button>
          </Grid>
        </form>
        </Container>
      </Grid>
      </Container>
  );
};

export default AddNewTaskForm;
