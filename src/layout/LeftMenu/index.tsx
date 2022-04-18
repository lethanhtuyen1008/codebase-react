import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import Scrollbar from 'react-custom-scrollbars';
import { RouteName } from 'src/routers/routeName';
import { RouteTitle } from 'src/routers/routeTitle';
import { SectionTitle } from 'src/routers/sectionTitle';
import SectionMenu from '../SectionMenu';
import useStyles from './style';
import { Section } from './types';

export const Navigator = () => {
  const classes = useStyles();

  const menus: Section[] = [
    {
      sectionName: SectionTitle.DASHBOARD,
      menus: [
        {
          name: RouteTitle.DASHBOARD,
          route: RouteName.DASHBOARD,
          icon: null,
        },
      ],
    },
    {
      sectionName: SectionTitle.STASTIC,
      menus: [
        {
          name: RouteTitle.STASTIC,
          route: RouteName.STASTIC,
          icon: null,
        },
      ],
    },
    {
      sectionName: SectionTitle.USER,
      menus: [
        {
          name: 'Người dùng',
          route: RouteName.CUSTOMER,
          icon: null,
          children: [
            {
              name: RouteTitle.CUSTOMER,
              route: RouteName.CUSTOMER,
              icon: <PersonIcon />,
            },
          ],
        },
      ],
    },
  ];

  return (
    <div className={classes.root}>
      <Scrollbar autoHide>
        {menus.map((menu, index) => (
          <SectionMenu menus={menu} key={index} />
        ))}
      </Scrollbar>
    </div>
  );
};

export default Navigator;
