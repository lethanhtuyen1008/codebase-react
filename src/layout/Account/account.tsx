import * as React from 'react';
import useStyles from './style';
import { cookieProvider } from 'src/providers/cookieProvider';
import { CookieKey } from 'src/commons/cookieKey';
import { ResponseAuthType } from 'src/ami/oauth/useVerifiedAuth';
import { Chip, MenuItem, Popover } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useTranslation } from 'react-i18next';
import history from 'src/helpers/history';
import { RouteName } from 'src/routers/routeName';

const Account = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const { t } = useTranslation();

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const user: ResponseAuthType = cookieProvider.getObject(
    CookieKey.VERIFIED_RESPONSE_AUTH,
  ) as ResponseAuthType;

  return (
    <>
      <Chip
        className={classes.chip}
        icon={<AccountCircleIcon className={classes.icon} />}
        label={<p className={classes.name}>{user && user.email.split('@')[0]}</p>}
        clickable
        onClick={handleClick}
      />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <MenuItem
          onClick={() => {
            history.push(RouteName.PROFILE);
            handleClose();
          }}
        >
          {t('Account')}
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            history.push(RouteName.SIGN_OUT);
          }}
        >
          {t('Sign Out')}
        </MenuItem>
      </Popover>
    </>
  );
};

export default Account;
