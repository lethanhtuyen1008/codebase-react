import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

// material-ui imports
import { Box, Button, Grid, Typography } from '@mui/material';

// project imports
import useYupValidationResolver from 'src/helpers/useYupValidationResolver';
import FormTextField from 'src/components/ui/form/formTextField';
import PasswordField from 'src/components/ui/form/passwordField';
import { GRID_SPACING } from 'src/commons/constant';
import useSignIn from 'src/services/useSignIn';
import useValidationFormLogin from './validation';
import Backdrop from 'src/components/ui/backdrop';
import { cookieProvider } from 'src/providers/cookieProvider';
import { CookieKey } from 'src/commons/cookieKey';
import { useHistory } from 'react-router-dom';
import { RouteName } from 'src/routers/routeName';

interface SignInForm {
  email: string;
  password: string;
}

const Login = () => {
  const { loginFormSchema } = useValidationFormLogin();
  const resolver = useYupValidationResolver(loginFormSchema);
  const history = useHistory();
  const methods = useForm<SignInForm>({
    resolver,
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const { handleSubmit } = methods;
  const { mutate, isLoading } = useSignIn();

  const onSubmit = async (values: SignInForm) => {
    mutate(values).then((response) => {
      console.log(response);

      cookieProvider.set(CookieKey.ACCESS_TOKEN, response.accessToken);
      history.push(RouteName.DASHBOARD);
    });
  };

  return (
    <>
      <Backdrop show={isLoading} />

      <Box
        sx={{
          px: { xs: 3, md: 0 },
          backgroundColor: 'secondary.light',
        }}
      >
        <Box
          sx={{
            margin: 'auto',
            maxWidth: { xs: 400, lg: 475 },
            py: 20,
          }}
        >
          <FormProvider {...methods}>
            <Grid container rowSpacing={GRID_SPACING}>
              <Grid item xs={12}>
                <Typography
                  variant='h2'
                  textAlign='center'
                  sx={{
                    fontStyle: 'italic',
                  }}
                >
                  Đăng nhập
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <FormTextField
                  name='email'
                  variant='outlined'
                  label='Email'
                  placeholder='Email'
                  sx={{ m: 0 }}
                />
              </Grid>
              <Grid item xs={12}>
                <PasswordField
                  name='password'
                  variant='outlined'
                  label='Mật khẩu'
                  placeholder='Mật khẩu'
                  sx={{ m: 0 }}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  fullWidth
                  type='submit'
                  variant='contained'
                  onClick={handleSubmit(onSubmit)}
                  sx={{ textTransform: 'uppercase' }}
                >
                  Đăng Nhập
                </Button>
              </Grid>
            </Grid>
          </FormProvider>
        </Box>
      </Box>
    </>
  );
};

export default Login;
