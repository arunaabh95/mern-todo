import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { updateTask } from "../redux/action";
import {Container, Typography, Grid, Checkbox, Paper, FormControlLabel, CircularProgress, Button} from "@mui/material";

// Intially when we use get command to call all the tasks the tasks variable is populated. 
// But on updating we get the isLoadingPut or errorPut variable returned from the redux store
const EditTaskForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {isLoadingPut, successPut, errorPut } = useSelector((state) => state.tasks);
  const [id, setId] = useState(-1);
  const { tasks } = useSelector((state) => state.tasks.tasks);
  const [searchParams] = useSearchParams();
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskCompleted, setTaskCompleted] = useState(false);
  const [validationError, setValidationError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (!searchParams.get("id")) {
      navigate("/");
    } else {
        setId(searchParams.get("id"));
    }
  }, [searchParams, navigate]);

  useEffect(() => {
    if(tasks && tasks.length) {
        const [task] = tasks.filter(t => t._id === id);
        if(task) {
            setTaskTitle(task.title);
            setTaskCompleted(task.completed);
            setTaskDescription(task.description);
        }
    }
  }, [tasks, id]);


  const handleSubmit = (e) => {
    e.preventDefault();

    // form validation check and set error message
    if (taskTitle.length === 0) {
      setValidationError("Title filed is required");
      return;
    } else if (taskDescription.length === 0) {
      setValidationError("Description filed is required");
      return;
    }

    // Clear error message
    setValidationError("");

    // if validation is ok, then add new task
    if (taskTitle && taskDescription) {
      dispatch(updateTask({taskId: searchParams.get("id"), taskTitle, taskDescription, completed: taskCompleted }))
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setSuccessMessage("");
      setValidationError("");
    }, 2000);
  }, [successMessage, validationError]);

  useEffect(() => {
    if (successPut) {
      setSuccessMessage(successPut.message);
    } else if (errorPut) {
      setValidationError("Error: " + errorPut.message);
    }
  }, [successPut, errorPut]);

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 5}}>
        <Typography variant="h4" component="h1" gutterBottom>
          Edit Task
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid sm={10} padding={1}>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Task Title"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
            />
          </Grid>

          <Grid sm={10} padding={1}>
            <textarea
              className="w-full p-2 border rounded"
              cols="40"
              rows="5"
              font="14px black"
              placeholder="Task Description"
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
            />
          </Grid>
        
          <Grid sm={10} padding={1}>
          <FormControlLabel
            control={
              <Checkbox
                checked={taskCompleted}
                onChange={(e) => setTaskCompleted(e.target.checked)}
              />
            }
            label="Task Completed"
          />
          </Grid>

          <Container justifyContent="flex-end">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={isLoadingPut}
              sx = {{p: 1, m: 2}}
            >
              {isLoadingPut ? (
                <CircularProgress size={24} />
              ) : (
                "Update Task"
              )}
            </Button>
            <Link to="/" className="text-decoration-none">
              <Button variant="outlined" 
                color="primary"
                sx = {{p: 1, m: 1}}
              >
                Back to Homepage
              </Button>
            </Link>
          </Container>
        </form>

        {errorPut && (
          <div className="mt-3 text-red-500">{errorPut.message}</div>
        )}
      </Paper>
    </Container>
  );
};
export default EditTaskForm;