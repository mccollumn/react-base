import React from 'react';
import {
  IconButton,
  Tooltip,
} from "@mui/material";
import {
  NavigationAction
} from './Layout';
import {
  PopoverRB
} from '../popover/PopoverRB'

/**
 * Standard Navigation Button/Icon
 */
export const Action = ({
  action,
  navClickHandler = () => {},
  selectedNav,
}: ActionProps) => {

  if (action.Component) {
    return React.cloneElement(action.Component, {key: action.key});
  }

  const {
    PopoverContent,
    PopoverProps
  } = action;

  const clickHandler = () => navClickHandler(action);

  // Action will open a popover on click
  if (PopoverContent) {

    return (
      <PopoverRB
        {...PopoverProps}
        ActionComponent={
          <NavAction
            action={action}
            selectedNav={selectedNav}
          />
        }>
        {PopoverContent}
      </PopoverRB>
    );
  }

  return (
    <NavAction
      action={action}
      selectedNav={selectedNav}
      onClick={clickHandler}
    />
  );
}

const NavAction = ({
  action,
  selectedNav,
  onClick
}: any) => {

  const selected = action.key === selectedNav?.key;

  return (
    <Tooltip key={action.key} title={action.label || ""}>
      <IconButton
        color={selected ? "secondary" : "inherit"}
        key={action.key}
        onClick={onClick}
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
  navClickHandler: Function,
};
