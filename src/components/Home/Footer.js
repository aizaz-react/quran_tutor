import { Typography, Box, styled, Stack, Link } from '@mui/material';
import StyledContainer from '../core/styled/Container';
import React from 'react';
import { useTheme } from '@emotion/react';

const Footer = () => {
  const theme = useTheme();
  const FooterDate = [
    {
      title: 'Services',
      keyPoints: [
        'Learning Quran',
        'Hifz ul Quran',
        'Tajweed ul Quran',
        'Six Kalmas and Dua',
        'Learn Wuzu and Namaz',
        'Learn Sunnah'
      ]
    },
    {
      title: 'Courses',
      keyPoints: ['Recitation', 'Arabic', 'Hifz', 'Tajweed', 'Teachers']
    },
    {
      title: 'Company',
      keyPoints: [
        'Email:',
        'aizaz9790@gmail.com.com',
        'Phone:',
        '+92 316 512 6009'
      ]
    }
  ];
  return (
    <Box sx={{ width: '100%', bgcolor: 'primary.footer' }}>
      <StyledContainer>
        <TopSection>
          <StackRow>
            <Typography
              variant='display2'
              sx={{
                fontSize: '1.8rem',
                WebkitUserSelect: 'none',
                msUserSelect: 'none',
                userSelect: 'none',
                [theme.breakpoints.down('md')]: {
                  fontSize: '1.7rem'
                }
              }}
            >
              Quran Tutor
            </Typography>
          </StackRow>
          {FooterDate.map((item, index) => (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start'
              }}
              key={index}
            >
              <Typography
                variant='display1'
                sx={{
                  fontSize: '1.6rem',
                  fontWeight: 600,
                  [theme.breakpoints.down('md')]: {
                    fontSize: '1.5rem'
                  }
                }}
              >
                {item.title.toUpperCase()}
              </Typography>
              <Stack
                spacing={1}
                component={'div'}
                mt={2}
                sx={{
                  [theme.breakpoints.down('sm')]: {
                    marginTop: '2px'
                  }
                }}
              >
                {item.keyPoints.map((text, index) => (
                  <Typography
                    component={'p'}
                    variant='display3'
                    sx={{
                      fontSize: '1rem',
                      [theme.breakpoints.down('md')]: {
                        fontSize: '0.9rem',
                        lineHeight: '1rem'
                      },

                      fontWeight: 200
                    }}
                    key={index}
                  >
                    {text.toUpperCase()}
                  </Typography>
                ))}
              </Stack>
            </Box>
          ))}
        </TopSection>
        <FooterBottomSection>
          <Typography
            variant='display3'
            sx={{
              fontSize: '1rem',
              [theme.breakpoints.down('lg')]: {
                fontSize: '0.8rem'
              }
            }}
          >
            Copyright ⓒ Quran Tutor, 2023. All rights reserved.
          </Typography>
        </FooterBottomSection>
      </StyledContainer>
    </Box>
  );
};

export default Footer;
const TopSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  padding: '3rem 4rem',
  alignItems: 'flex-start',
  justifyContent: 'space-between',

  [theme.breakpoints.down('lg')]: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '2.5rem 3rem'
  },
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem'
  }
}));
const FooterBottomSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',

  padding: '1rem 4rem',
  [theme.breakpoints.down('lg')]: {
    display: 'flex',
    padding: '0.8rem 2rem',
    flexWrap: 'wrap'
  },
  [theme.breakpoints.down('sm')]: {
    gap: '1.3em'
  }
}));

const StackRow = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  height: 'fit-content'
}));
