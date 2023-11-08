import EditTaskForm from "./EditTaskForm";
import { Container, Typography } from "@mui/material";

const EditPage = () => {
  return (
    <Container sx = {{ pt: 2}}>
      <div className="flex flex-col items-center justify-center">
      <Typography variant="h4" component="h1" gutterBottom> Task App </Typography>

        {/* TASK EDIT FORM COMPONENT */}
        <EditTaskForm />
      </div>
    </Container>
  );
};

export default EditPage;