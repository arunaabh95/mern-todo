import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Typography, Grid,  } from "@mui/material";
import { getTasks } from "../redux/action";
import Task from "./Task";

const TasksList = () => {
  const dispatch = useDispatch();
  const { isLoading, tasks, error, isLoadingPost, isLoadingDelete } = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(getTasks);
  }, [dispatch, isLoadingPost, isLoadingDelete]);

 // load the tasks from store and display each of them
  return (
    <Container>
      <Grid container spacing={2}>
        {isLoading && (
          <Grid item xs={12}>
            <Typography variant="h5" color="primary">
              Loading...
            </Typography>
          </Grid>
        )}
        {error && (
          <Grid item xs={12}>
            <Typography variant="h5" color="error">
              Error: {error.message}
            </Typography>
          </Grid>
        )}

        {tasks.length === 0 ? (
          <Grid item xs={12}>
            <Typography variant="h5" color="primary">
              Sorry! No Tasks Found.
            </Typography>
          </Grid>
        ) : (
          tasks.tasks.map((task, index) => (
            <Task task={task} index={index} />
          ))
        )}
      </Grid>
    </Container>
  );
};


export default TasksList;