import React from 'react';
import {
  IconButton,
  Tooltip,
  Box,
} from "@mui/material";
import { styled } from '@mui/material/styles';
import {
  NavigationAction, PopoverNavigationActionProps
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

  const clickHandler = () => navClickHandler(action);

  // Action will open a popover on click
  if (action.popoverActions) {

    const PopoverProps = {};
    const PopoverContent = action.popoverActions.map((
      p: PopoverNavigationActionProps,
      idx: number
    ) => {
      return (
        <NavPopoverMenuItem
          key={idx}
          popoverAction={p}
        />
      );
    });

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

const NavPopoverMenuItem = ({
  popoverAction
}: NavPopoverMenuItemProps) => {

  return (
    <NavPopoverMenuItemStyled
      className={`nav-popover-menu-item`}
    >
      <Box className={'nav-menu-icon'}>
        {popoverAction.icon}
      </Box>

      <Box className={'nav-menu-label'}>
        {popoverAction.label}
      </Box>

    </NavPopoverMenuItemStyled>
  );
}

const NavPopoverMenuItemStyled = styled(Box)(({
  theme
}: any) => {
  return {

    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1.5),
    height: theme.spacing(5),
    cursor: 'pointer',

    '.nav-menu-label': {
      whiteSpace: 'nowrap',
    }
  };
});

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

export interface NavPopoverMenuItemProps {
  /**
   * Navigation action properties
   * Displays navigation button/icon to user
   */
  popoverAction: PopoverNavigationActionProps,
};
