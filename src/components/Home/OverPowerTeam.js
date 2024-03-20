import { useTheme } from '@emotion/react';
import { Typography, Stack, styled } from '@mui/material';
import { borderRadius, Box } from '@mui/system';
import React from 'react';
import Logo from '../../assets/custom/Logo';
import Radio from '@mui/material/Radio';

const officerObj = {
  a: {
    title: 'Bill Ogle',
    disc: ` "I'd say we have had nothing but luck with Overpower, but luck has nothing to do with it.  Adhering 
    to NIST standards, and using an analytics style platform to display real time statistics to keep you 
    in the know about your own network and security footprint, the product is both sophisticated and 
    easy to utilize.  We love everything about it, including the highly experienced and extremely 
    helpful staff at Overpower"`,
    image: '/image/Bill-Ogle.png',
    designation: 'Charter Industries'
  },
  b: {
    title: 'Jim MacLarty',
    disc: `"We have utilized Flashunt from Overpower.AI for risk management and observability for over a 
    year.   We have experienced a huge improvement in the capacity to process telemetry, manage 
    risk, and understand our environment.  I highly recommend Overpower as a partner and Flashunt 
    as a comprehensive risk, governance, and security management solution"`,
    image: '/image/Jim-McLarty.png',
    designation: 'Chief Information Security Officer'
  }
};

const OverPowerTeam = () => {
  const theme = useTheme();
  const [selectedValue, setSelectedValue] = React.useState('a');
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'size-radio-button-demo',
    inputProps: { 'aria-label': item }
  });
  return (
    <MainSection sx={{ bgcolor: 'background.default' }}>
      <LeftSection
        sx={{
          display: 'flex',

          justifyContent: 'space-between'
        }}
      >
        <StackRow>
          <Logo size={'3rem'} />
          <Typography
            variant='display1'
            sx={{ fontSize: '1.8rem', fontWeight: 500 }}
          >
            verpower
          </Typography>
        </StackRow>
        <Description
          variant='display3'
          sx={{
            fontSize: '1.1rem',
            minHeight: '13.5rem ',
            fontWeight: 400,
            lineHeight: '1.2rem',
            marginBottom: '1rem',

            [theme.breakpoints.down('md')]: {
              fontSize: '0.8rem',
              lineHeight: '1rem'
            },
            [theme.breakpoints.down('sm')]: {
              minHeight: '9rem '
            }
          }}
        >
          {officerObj[selectedValue].disc}
        </Description>
        <Stack sx={{ display: 'flex', flexDirection: 'column' }}>
          <Title
            variant='display1'
            sx={{
              fontSize: '1.8rem',
              fontWeight: 500,
              lineHeight: '1.7rem'
            }}
          >
            {officerObj[selectedValue].title}
          </Title>
          <Description sx={{ marginTop: '0.5rem' }}>
            {officerObj[selectedValue].designation}
          </Description>
        </Stack>
      </LeftSection>
      <RightSection spacing={3} direction={'column'}>
        <ContainerWrapper
          component={'img'}
          src={officerObj[selectedValue].image}
          alt='hello'
          width={'60%'}
          sx={{
            borderRadius: '50%'
          }}
        />
        <Stack
          direction={'row'}
          sx={{
            paddingTop: '1rem',
            display: 'flex',
            justifyContent: 'center',
            [theme.breakpoints.down('sm')]: {
              marginTop: '5px !important',
              paddingTop: '0.8rem'
            }
          }}
        >
          <Radio {...controlProps('a')} size='small' />
          <Radio {...controlProps('b')} size='small' />
        </Stack>
      </RightSection>
    </MainSection>
  );
};

export default OverPowerTeam;
const StackRow = styled(Stack)(() => ({
  flexDirection: 'row',
  alignItems: 'center',
  margin: '1rem 0'
}));
const LeftSection = styled(Stack)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '50%',
  [theme.breakpoints.down('lg')]: {
    width: '100%'
  },
  [theme.breakpoints.down('md')]: {
    gap: '1rem'
  },
  [theme.breakpoints.down('sm')]: {
    gap: '1.1rem'
  }
}));
const RightSection = styled(Stack)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '50%',
  paddingLeft: '7rem',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '3rem',
  [theme.breakpoints.down('lg')]: {
    width: '100%',
    paddingLeft: '0rem',
    marginTop: '2rem'
  },
  [theme.breakpoints.down('md')]: {
    width: '100%',
    alignItems: 'baseline'
  }
}));
const MainSection = styled(Box)(({ theme }) => ({
  width: '100%',
  borderRadius: '10px',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '1rem 2.5rem',
  [theme.breakpoints.down('lg')]: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  [theme.breakpoints.down('md')]: {
    padding: '1rem 1rem'
  }
}));
const ContainerWrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('lg')]: {
    width: '40%'
  },
  [theme.breakpoints.down('md')]: {
    width: '30%'
  }
}));

const Title = styled(Typography)(({ theme }) => ({
  ...theme.typography.display1,
  fontSize: '1.8rem',
  fontWeight: 500,
  lineHeight: '1.7rem',
  [theme.breakpoints.down('md')]: {
    textAlign: 'left'
  }
}));

const Description = styled(Typography)(({ theme }) => ({
  ...theme.typography.display3,

  [theme.breakpoints.down('md')]: {
    textAlign: 'justify'
  }
}));
