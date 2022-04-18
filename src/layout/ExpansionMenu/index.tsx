import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { ListItemText, ListItem, Collapse } from '@mui/material';
import clsx from 'clsx';
import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { RootState } from 'src/redux/types';
import useStyles from './styles';
import { ExpansionProps } from './types';

const ExpansionMenu = (props: ExpansionProps) => {
  const classes = useStyles();
  const { label, children, route, icon, onChecked = () => {} } = props;
  const menuReducer = useSelector((state: RootState) => state.menuReducer);
  const showExpansion = route !== '/' && menuReducer.open.includes(route);
  const location = useLocation();

  const pathName = location.pathname.split('/');
  const pathLocation = [pathName[0], pathName[1], pathName[2]];

  const checkRoute = () => {
    return pathLocation.join('/').includes(route);
  };

  const onCLick = () => {
    onChecked(route);
  };

  const renderContent = React.useMemo(() => {
    return (
      <div
        className={clsx(
          classes.root,
          showExpansion && classes.active,
          checkRoute() && classes.defaultActive,
        )}
      >
        <ListItem className={showExpansion ? classes.border : ''} button onClick={onCLick}>
          {icon ? icon : ''}
          <div className={classes.title}>
            <ListItemText
              primary={
                <div className={clsx(classes.label, checkRoute() && classes.defaultActiveText)}>
                  {label}
                </div>
              }
            />
            <div className={classes.containerIcon}>
              {showExpansion ? (
                <ExpandLess className={classes.icon} />
              ) : (
                <ExpandMore className={classes.icon} />
              )}
            </div>
          </div>
        </ListItem>
        <Collapse in={showExpansion} timeout='auto' unmountOnExit>
          <div>{children}</div>
        </Collapse>
      </div>
    );
  }, [checkRoute]);

  return <>{renderContent}</>;
};
export default ExpansionMenu;
