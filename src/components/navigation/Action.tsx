import React from 'react';
import {
  IconButton,
  Tooltip,
  Box,
  ButtonBase,
  Typography
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
          navClickHandler={navClickHandler}
          selectedNav={selectedNav}
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
  popoverAction,
  selectedNav,
  navClickHandler = () => {},
  closePopover = () => {},
}: NavPopoverMenuItemProps) => {

  const baseClass = ['nav-popover-menu-item'];

  const clickHandler = () => {
    navClickHandler(popoverAction);
    closePopover();
  }

  if(selectedNav === popoverAction) {
    baseClass.push('item-selected');
  }

  return (
    <NavPopoverMenuItemStyled
      className={baseClass.join(' ')}
      onClick={clickHandler}>

      <Box className={'nav-menu-icon'}>
        {popoverAction.icon}
      </Box>

      <Typography
        variant={'subtitle1'}
        className='nav-menu-label'>
        {popoverAction.label}
      </Typography>

    </NavPopoverMenuItemStyled>
  );
}

const NavPopoverMenuItemStyled = styled(ButtonBase)(({
  theme
}: any) => {
  return {

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: theme.spacing(1.5),
    gap: theme.spacing(1.5),
    height: theme.spacing(5),

    '&.item-selected': {
      background: theme.palette.action.selected,
    },

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
  /**
   * Current selected navigation action
   */
  selectedNav?: NavigationAction,
  /**
   * Handle click for navigation
   */
  navClickHandler: any,
  /**
   * Click handler passed in from parent, or injected from popover/modal
   */
  closePopover?: any
};
