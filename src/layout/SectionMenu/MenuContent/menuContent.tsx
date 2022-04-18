import React from 'react';
import { useDispatch } from 'react-redux';
import ExpansionMenu from 'src/layout/ExpansionMenu';
import { OPEN_MENU } from 'src/redux/menu/menuType';
import ItemMenu from '../ItemMenu';
import useStyles from './style';
import { Props } from './types';

const SectionMenu = (props: Props) => {
  const { menuDetail: menus } = props;
  const classes = useStyles();
  const dispatch = useDispatch();

  const onSelect = (route: string) => {
    dispatch({ type: OPEN_MENU, open: route });
  };

  const renderMenuContent = React.useMemo(() => {
    return (
      <>
        {menus.children ? (
          <ExpansionMenu label={menus.name} route={menus.route} onChecked={onSelect}>
            {menus.children?.map((menu) => (
              <ItemMenu menus={menu} classNames={classes.content} key={menu.name} />
            ))}
          </ExpansionMenu>
        ) : (
          <div>
            <ItemMenu menus={{ name: menus.name, route: menus.route }} onSelect={onSelect} />
          </div>
        )}
      </>
    );
  }, []);

  return <>{renderMenuContent}</>;
};

export default SectionMenu;
