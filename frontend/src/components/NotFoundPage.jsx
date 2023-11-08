import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Container maxWidth="md">
          <Typography variant="h1" component="h2" gutterBottom>
            404
          </Typography>

          <Typography variant="h4" gutterBottom>
            Sorry! We couldn't find this page.
          </Typography>
          <Typography variant="body1" className="text-gray-400" paragraph>
            But don't worry, you can find plenty of other things on our homepage.
          </Typography>

          <Link to="/" style={{ textDecoration: "none" }}>
            <Button variant="contained" color="primary" size="large">
              Go to Homepage
            </Button>
          </Link>
    </Container>
  );
};

export default NotFound;
