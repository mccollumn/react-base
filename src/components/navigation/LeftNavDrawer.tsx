import { ChevronLeft } from "@mui/icons-material";
import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  IconButton,
} from "@mui/material";
// ChevronLeftIcon
import { NavigationAction } from './Layout';

export const LeftNavDrawer = ({
  leftNavigationActions = [],
  leftNavigationClick,
  collapseNav = () => {},
  selectedNav,
  open,
  children,
}: any) => {
  return (
    <Drawer
      anchor="left"
      aria-label="Navigation drawer"
      variant={"permanent"}
      sx={{
        zIndex: 0
      }}
    >

      <Box
        sx={{
          height: 64,
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center'
        }}>

        <IconButton
          onClick={collapseNav}
          size="large"
          edge="start"
          color="inherit"
          aria-label="Navigation menu"
          sx={{
            height: 48
          }}
        >
          <ChevronLeft />
        </IconButton>

      </Box>

      <Divider />

      <List
        className="ListContainer"
        sx={{
          width: open ? "200px" : "64px",
          overflowX: "hidden",
        }}
        aria-label="Navigation list"
      >
        <NavigationList
          navigationActions={leftNavigationActions}
          navigationClick={leftNavigationClick}
          selectedNav={selectedNav}
        />
      </List>
      {children}
    </Drawer>
  );
}

const NavigationList = ({
  navigationActions = [],
  navigationClick = () => {},
  selectedNav,
}: NavigationListProps): any => {
  return navigationActions.map((action, index) => {
    const handleClick = () => {
      navigationClick(action);
    };
    if (action.divider) {
      return <Divider key={index} />;
    }
    if (action.Component) {
      return <ComponentOverride component={action.Component} key={index} />;
    }
    return (
      <ListItemButton
        selected={action.key === selectedNav?.key}
        key={index}
        onClick={handleClick}
      >
        <ListItemIcon>{action.icon}</ListItemIcon>
        <ListItemText>{action.label}</ListItemText>
      </ListItemButton>
    );
  });
};

const ComponentOverride = ({ component }: any) => {
  return <div>{component}</div>;
};

interface NavigationListProps {
  navigationActions: Array<NavigationAction>;
  navigationClick: Function;
  selectedNav: NavigationAction;
}
