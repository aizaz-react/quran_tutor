import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Logo from '@/assets/custom/Logo';
import Typography from '@mui/material/Typography';

import { Box, InputBase, Stack, useMediaQuery } from '@mui/material';
import { PrimaryButton } from '../styled/PrimaryButton';
import { useTheme } from '@emotion/react';
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2)
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1)
  },
  '& .MuiDialog-paper': {
    minWidth: '600px',
    padding: '2rem 1rem',
    [theme.breakpoints.down('sm')]: {
      minWidth: '300px !important',
      padding: '2rem 0.5rem'
    }
  },
  '& .MuiDialogActions-root': {
    justifyContent: 'center',
    padding: '0.7rem 4rem'
  }
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label='close'
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500]
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired
};

const EmailModal = (props) => {
  const { open, handleClose } = props;
  const theme = useTheme();

  return (
    <BootstrapDialog onClose={handleClose} open={open}>
      <StackRow>
        <Typography
          variant='display2'
          sx={{
            fontSize: '1.2rem',
            [theme.breakpoints.down('sm')]: {
              fontSize: '0.9rem'
            }
          }}
        >
          Quran Tutor
        </Typography>
      </StackRow>

      <BootstrapDialogTitle id='customized-dialog-title' onClose={handleClose}>
        <Typography
          variant='h2'
          sx={{
            textAlign: 'center',
            fontFamily: '"Ubuntu", sans-serif',
            fontSize: '3rem',
            letterSpacing: '-0.5',
            fontWeight: 500,
            lineHeight: '2rem',
            marginTop: '2rem',
            display: 'flex',
            justifyContent: 'center',
            [theme.breakpoints.down('md')]: {
              fontSize: '1.2rem'
            },
            [theme.breakpoints.down('sm')]: {
              fontSize: '1rem',
              padding: '0rem 4rem',
              gap: '0.5rem !important',
              lineHeight: '1rem'
            }
          }}
        >
          Join a 15-Minute Demo!
        </Typography>
        <br />
        <Typography
          variant='display1'
          sx={{
            textAlign: 'center',

            textAlign: 'center',
            fontSize: '1rem',
            fontWeight: 400,
            lineHeight: '1rem',
            display: 'flex',
            justifyContent: 'center',
            [theme.breakpoints.down('sm')]: {
              fontSize: '0.9rem',
              padding: '0rem 3.2rem',
              marginTop: '-1rem',
              lineHeight: '1.2rem'
            }
          }}
        >
          Learn how easily FlasHunt puts you in control of your Cyber-Risk.
        </Typography>
      </BootstrapDialogTitle>
      <Stack
        direction={'column'}
        spacing={2}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          maxWidth: '500px',
          margin: '0 auto',
          [theme.breakpoints.down('sm')]: {
            display: 'flex',
            flexWrap: 'wrap'
          }
        }}
      >
        <Stack
          spacing={2}
          direction={'row'}
          sx={{
            [theme.breakpoints.down('md')]: {
              display: 'flex',
              flexWrap: 'wrap',
              flexDirection: 'column',
              marginLeft: '0px !important'
            },
            [theme.breakpoints.down('md')]: {
              display: 'flex',
              flexWrap: 'wrap',
              flexDirection: 'column',
              marginLeft: '0px !important',
              gap: '1rem'
            }
          }}
        >
          <Input placeholder='First Name' />
          <Input
            placeholder='Last Name'
            sx={{
              [theme.breakpoints.down('md')]: {
                marginLeft: '0px !important'
              }
            }}
          />
        </Stack>
        <Input placeholder='Work Email' />
        <Input placeholder='Company Name' />
        <Input placeholder='Comapny Size' />
        <Input placeholder='Role' />
      </Stack>
      <DialogActions>
        <PrimaryButton
          onClick={handleClose}
          variant='contained'
          sx={{
            display: 'flex',
            justifyContent: 'center',
            padding: '0.5rem 3.5rem',
            marginTop: '0.7rem',
            width: '76%',
            [theme.breakpoints.down('md')]: {
              width: '40%'
            },
            [theme.breakpoints.down('sm')]: {
              width: '94%'
            }
          }}
        >
          Submit
        </PrimaryButton>
      </DialogActions>
    </BootstrapDialog>
  );
};
export default EmailModal;

const StackRow = styled(Stack)(({ open, theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('sm')]: {
    height: '1rem !important'
  }
}));

const Input = styled(InputBase)(({ theme }) => ({
  ...theme.typography.display1,
  border: '1px solid gray',
  borderRadius: '5px',
  padding: '0.2rem .4rem',
  fontSize: '1rem',
  [theme.breakpoints.down('sm')]: {
    minWidth: '15rem'
  }
}));
