import { useDispatch } from "react-redux";
import { Typography, Paper, ButtonGroup, Grid, Button, Checkbox, FormControlLabel } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import { deleteTask } from "../redux/action";

// Component to render a single task. To mark the task as completed we need to edit it
const Task = ({ task, index }) => {
    const dispatch = useDispatch();
     // make a function to handle delete a task
    const handleDeleteTask = (taskId) => {
        dispatch(deleteTask({ taskId }));
    };

    return(
        <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper sx={{ p: 2 }}>
                <Typography variant="h5" color="textPrimary" gutterBottom>
                  Title:{" "}
                  <span className={task.completed ? "line-through text-success" : "text-dark"}>
                    {task.title}
                  </span>
                </Typography>
                <Typography variant="body1" color="textPrimary" paragraph>
                  Description: {task.description}
                </Typography>
                <FormControlLabel
                  control={<Checkbox checked={task.completed} color="primary" />}
                  label="Completed"
                />
                <ButtonGroup>
                  <Link to={`edit-task/?id=${task._id}`}>
                    <Button variant="contained" color="primary" startIcon={<EditIcon />} sx={{ mx: 1 }}>
                      Edit
                    </Button>
                  </Link>
                  <Button
                    variant="contained"
                    color="error"
                    startIcon={<DeleteIcon />}
                    onClick={() => handleDeleteTask(task._id)}
                    sx={{ mx: 1 }}
                  >
                    Delete
                  </Button>
                </ButtonGroup>
              </Paper>
            </Grid>
    );
}; 

export default Task;