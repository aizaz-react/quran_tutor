import { useEffect, useState, useRef, useCallback } from 'react';
import NavBar from '@/components/core/reusable/NavBar';
import { Box, useTheme, styled, Fab} from '@mui/material';
import MainSection from '@/components/Home/MainSection';
import { PrimaryButton } from '@/components/core/styled/PrimaryButton';
import TabCards from '@/components/Home/TabCards';
import Container from '@/components/core/styled/Container';
import Footer from '@/components/Home/Footer';
import Head from 'next/head';
import NavigationIcon from '@mui/icons-material/Navigation';
import Popup from '@/components/core/reusable/Popup';
import { particlesConfig } from '@/utils/constants';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import emailjs from '@emailjs/browser';

export default function Home() {
  const theme = useTheme();
  const [showFab, setShowFab] = useState(false);
  const bodyRef = useRef(null);

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    bodyRef.current.addEventListener('scroll', () => {
      if (bodyRef.current.scrollTop > 100) {
        setShowFab(true);
      } else {
        setShowFab(false);
      }
    });
    emailjs.init({
      publicKey: process.env.EMAIL_PUBLIC_KEY,
    });
  }, []);

  const handleClickOpen = () => {
    setModalOpen(true);
  };
  const handleClose = () => {
    setModalOpen(false);
  };

  const goToTop = () => {
    bodyRef.current.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Box
      ref={bodyRef}
      sx={{
        bgcolor: 'background.default',
        height: '100vh',
        overflow: 'auto',
        scrollBehavior: 'smooth'
      }}
    >
      {/* Modals */}
      <Popup open={modalOpen} handleClose={handleClose} />
      {/* Body */}
      <Head>
        <title>Quran Tutor</title>
      </Head>
      <NavBar onMessage={() => null} />
      <Container>
        <Particles
          id='tsparticles'
          options={particlesConfig}
          init={particlesInit}
        />
        <MainSection
          direction={'row'}
          title={'Education Across Generations, Free Quranic Education for Everyone'}
          description={
            "Welcome to 'Quran Tutor,' your inclusive platform for Quranic education. Tailored for all ages, our courses offer personalized guidance, fostering spiritual growth and intellectual development for learners young and old for free."
          }
          layoutStyle={{ marginTop: '0rem !imortant' }}
          onClick={handleClickOpen}
        >
          <Box sx={{ flex: 0.5, display: 'grid', placeItems: 'center' }}>
            <HeroSctionImg
              component={'img'}
              src={'/image/main_hero.jpeg'}
              alt='hello'
              width={'100%'}
              sx={{
                borderRadius: '25px',
                boxShadow: `3px 3px 1px 1px ${theme.palette.primary.main}`
              }}
            />

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '1.5rem'
              }}
            >
              <PrimaryButton variant='contained' onClick={handleClickOpen}>
                Contact Us
              </PrimaryButton>
            </Box>
          </Box>
        </MainSection>
      </Container>

      <Container
        sx={{
          marginTop: '3.5rem',
          [theme.breakpoints.down('md')]: {
            marginTop: '3rem'
          },
          [theme.breakpoints.down('sm')]: {
            marginTop: '2rem'
          }
        }}
      >
        <MainSection
          direction={'column'}
          textAlign={'center'}
          title={`Our Services`}
          onClick={handleClickOpen}
        >
          <TabCards />
        </MainSection>
      </Container>

     
      <Footer />
      {showFab && (
        <Fab
          size='small'
          color='primary'
          sx={{ position: 'absolute', bottom: 16, right: 16 }}
          onClick={goToTop}
        >
          <NavigationIcon />
        </Fab>
      )}
    </Box>
  );
}

const HeroSctionImg = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('lg')]: {
    width: '90%',
    marginTop: '1.5rem'
  },
  [theme.breakpoints.down('md')]: {
    width: '80%',
    marginTop: '1.5rem'
  }
}));
