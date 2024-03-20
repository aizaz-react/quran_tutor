import { Box, Typography, styled } from '@mui/material';
import { Stack } from '@mui/system';
import React, { useState } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTheme } from '@emotion/react';
import Popup from '../core/reusable/Popup';

const FlashHunt = [
  {
    bordercolor: '#E64A19',
    desc: 'Tailored solutions for unique business needs.',
    title: `Custom Software`
  },
  {
    bordercolor: '#FF8F00',
    desc: `Modern, responsive website creation.`,
    title: `Web Development`
  },
  {
    bordercolor: '#827717',
    desc: `Native or cross-platform mobile apps.`,
    title: `Mobile App`
  },
  {
    bordercolor: '#388E3C',
    desc: `Intuitive, visually appealing digital experiences.`,
    title: `UI/UX Design`
  },
  {
    bordercolor: '#00838F',
    desc: `Online store development for businesses.`,
    title: `E-commerce Solutions`
  },
  {
    bordercolor: '#1565C0',
    desc: `Scalable, efficient application deployment.`,
    title: `Cloud Services`
  },
  {
    bordercolor: '#3949AB',
    desc: `Expert guidance for software initiatives.`,
    title: `Software Consulting`
  },
  {
    bordercolor: '#6A1B9A',
    desc: `Insightful data-driven decision-making solutions.`,
    title: `Data Analytics`
  },
  {
    bordercolor: '#880E4F',
    desc: `Ongoing support for software applications.`,
    title: `Maintenance and Support`
  }
];
const FlashHuntPlateform = () => {
  const theme = useTheme();
  const [modalOpen, setModalOpen] = useState(false);
  const handleClickOpen = () => {
    setModalOpen(true);
  };
  const handleClose = () => {
    setModalOpen(false);
  };
  return (
    <MainContainer>
      <Popup open={modalOpen} handleClose={handleClose} />

      {FlashHunt.map((item, index) => (
        <MainSection
          key={index}
          sx={{
            border: ` 3px solid ${item.bordercolor}`,
            minHeight: '300px',
            background: "rgba( 0, 18, 51, 0.55 )",
            boxShadow: `0 8px 32px 0 rgba( 31, 38, 135, 0.37 )`,
            backdropFilter: `blur( 2px )`,
            "-webkit-backdrop-filter": `blur( 2px )`,
            borderRadius: "10px",
            
            [theme.breakpoints.down('sm')]: {
              minHeight: '340px'
            }
          }}
        >
          <Description variant='display1' component={'p'}>
            {item.desc}
          </Description>
          <Box>
            <Header variant='display2' component={'h3'}>
              {item.title}
            </Header>
            <Box
              sx={{
                display: 'flex',
                marginTop: '1rem',
                alignItems: 'center'
              }}
            >
              <Typography
                variant='display1'
                sx={{
                  fontSize: '1.5rem',
                  fontWeight: 500,
                  color: theme.palette.primary.main,
                  cursor: 'pointer',

                  [theme.breakpoints.down('md')]: {
                    fontSize: '1rem'
                  }
                }}
                onClick={handleClickOpen}
              >
                {'Get It Now ->'}
              </Typography>
            </Box>
          </Box>
        </MainSection>
      ))}
    </MainContainer>
  );
};

export default FlashHuntPlateform;
const MainContainer = styled(Box)(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '2.5rem',
  marginTop: '1rem'
}));

const MainSection = styled(Stack)(({ theme }) => ({
  padding: '1.5rem',
  borderRadius: '15px',
  flex: '1 1 285px',
  height: '280px',
  justifyContent: 'space-between',
  [theme.breakpoints.down('sm')]: {
    padding: '1rem 1.2rem',
    height: '200px'
  }
}));

const Header = styled(Typography)(({ theme }) => ({
  fontSize: '2.5rem',
  fontWeight: 500,
  lineHeight: '2.5rem',
  textAlign: 'left',
  width: 'min-content',
  [theme.breakpoints.down('md')]: {
    fontSize: '2.3rem'
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.6rem',
    lineHeight: '2rem'
  }
}));

const Description = styled(Typography)(({ theme }) => ({
  fontWeight: 300,
  fontSize: '1.4rem',
  lineHeight: '2.2rem',
  textAlign: 'left',
  color: theme.palette.text.secondary,
  [theme.breakpoints.down('lg')]: {
    fontSize: '1.6rem',
    lineHeight: '1.8rem'
  },
  [theme.breakpoints.down('md')]: {
    lineHeight: '2.5rem'
  },
  [theme.breakpoints.down('sm')]: {
    lineHeight: '2rem'
  }
}));
