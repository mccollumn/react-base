import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import { styled } from '@mui/material/styles';

export const TopNavBar = ({
  topNavActions,
  navClickHandler,
  selectedNav,
  label,
  expandNav = () => {},
  open,
  topNavHeight,
  maxWidth,
}: any) => {

  const topBarNavigationActions = TopBarNavigationActions({
    topNavActions,
    navClickHandler,
    selectedNav,
  });

  return (
    <AppBarStyled
      data-max={maxWidth}
      data-open={open}>

      <Toolbar
        sx={{
          height: topNavHeight
        }}>

        <IconButton
          onClick={expandNav}
          size="large"
          edge="start"
          color="inherit"
          aria-label="Navigation menu"
          sx={{
            display: open ? 'none' : 'block',
            height: 48
          }}
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

    </AppBarStyled>
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

const AppBarStyled = styled(AppBar)(({
  theme,
  ...props
}: any) => {

  const open = props['data-open'];
  const max = props['data-max'];

  return {
    width: open ? `calc(100% - ${max}px)` : '100%',
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }

});
