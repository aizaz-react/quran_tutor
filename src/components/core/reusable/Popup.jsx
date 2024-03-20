import React, { useState, useEffect, useRef } from 'react';
import {
  Alert,
  Box,
  CircularProgress,
  Stack,
  Typography,
  styled,
  useMediaQuery,
  useTheme
} from '@mui/material';
import Dialog from '@mui/material/Dialog';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import * as yup from 'yup';
import { PrimaryButton } from '../styled/PrimaryButton';
import { useFormik } from 'formik';
import Input from './Input';
import Snackbar from '@mui/material/Snackbar';
import emailjs from '@emailjs/browser';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const validationSchema = yup.object({
  name: yup
    .string('Enter first name')
    .max(100, 'First name must be maximun 100 characters long.')
    .required('First name is required'),
  email: yup
    .string('Enter email')
    .email('Please enter a valid email address')
    .max(100, 'Email must be maximun 100 characters long.')
    .required('Email is required'),
  body: yup
    .string('Enter company name')
    .max(100, 'Company Name must be maximun 100 characters long.')
    .required('Company Name is required')
});

export default function Popup(props) {
  const { open, handleClose } = props;
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const form = useRef();

  const theme = useTheme();

  const handleAlertClose = () => setMessage(null);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      body: ''
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setLoading((prev) => !prev);
      try {
        await emailjs.sendForm(
          process.env.EMAIL_SERVICE_ID,
          process.env.EMAIL_TEMPLATE_ID,
          values
        );
        setMessage('Email sent successfully.');
        setTimeout(() => setMessage(null), 3000);
        resetForm();
      } catch (error) {
        console.log(error);
      } finally {
        setLoading((prev) => !prev);
      }
    }
  });

  const matches = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <Dialog
        fullScreen
        onClose={handleClose}
        open={open}
        TransitionComponent={Transition}
      >
        <Box
          sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
        >
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <StackRow>
              <Typography
                variant='display2'
                sx={{
                  fontSize: '1.2rem',
                  [theme.breakpoints.down('md')]: {
                    fontSize: '0.9rem'
                  },
                  [theme.breakpoints.down('sm')]: {
                    fontSize: '0.9rem'
                  }
                }}
              >
                Quran Tutor
              </Typography>
            </StackRow>
            <IconButton
              edge='start'
              color='inherit'
              onClick={handleClose}
              aria-label='close'
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
          <Box sx={{ flex: 1, display: 'flex' }}>
            <BackgroundLayout>
              <RightText display={'flex'} />
            </BackgroundLayout>
            <Box
              sx={{
                flex: 1
              }}
            >
              <Box
                sx={{
                  display: matches ? 'flex' : 'none',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Typography
                  variant='display1'
                  sx={{
                    fontSize: '1rem',
                    fontWeight: 400,
                    lineHeight: '1.4rem',
                    textAlign: 'center',
                    padding: '0 2rem',
                    [theme.breakpoints.down('sm')]: {
                      fontSize: '0.9rem',
                      marginTop: '.5rem',
                      lineHeight: '1.2rem'
                    }
                  }}
                >
                  Welcome to 'Quran Tutor,' your inclusive platform for Quranic
                  education. Tailored for all ages, our courses offer
                  personalized guidance, fostering spiritual growth and
                  intellectual development for learners young and old for free.
                </Typography>
              </Box>
              <Form
                component={'form'}
                ref={form}
                onSubmit={formik.handleSubmit}
              >
                <Typography
                  variant='display1'
                  sx={{
                    fontSize: '2.7rem',
                    textAlign: 'center',
                    [theme.breakpoints.down('md')]: {
                      fontSize: '2rem',
                      textAlign: 'center'
                    },
                    [theme.breakpoints.down('sm')]: {
                      fontSize: '1.3rem',
                      textAlign: 'center'
                    }
                  }}
                >
                  Let&apos;s Get Started
                </Typography>
                <Input
                  placeholder='Name'
                  name={'name'}
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
                <Input
                  placeholder='Email'
                  name={'email'}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
                <Input
                  placeholder='Message'
                  name={'body'}
                  value={formik.values.body}
                  onChange={formik.handleChange}
                  multiline
                  rows={3}
                  error={formik.touched.body && Boolean(formik.errors.body)}
                  helperText={formik.touched.body && formik.errors.body}
                />

                <PrimaryButton
                  variant='contained'
                  sx={{ alignSelf: 'center', minWidth: '10rem' }}
                  type='submit'
                >
                  {loading ? (
                    <CircularProgress
                      size={25}
                      sx={{ color: 'text.primary' }}
                    />
                  ) : (
                    'Get Started'
                  )}
                </PrimaryButton>
              </Form>
            </Box>
          </Box>
        </Box>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right'
          }}
          open={!!message}
          onClose={handleAlertClose}
        >
          <Alert
            onClose={handleAlertClose}
            severity='success'
            sx={{ width: '100%' }}
          >
            {'Email Sent Successfully'}
          </Alert>
        </Snackbar>
      </Dialog>
    </>
  );
}

const RightText = (props) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: props.display,
        flexDirection: 'column',
        justifyContent: 'center',
        alignSelf: 'center',
        maxWidth: '700px'
      }}
    >
      <Typography
        variant='display1'
        sx={{
          fontSize: '1.4rem',
          fontWeight: 400,
          lineHeight: '1.4rem',
          display: 'flex',

          [theme.breakpoints.down('sm')]: {
            fontSize: '0.9rem',
            marginTop: '.5rem',
            lineHeight: '1.2rem'
          }
        }}
      >
        Welcome to 'Quran Tutor,' your inclusive platform for Quranic education.
        Tailored for all ages, our courses offer personalized guidance,
        fostering spiritual growth and intellectual development for learners
        young and old for free.
      </Typography>
    </Box>
  );
};

const StackRow = styled(Stack)(({ open, theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('sm')]: {
    height: '1rem !important'
  }
}));

const BackgroundLayout = styled(Box)(({ theme }) => ({
  // backgroundImage: `url(/image/moodboard.png)`,
  // backgroundRepeat: 'no-repeat',
  // backgroundSize: 'cover',
  width: '50%',
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '3rem',
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}));

const Form = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '1rem',
  flexWrap: 'wrap',
  component: 'form',
  maxWidth: '600px',
  padding: '3rem 2rem',
  [theme.breakpoints.down('md')]: {
    margin: '0 auto'
  }
}));
