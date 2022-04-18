import React from 'react';
import { Props } from './types';
import MenuContent from './MenuContent';

const SectionMenu = (props: Props) => {
  const { menus } = props;

  return (
    <div>
      {menus.menus.map((menu) => (
        <MenuContent menuDetail={menu} key={menu.name} />
      ))}
    </div>
  );
};

export default SectionMenu;
