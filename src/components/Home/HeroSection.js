import { Box, Stack, Typography } from '@mui/material';
import React, { memo } from 'react';
import { PrimaryButton } from '../core/styled/PrimaryButton';
import Container from '../core/styled/Container';

const HeroSection = () => {
  return (
    <Container>
      <Stack direction={'row'} py={'3rem'}>
        <Stack
          direction={'column'}
          alignContent='center'
          spacing={3}
          sx={{ flex: 0.45 }}
        >
          <Typography
            variant='display2'
            sx={{ fontSize: '4rem', lineHeight: '5rem', fontWeight: 700 }}
          >
            Boost Your Cyber Risk Management Literally in Minutes
          </Typography>
          <Typography
            variant='display1'
            sx={{ fontSize: '1.5rem', fontWeight: 500 }}
          >
            Easy deploy, manage, and scale your corporate cyber-risk management
            without compromising.
          </Typography>
          <Box>
            <PrimaryButton variant='contained'>Get started</PrimaryButton>
          </Box>
        </Stack>
        <Box sx={{ flex: 0.55 }}>
          <Box
            component={'img'}
            src={'/image/heroimg.png'}
            alt='hello'
            width={'100%'}
            sx={{
              borderRadius: '25px',
              boxShadow: '3px 3px 1px 1px red'
            }}
          />

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '1.5rem'
            }}
          >
            <PrimaryButton variant='contained'>Request Demo</PrimaryButton>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default memo(HeroSection);
