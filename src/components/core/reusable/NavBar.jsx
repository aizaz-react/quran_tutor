import React from 'react';
import {
  Stack,
  Typography,
  Box,
  styled,
  useTheme,
} from '@mui/material';
import { PrimaryButton } from '../styled/PrimaryButton';
import Container from '../styled/Container';
import FullScreenDialog from './Popup';

const NavBar = () => {
  const theme = useTheme();
  const [modalOpen, setModalOpen] = React.useState(false);

  const handleClickOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <Container
      sx={{
        padding: '1rem 1rem 0rem'
      }}
    >
      <StackRow justifyContent={'space-between'}>
        <StackRow>
          <Typography
            variant='display2'
            sx={{
              fontSize: '1.2rem',
              transition: '.3s all',
              WebkitUserSelect: 'none',
              msUserSelect: 'none',
              userSelect: 'none',
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
        <Box>
          <PrimaryButton variant='contained' onClick={handleClickOpen}>
            Contact us
          </PrimaryButton>
        </Box>
      </StackRow>
      <FullScreenDialog open={modalOpen} handleClose={handleClose} />
    </Container>
  );
};

export default NavBar;

const StackRow = styled(Stack)(({ open, theme }) => ({
  flexDirection: 'row',
  alignItems: 'center'
}));
