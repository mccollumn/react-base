import React from "react";
import {
  Box,
} from "@mui/material";
import { TopNavBar } from './TopNavBar'
import { LeftNavDrawer } from './LeftNavDrawer'

export const Layout = ({
  label,
  navigationActions = [],
  leftNavigationClick = () => {},
  topNavHeight = 64,
  leftNavMinWidth = 64,
  leftNavMaxWidth = 240,
  children,
}: LayoutProps) => {
  const [open, setOpen] = React.useState(true);
  const [selectedNav, setSelectedNav]: any = React.useState();

  const expandNav = () => setOpen(true);
  const collapseNav = () => setOpen(false);

  const navClickHandler = (action: NavigationAction) => {
    setSelectedNav(action);
    leftNavigationClick(action);
  };
  const topNavActions = navigationActions.filter((a) => a.position === "top");
  const leftNavActions = navigationActions.filter((a) => a.position !== "top");

  return (
    <Box
      sx={{
        display: "flex",
        flexGrow: 1
      }}
      aria-label="Base application">

      <TopNavBar
        topNavActions={topNavActions}
        navClickHandler={navClickHandler}
        selectedNav={selectedNav}
        label={label}
        expandNav={expandNav}
        open={open}
        topNavHeight={topNavHeight}
        maxWidth={leftNavMaxWidth}
      />

      <LeftNavDrawer
        leftNavigationActions={leftNavActions}
        leftNavigationClick={navClickHandler}
        selectedNav={selectedNav}
        open={open}
        collapseNav={collapseNav}
        minWidth={leftNavMinWidth}
        maxWidth={leftNavMaxWidth}
        topNavHeight={topNavHeight}
      />

      <Box
        sx={{
          marginTop: topNavHeight,
          marginLeft: open ? leftNavMaxWidth : leftNavMinWidth,
        }}
      >
        {children}

      </Box>
    </Box>
  );
};

interface LayoutProps {
  /* Title of application */
  label?: string;
  /**
   * List of all navigation actions in left navigation and app bar
   */
  navigationActions?: Array<NavigationAction>;
  leftNavigationClick?: Function;
  /**
   * Top navigation bar height
   */
  topNavHeight?: number,
  /**
   * Left navigation drawer collapsed width
   */
  leftNavMinWidth?: number,
  /**
   * Left navigation drawer expanded width
   */
  leftNavMaxWidth?: number,

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
