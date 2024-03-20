import React, { useState } from 'react';
import { Box, styled, Typography } from '@mui/material';
import StyledContainer from '../core/styled/Container';
import { useTheme } from '@emotion/react';
import { PrimaryButton } from '@/components/core/styled/PrimaryButton';
import Popup from '../core/reusable/Popup';

const TabCards = () => {
  const theme = useTheme();
  const cardData = [
    {
      title: 'Free Learning Quran',
      description:
        'Dive into the sacred text with our comprehensive Quranic education program, designed to help learners of all levels understand and connect with the teachings of the Quran.',
      image: '/image/learning_quran.jpeg'
    },
    {
      title: 'Free Hifz ul Quran',
      description:
        'Embark on the noble journey of memorizing the Quran under the guidance of experienced tutors, preserving the words of Allah in your heart and mind.',
      image: '/image/hifz_ul_quran.jpeg'
    },
    {
      title: 'Free Tajweed ul Quran',
      description:
        "Perfect your recitation of the Quran with our Tajweed courses, where you'll learn the rules of proper pronunciation and intonation according to classical Arabic standards.",
      image: '/image/tajweed_ul_quran.jpeg'
    },
    {
      title: 'Free Six Kalmas and Dua',
      description:
        'Explore the essential declarations of faith and supplications with our Six Kalmas and Dua courses, helping you strengthen your connection with Allah through heartfelt prayers.',
      image: '/image/six_kalmas_and_dua.jpeg'
    },
    {
      title: 'Free Learn Wuzu and Namaz',
      description:
        'Master the essentials of purification and prayer with our comprehensive courses. Learn the correct procedures for Wuzu (ablution) and Namaz (Islamic prayer), ensuring your worship is performed with reverence and precision',
      image: '/image/learn_wazu_and_namaz.jpeg'
    },
    {
      title: 'Free Learn Sunnah',
      description:
        "Immerse yourself in the teachings and practices of the Prophet Muhammad (peace be upon him) with our Learn Sunnah courses, enriching your understanding of Islam's practical application in daily life.",
      image: '/image/learn_sunnah.jpeg'
    }
  ];

  const [modalOpen, setModalOpen] = useState(false);

  const handleClickOpen = () => {
    setModalOpen(true);
  };
  const handleClose = () => {
    setModalOpen(false);
  };
  return (
    <TabList>
      <Popup open={modalOpen} handleClose={handleClose} />

      {cardData.map((item, index) => (
        <TabBoxMain key={index}>
          <Box
            sx={{ width: '100%', height: '150px', objectFit: 'cover' }}
            component={'img'}
            src={item.image}
          />
          <Typography
            variant='display1'
            component={'h4'}
            sx={{
              fontSize: '1.5rem',
              fontWeight: 500,
              wordWrap: 'break-word',
              color: "#fffff0",
              [theme.breakpoints.down('sm')]: {
                fontSize: '1rem',
                fontWeight: 400,
                lineHeight: '1.1rem'
              }
            }}
          >
            {item.title}
          </Typography>
          <Typography
            variant='display1Description'
            component={'p'}
            sx={{
              color: 'text.drawerText',
              fontSize: '0.8rem',
              fontWeight: 500,
              wordWrap: 'break-word',
              lineHeight: '0.9rem',
              color: "#ffffff",
              [theme.breakpoints.down('sm')]: {
                fontSize: '1rem',
                fontWeight: 400,
                lineHeight: '1.1rem'
              }
            }}
          >
            {item.description}
          </Typography>
          <PrimaryButton
            variant='contained'
            color={'secondary'}
            sx={{ alignSelf: 'flex-start' }}
            onClick={handleClickOpen}
          >
            Contact Us
          </PrimaryButton>
        </TabBoxMain>
      ))}
    </TabList>
  );
};

export default TabCards;

const TabBoxMain = styled(Box)(({ theme }) => ({
  borderRadius: '12px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '1rem',
  gap: '1rem',
  backgroundColor: theme.palette.primary.main,
  
}));


const TabList = styled(StyledContainer)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
  gap: '20px',
  maxWidth: '100%',
  [theme.breakpoints.down('md')] : {
    padding: 0
  }
}));
