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
  Collapse
} from "@mui/material";
import { NavigationAction } from './Layout';

export const LeftNavDrawer = ({
  leftNavigationActions = [],
  leftNavigationClick,
  collapseNav = () => {},
  selectedNav,
  open,
  minWidth,
  maxWidth,
  topNavHeight,
  children,
}: any) => {
  return (

    <Drawer
      anchor="left"
      aria-label="Navigation drawer"
      variant={"permanent"}
      sx={{
        zIndex: 0,
      }}
    >

      <Collapse
        sx={{
          width: minWidth
        }}
        orientation="horizontal"
        in={open}
        collapsedSize={minWidth}>

        <Box
          sx={{
            height: topNavHeight,
            width: maxWidth,
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center'
          }}>

          <IconButton
            onClick={collapseNav}
            size="large"
            edge="start"
            color="inherit"
            aria-label="Collapse Left Navigation"
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

      </Collapse>

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
