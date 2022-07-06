import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import { Container } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { styled } from '@mui/material/styles';
import PersonIcon from '@mui/icons-material/Person';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge, { BadgeProps } from '@mui/material/Badge';
import Menu from './Menu';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import TextField from 'src/components/ui/textField';
const Item = ({ label }: { label: string }) => {
  return (
    <Typography
      variant='subtitle1'
      component='span'
      sx={{ color: '#fff', marginLeft: '30px', fontSize: '12px', fontWeight: '600' }}
    >
      {label}
    </Typography>
  );
};
const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: 0,
    top: 3,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export default function Header() {
  const [state, setState] = React.useState(false);
  return (
    <Box>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position='static'
          sx={{
            backgroundColor: 'primary.main',
            height: '40px',
            display: 'flex',
            justifyContent: ' center',
          }}
        >
          <Toolbar>
            <Container sx={{ display: 'flex', alignItems: 'center' }}>
              <Box sx={{ display: 'flex', alignSelf: 'center', mr: 2 }}>
                <LocalPhoneIcon />
                <Typography
                  variant='subtitle1'
                  component='span'
                  sx={{ flexGrow: 1, marginLeft: '10px', color: 'common.white' }}
                >
                  +0904121653
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignSelf: 'center' }}>
                <EmailIcon sx={{ marginLeft: '3px', fontSize: '20px' }} />
                <Typography
                  variant='subtitle1'
                  component='span'
                  sx={{ flexGrow: 1, marginLeft: '10px', color: 'common.white' }}
                >
                  tony@yahoo.com.vn
                </Typography>
              </Box>

              <Box sx={{ ml: 'auto', display: { xs: 'none', sm: 'block' } }}>
                <Item label='Them FAQ"s' />
                <Item label='Need Help' />
                <Item label='EN' />
                <Item label='USD' />
              </Box>
            </Container>
          </Toolbar>
        </AppBar>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position='static'
          sx={{ bgcolor: 'common.white', display: { xs: 'none', md: 'block' } }}
        >
          <Toolbar>
            <Container sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <svg
                  width='120'
                  height='34'
                  viewBox='0 0 120 34'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M72.7809 8.7124C73.1179 8.7124 73.4549 8.78823 73.7919 8.93988C74.1457 9.07468 74.449 9.26004 74.7018 9.49594C74.9883 9.76555 75.1989 10.0689 75.3337 10.4059C75.4685 10.7429 75.5359 11.0883 75.5359 11.4422C75.5527 11.796 75.4938 12.1414 75.359 12.4785C75.2242 12.8155 75.0304 13.1103 74.7776 13.3631L61.508 26.7338H73.2864C73.6739 26.7338 74.0362 26.8097 74.3732 26.9613C74.7102 27.113 74.9967 27.3152 75.2326 27.5679C75.4853 27.8207 75.6791 28.1156 75.8139 28.4526C75.9656 28.7727 76.0414 29.1182 76.0414 29.4889C76.0414 29.8596 75.9656 30.2134 75.8139 30.5504C75.6791 30.8874 75.4853 31.1823 75.2326 31.4351C74.9967 31.671 74.7102 31.8648 74.3732 32.0164C74.0362 32.1512 73.6739 32.2186 73.2864 32.2186H55.3408C54.869 32.2186 54.4393 32.1175 54.0517 31.9153C53.6642 31.6963 53.3524 31.4098 53.1165 31.0559C52.6784 30.4662 52.4846 29.8175 52.5352 29.1097C52.5857 28.5368 52.8216 28.0397 53.2429 27.6185L66.4873 14.1972H55.543C55.1723 14.1972 54.8184 14.1214 54.4814 13.9697C54.1444 13.8181 53.8579 13.6159 53.622 13.3631C53.3861 13.1103 53.1924 12.8155 53.0407 12.4785C52.9059 12.1246 52.8385 11.7623 52.8385 11.3916C52.8385 11.0209 52.9059 10.6755 53.0407 10.3553C53.1924 10.0183 53.3861 9.73185 53.622 9.49594C53.8579 9.26004 54.1444 9.07468 54.4814 8.93988C54.8184 8.78823 55.1723 8.7124 55.543 8.7124H72.7809Z'
                    fill='#0F3460'
                  />
                  <path
                    d='M109.965 29.5141C109.965 29.8848 109.898 30.2387 109.763 30.5757C109.628 30.9127 109.434 31.1992 109.182 31.4351C108.946 31.671 108.668 31.8648 108.348 32.0164C108.027 32.1512 107.682 32.2186 107.311 32.2186C106.924 32.2186 106.553 32.1512 106.199 32.0164C105.862 31.8648 105.567 31.671 105.315 31.4351C105.062 31.1992 104.86 30.9127 104.708 30.5757C104.556 30.2387 104.48 29.8848 104.48 29.5141V21.3502C104.48 19.6146 104.809 17.9801 105.466 16.4467C106.14 14.9133 107.05 13.5737 108.196 12.4279C109.342 11.2821 110.681 10.3806 112.215 9.72342C113.748 9.04941 115.374 8.7124 117.093 8.7124H117.144C118.053 8.7124 118.753 8.97358 119.241 9.49594C119.747 10.0015 120 10.6502 120 11.4422C120 11.8297 119.924 12.192 119.772 12.529C119.62 12.866 119.41 13.1609 119.14 13.4136C118.888 13.6496 118.584 13.8433 118.23 13.995C117.893 14.1298 117.531 14.1972 117.144 14.1972H117.093C116.132 14.1972 115.214 14.3825 114.338 14.7532C113.479 15.124 112.729 15.6295 112.088 16.2698C111.448 16.9101 110.934 17.6599 110.547 18.5193C110.159 19.3787 109.965 20.297 109.965 21.2743V29.5141Z'
                    fill='#0F3460'
                  />
                  <path
                    d='M26.2637 20.7688C26.2637 19.1006 26.5838 17.542 27.2241 16.0928C27.8645 14.6269 28.7322 13.3462 29.8275 12.251C30.9228 11.1557 32.195 10.2963 33.6441 9.67287C35.1101 9.03256 36.6688 8.7124 38.3201 8.7124C39.9883 8.7124 41.5554 9.03256 43.0213 9.67287C44.4873 10.2963 45.7595 11.1557 46.8379 12.251C47.9332 13.3462 48.7926 14.6269 49.416 16.0928C50.0395 17.542 50.3512 19.1006 50.3512 20.7688V29.7163C50.3512 30.1039 50.2754 30.4662 50.1238 30.8032C49.9889 31.1402 49.7952 31.4351 49.5424 31.6878C49.2897 31.9406 48.9863 32.1428 48.6325 32.2944C48.2955 32.4461 47.9332 32.5219 47.5456 32.5219C46.8885 32.5219 46.3324 32.3281 45.8775 31.9406C45.4225 31.553 45.1192 31.0644 44.9675 30.4746C44.0071 31.1992 42.9624 31.7721 41.8334 32.1933C40.7213 32.6146 39.5502 32.8252 38.3201 32.8252C36.6688 32.8252 35.1101 32.5135 33.6441 31.89C32.195 31.2497 30.9228 30.3819 29.8275 29.2867C28.7322 28.1914 27.8645 26.9108 27.2241 25.4448C26.5838 23.9788 26.2637 22.4201 26.2637 20.7688ZM31.7485 20.7688C31.7485 21.6619 31.917 22.5128 32.254 23.3216C32.6078 24.1136 33.0796 24.8129 33.6694 25.4195C34.276 26.0093 34.9753 26.4811 35.7673 26.8349C36.5592 27.1719 37.4102 27.3404 38.3201 27.3404C39.23 27.3404 40.081 27.1719 40.8729 26.8349C41.6817 26.4811 42.381 26.0093 42.9708 25.4195C43.5605 24.8129 44.0239 24.1136 44.3609 23.3216C44.6979 22.5128 44.8664 21.6619 44.8664 20.7688C44.8664 19.8589 44.6979 19.008 44.3609 18.216C44.0239 17.4072 43.5605 16.7079 42.9708 16.1181C42.381 15.5284 41.6817 15.065 40.8729 14.728C40.081 14.3741 39.23 14.1972 38.3201 14.1972C37.427 14.1972 36.5761 14.3741 35.7673 14.728C34.9753 15.065 34.276 15.5284 33.6694 16.1181C33.0796 16.7079 32.6078 17.4072 32.254 18.216C31.917 19.008 31.7485 19.8589 31.7485 20.7688Z'
                    fill='#0F3460'
                  />
                  <path
                    d='M78.2168 20.7688C78.2168 19.1006 78.537 17.542 79.1773 16.0928C79.8176 14.6269 80.6854 13.3462 81.7806 12.251C82.8759 11.1557 84.1481 10.2963 85.5972 9.67287C87.0632 9.03256 88.6219 8.7124 90.2732 8.7124C91.9414 8.7124 93.5085 9.03256 94.9745 9.67287C96.4404 10.2963 97.7126 11.1557 98.7911 12.251C99.8863 13.3462 100.746 14.6269 101.369 16.0928C101.993 17.542 102.304 19.1006 102.304 20.7688V29.7163C102.304 30.1039 102.229 30.4662 102.077 30.8032C101.942 31.1402 101.748 31.4351 101.496 31.6878C101.243 31.9406 100.939 32.1428 100.586 32.2944C100.249 32.4461 99.8863 32.5219 99.4988 32.5219C98.8416 32.5219 98.2856 32.3281 97.8306 31.9406C97.3756 31.553 97.0723 31.0644 96.9207 30.4746C95.9602 31.1992 94.9155 31.7721 93.7865 32.1933C92.6744 32.6146 91.5033 32.8252 90.2732 32.8252C88.6219 32.8252 87.0632 32.5135 85.5972 31.89C84.1481 31.2497 82.8759 30.3819 81.7806 29.2867C80.6854 28.1914 79.8176 26.9108 79.1773 25.4448C78.537 23.9788 78.2168 22.4201 78.2168 20.7688ZM83.7016 20.7688C83.7016 21.6619 83.8701 22.5128 84.2071 23.3216C84.561 24.1136 85.0328 24.8129 85.6225 25.4195C86.2291 26.0093 86.9284 26.4811 87.7204 26.8349C88.5124 27.1719 89.3633 27.3404 90.2732 27.3404C91.1831 27.3404 92.0341 27.1719 92.826 26.8349C93.6349 26.4811 94.3341 26.0093 94.9239 25.4195C95.5137 24.8129 95.9771 24.1136 96.3141 23.3216C96.6511 22.5128 96.8196 21.6619 96.8196 20.7688C96.8196 19.8589 96.6511 19.008 96.3141 18.216C95.9771 17.4072 95.5137 16.7079 94.9239 16.1181C94.3341 15.5284 93.6349 15.065 92.826 14.728C92.0341 14.3741 91.1831 14.1972 90.2732 14.1972C89.3801 14.1972 88.5292 14.3741 87.7204 14.728C86.9284 15.065 86.2291 15.5284 85.6225 16.1181C85.0328 16.7079 84.561 17.4072 84.2071 18.216C83.8701 19.008 83.7016 19.8589 83.7016 20.7688Z'
                    fill='#0F3460'
                  />
                  <path
                    d='M0 2.85613C0 2.45172 0.0674015 2.08102 0.202204 1.74401C0.353857 1.39015 0.547636 1.08685 0.78354 0.834091C1.0363 0.564486 1.33118 0.362281 1.66818 0.227478C2.00519 0.0758262 2.36747 0 2.75503 0C3.15944 0 3.52172 0.0758262 3.84188 0.227478C4.17888 0.362281 4.46534 0.564486 4.70124 0.834091C4.954 1.08685 5.14778 1.39015 5.28258 1.74401C5.41738 2.08102 5.48478 2.45172 5.48478 2.85613V10.7421C6.44525 10.1186 7.47312 9.63839 8.5684 9.30138C9.68052 8.94753 10.8432 8.7706 12.0564 8.7706C13.7246 8.7706 15.2833 9.09075 16.7324 9.73107C18.1984 10.3545 19.4706 11.2139 20.549 12.3092C21.6443 13.3876 22.5036 14.6598 23.1271 16.1258C23.7674 17.5917 24.0876 19.1588 24.0876 20.827C24.0876 22.4783 23.7674 24.037 23.1271 25.503C22.5036 26.969 21.6443 28.2496 20.549 29.3449C19.4706 30.4401 18.1984 31.3079 16.7324 31.9482C15.2833 32.5717 13.7246 32.8834 12.0564 32.8834C10.4051 32.8834 8.84643 32.5717 7.38045 31.9482C5.91447 31.3079 4.63384 30.4401 3.53857 29.3449C2.4433 28.2496 1.57551 26.969 0.935194 25.503C0.311732 24.037 0 22.4783 0 20.827V2.85613ZM5.48478 20.827C5.48478 21.7201 5.65329 22.571 5.99029 23.3798C6.34415 24.1718 6.81596 24.8711 7.40572 25.4777C8.01233 26.0675 8.71162 26.5393 9.50359 26.8931C10.2956 27.2301 11.1465 27.3986 12.0564 27.3986C12.9663 27.3986 13.8173 27.2301 14.6092 26.8931C15.4012 26.5393 16.0921 26.0675 16.6818 25.4777C17.2884 24.8711 17.7603 24.1718 18.0973 23.3798C18.4343 22.571 18.6028 21.7201 18.6028 20.827C18.6028 19.9171 18.4343 19.0662 18.0973 18.2742C17.7603 17.4654 17.2884 16.7661 16.6818 16.1763C16.0921 15.5866 15.4012 15.1232 14.6092 14.7862C13.8173 14.4323 12.9663 14.2554 12.0564 14.2554C11.1465 14.2554 10.2956 14.4323 9.50359 14.7862C8.71162 15.1232 8.01233 15.5866 7.40572 16.1763C6.81596 16.7661 6.34415 17.4654 5.99029 18.2742C5.65329 19.0662 5.48478 19.9171 5.48478 20.827Z'
                    fill='#0F3460'
                  />
                </svg>
              </Box>
              <Box sx={{ minWidth: '700px' }}>
                <TextField label='Search' fullWidth variant='outlined' />
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Link to='login'>
                  <Typography>
                    <IconButton aria-label='cart'>
                      <StyledBadge>
                        <PersonIcon sx={{ fontSize: '30px' }} />
                      </StyledBadge>
                    </IconButton>
                  </Typography>
                </Link>

                <Typography
                  sx={{
                    marginLeft: '20px',
                  }}
                >
                  <IconButton aria-label='cart'>
                    <StyledBadge badgeContent={1} color='primary'>
                      <ShoppingCartIcon sx={{ fontSize: '30px' }} />
                    </StyledBadge>
                  </IconButton>
                </Typography>
              </Box>
            </Container>
          </Toolbar>

          <Menu />
        </AppBar>

        <AppBar
          position='static'
          sx={{ display: { xs: 'block', md: 'none' }, bgcolor: 'common.white' }}
        >
          <Toolbar>
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='menu'
              sx={{ mr: 2 }}
              onClick={() => setState(true)}
            >
              <MenuIcon color='primary' />
            </IconButton>
          </Toolbar>
        </AppBar>

        <Drawer anchor='left' open={state} onClose={() => setState(false)}>
          <Box display='flex' py={2} px={2} alignItems='center' sx={{ borderBottom: 'solid 1px' }}>
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='menu'
              sx={{ mr: 2 }}
              onClick={() => setState(false)}
            >
              <CloseIcon color='primary' />
            </IconButton>
            <Typography variant='h4' component='p' sx={{ flexGrow: 1 }}>
              Menu
            </Typography>
          </Box>

          <List sx={{ width: '100vw' }}>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Divider />

          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Box>
    </Box>
  );
}
