import { AppBar, Toolbar, Typography } from "@material-ui/core";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5">Mern Backend Sorting & Filtering</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
