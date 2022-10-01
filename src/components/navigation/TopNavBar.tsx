import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from "@mui/material";
import { Menu } from "@mui/icons-material";

export const TopNavBar = ({
  topNavActions,
  navClickHandler,
  selectedNav,
  label,
  expandNav = () => {},
  open
}: any) => {

  const topBarNavigationActions = TopBarNavigationActions({
    topNavActions,
    navClickHandler,
    selectedNav,
  });

  return (
    <AppBar
      sx={{
        width: open ? 'calc(100% - 200px)' : '100%'
      }}>

      <Toolbar>

        <IconButton
          onClick={expandNav}
          size="large"
          edge="start"
          color="inherit"
          aria-label="Navigation menu"
        >
          <Menu />
        </IconButton>

        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1
          }}>

          {label}

        </Typography>

        {topBarNavigationActions}

      </Toolbar>

    </AppBar>
    
  );
}

const TopBarNavigationActions = ({
  topNavActions = [],
  navClickHandler = () => {},
  selectedNav = {},
}: any) => {
  return topNavActions.map((a: any) => {
    const clickHandler = () => navClickHandler(a);
    const selected = a.key === selectedNav.key;
    return (
      <IconButton
        color={selected ? "secondary" : "inherit"}
        key={a.key}
        onClick={clickHandler}
      >
        {a.icon}
      </IconButton>
    );
  });
};
