import { ListItem, ListItemIcon, ListItemText, Typography, useTheme } from '@mui/material';
import React from 'react';
import { Props } from './types';
import { useLocation } from 'react-router-dom';
import history from 'src/helpers/history';

const ItemMenu = (props: Props) => {
  const { menus, classNames, onSelect = () => {} } = props;
  const location = useLocation();
  const theme = useTheme();

  const pathName = location.pathname.split('/');
  const pathLocation = [pathName[0], pathName[1], pathName[2]];

  const checkRoute = () => {
    if (menus.columnName) {
      const route = menus.route.split('/').filter((item) => !item.includes(':'));
      return pathLocation.join('/') === `${route.join('/')}/${menus.columnName}`;
    }
    const route = menus.route.split('/').filter((item) => !item.includes(':'));
    return pathLocation.join('/').includes(route.join('/'));
  };

  return (
    <ListItem
      onClick={() => history.push(menus.route)}
      button
      sx={{
        height: 50,
        borderBottom: `solid 1px ${theme.palette.divider}`,
        backgroundColor: checkRoute() ? theme.palette.grey[300] : 'common.white',
      }}
    >
      {menus.icon && (
        <ListItemIcon
          sx={{
            paddingLeft: 1,
            color: checkRoute() ? 'primaryLight' : theme.palette.grey[300],
            '&:hover': {
              color: 'primaryLight',
            },
          }}
        >
          {menus.icon}
        </ListItemIcon>
      )}
      <ListItemText
        primary={
          <Typography
            className={classNames}
            sx={{
              fontSize: 12,
              width: '120px',
              whiteSpace: 'nowrap',
              fontWeight: 'bold',
              display: 'flex',
              paddingLeft: 1,
              textTransform: 'uppercase',
              color: checkRoute() ? theme.palette.primary.main : theme.palette.grey[700],
            }}
          >
            {menus.name}
          </Typography>
        }
        onClick={() => onSelect(menus.route)}
      />
    </ListItem>
  );
};

export default ItemMenu;
