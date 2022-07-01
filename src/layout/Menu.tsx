import { Container } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import { Link } from 'react-router-dom';

const MenuItem = ({ label, to }: { label: string; to: string }) => {
  return (
    <Link
      to={to}
      style={{
        textDecoration: 'none',
        marginLeft: '30px',
        color: '#333',
        fontSize: '18px',
      }}
    >
      {label}
    </Link>
  );
};
function Menu() {
  return (
    <Box
      sx={{
        display: 'flex',
        marginBottom: '30px',
        zIndex: '999',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'end',
        }}
      >
        <MenuItem to='/' label='Home' />
        <MenuItem to='/product' label='Products' />
        <MenuItem to='/shop' label='Shop' />
        <MenuItem to='/about' label='About' />
        <MenuItem to='/contacts' label='Contact' />
      </Container>
    </Box>
  );
}
export default Menu;
