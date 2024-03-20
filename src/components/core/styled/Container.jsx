import { Box, Container, styled } from '@mui/material';

const StyledContainer = styled(Box)(({theme}) => ({
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '1rem',
  // zIndex: 2,
  position: 'relative',
  [theme.breakpoints.down('md')]: {
    padding: '1rem'
  }
}));

export default StyledContainer;
