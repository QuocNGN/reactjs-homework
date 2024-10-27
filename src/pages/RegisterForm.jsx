import { Box, Button, InputAdornment, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import TextFields from '../components/TextFields';
import SelectFields from '../components/SelectField';
import CheckboxFields from '../components/CheckboxFields';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { pawdRegExp, phoneRegExp } from '../utils';

// create schema validation
const schema = yup.object({
  fullName: yup.string().required('Full Name is Required'),
  phone: yup
    .string()
    .required('Phone is Required')
    .matches(phoneRegExp, 'Phone is not valid'),
  email: yup.string().required('Email is Required').email(),
  country: yup.string().required('Country Name is Required'),
  password: yup
    .string()
    .required('Password is Required')
    .matches(
      pawdRegExp,
      'Must Contain 8 characters, One Uppercase, One Lowercase, One Number and one special case Character'
    ),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Password must match'),
  privacy: yup.bool().oneOf([true], 'Field must be checked'),
});

function RegisterForm() {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      privacy: false,
    },

    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log('Form data:', data);
    reset(); // reset form after submit
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        mt: '4rem',
        alignItems: 'center',
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <HowToRegIcon />
      </Avatar>
      <Typography component='h1'>Sign up</Typography>

      {/* Form */}
      <Box
        noValidate
        component='form'
        onSubmit={handleSubmit(onSubmit)}
        sx={{ width: '100%', mt: '2rem' }}
      >
        <TextFields
          errors={errors}
          control={control}
          name='fullName'
          label='Full Name'
        />
        <TextFields
          errors={errors}
          control={control}
          name='email'
          label='Email'
        />
        <TextFields
          errors={errors}
          control={control}
          name='phone'
          label='Mobile Phone'
          inputProps={{
            startAdornment: (
              <InputAdornment position='start'>+84</InputAdornment>
            ),
            typeof: 'number',
          }}
        />
        <SelectFields
          errors={errors}
          control={control}
          name='country'
          label='Country'
        />
        <TextFields
          errors={errors}
          control={control}
          name='password'
          label='Password'
        />
        <TextFields
          errors={errors}
          control={control}
          name='confirmPassword'
          label='Confirm Password'
        />
        <CheckboxFields errors={errors} control={control} name='privacy' />

        <Button
          type='submit'
          fullWidth
          variant='contained'
          sx={{
            mt: 3,
            mb: 2,
          }}
        >
          Sign up
        </Button>
      </Box>
    </Box>
  );
}

export default RegisterForm;
