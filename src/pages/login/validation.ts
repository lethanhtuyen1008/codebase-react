import * as yup from 'yup';

const useValidationFormlogin = () => {
  const loginFormSchema = yup.object().shape({
    email: yup.string().required('Username is required'),
    password: yup.string().required('Password is required'),
  });
  return { loginFormSchema };
};

export default useValidationFormlogin;
