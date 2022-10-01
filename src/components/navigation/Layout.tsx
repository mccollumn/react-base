import React from "react";
import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import { TopNavBar } from './TopNavBar'

export const Layout = ({
  label,
  navigationActions = [],
  leftNavigationClick = () => {},
  children,
}: LayoutProps) => {
  const [open, setOpen] = React.useState(false);
  const [selectedNav, setSelectedNav]: any = React.useState();
  const navClickHandler = (action: NavigationAction) => {
    setSelectedNav(action);
    leftNavigationClick(action);
  };
  const topNavActions = navigationActions.filter((a) => a.position === "top");
  const leftNavActions = navigationActions.filter((a) => a.position !== "top");

  return (
    <Box sx={{ display: "flex", flexGrow: 1 }} aria-label="Base application">

      <TopNavBar
        topNavActions={topNavActions}
        navClickHandler={navClickHandler}
        selectedNav={selectedNav}
        label={label}
      />

      <NavDrawer
        leftNavigationActions={leftNavActions}
        leftNavigationClick={navClickHandler}
        selectedNav={selectedNav}
        open={open}
        setOpen={setOpen}
      />

      <Box
        sx={{
          marginTop: "64px",
          marginLeft: open ? "200px" : "64px",
        }}
      >
        {children}

      </Box>
    </Box>
  );
};

const NavDrawer = ({
  leftNavigationActions = [],
  leftNavigationClick,
  selectedNav,
  open,
  setOpen,
  children,
}: any) => {
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>

      <Drawer
        anchor="left"
        //open={true}
        onClose={handleClose}
        aria-label="Navigation drawer"
        variant={"permanent"}
        sx={{
          zIndex: 0
        }}
      >
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
            handleClose={handleClose}
          />
        </List>
        {children}
      </Drawer>
    </React.Fragment>
  );
};

const NavigationList = ({
  navigationActions = [],
  navigationClick = () => {},
  selectedNav,
  handleClose,
}: NavigationListProps): any => {
  return navigationActions.map((action, index) => {
    const handleClick = () => {
      navigationClick(action);
      handleClose();
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

interface LayoutProps {
  /* Title of application */
  label?: string;
  /**
   * List of all navigation actions in left navigation and app bar
   */
  navigationActions?: Array<NavigationAction>;
  leftNavigationClick?: Function;
  children?: any;
}

export interface NavigationAction {
  key?: string;
  label?: string;
  ariaLabel?: string;
  icon?: React.ReactElement | null;
  divider?: Boolean;
  path?: string;
  /**
   * Define which navigation area to display the action
   */
  position?: "left" | "top";
  /**
   * Render component instead of drawer menu item
   */
  Component?: React.ReactElement | null;
}

interface NavigationListProps {
  navigationActions: Array<NavigationAction>;
  navigationClick: Function;
  selectedNav: NavigationAction;
  handleClose: Function;
}
