import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import AddNewTaskForm from "./AddNewTaskForm";
import TasksList from "./TaskList";

// Displays heading, form to add new task and TaskList
const HomePage = () => {
  return (
    <Container style={{ display: "flex", flexDirection: "column", justifyContent: "center" , padding: "2rem"}}>
      <Paper elevation={3} style={{ padding: "1rem", width: "100%", textAlign: "center"}}>
        <Typography variant="h3" component="h1" gutterBottom>
          Task App
        </Typography>

        <AddNewTaskForm />

        <Container>
          <Grid item s={12}>
            <TasksList />
          </Grid>
        </Container>
      </Paper>
    </Container>
  );
};

export default HomePage;
