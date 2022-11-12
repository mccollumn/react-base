import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Tooltip,
  Box
} from "@mui/material";
import {
  NavigationAction
} from './Layout';

/**
 * Standard Navigation Button/Icon
 */
export const Action = ({
  action,
  navClickHandler = () => {},
  selectedNav
}: ActionProps) => {

  if (action.Component) {
    return React.cloneElement(action.Component, {key: action.key});
  }
  const clickHandler = () => navClickHandler(action);
  const selected = action.key === selectedNav?.key;

  return (
    <Tooltip key={action.key} title={action.label || ""}>
      <IconButton
        color={selected ? "secondary" : "inherit"}
        key={action.key}
        onClick={clickHandler}
        aria-label={action.ariaLabel}
      >
        {action.icon}
      </IconButton>
    </Tooltip>
  );
}

export interface ActionProps {
  /**
   * Navigation action properties
   * Displays navigation button/icon to user
   */
  action: NavigationAction,
  /**
   * Current selected navigation action
   */
  selectedNav?: NavigationAction,
  /**
   * When user clicks a navigation item
   */
  navClickHandler: Function
};
