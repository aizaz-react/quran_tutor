import React from 'react';
import { Box, Stack, Typography, styled, useMediaQuery } from '@mui/material';
import { PrimaryButton } from '../core/styled/PrimaryButton';

const MainSection = (props) => {
  const {
    title,
    description,
    buttonText,
    onClick,
    children,
    direction,
    gap,
    textAlign,
    titleWidth,
    removePadding,
    layoutStyle,
    lescTitle,
    lescDec
  } = props;
  const matches = useMediaQuery('(max-width:768px)');

  return (
    <MainContent
      direction={direction}
      gap={gap || 1}
      pt={removePadding ? '0rem' : '3rem'}
      sx={{
        ...layoutStyle
      }}
    >
      <Stack
        direction={'column'}
        alignContent='center'
        spacing={3}
        sx={{ flex: 0.45 }}
      >
        <MainHeading
          component={'h3'}
          sx={{
            textAlign: matches ? 'center' : textAlign,
            width: titleWidth || 'auto',
            ...lescTitle
          }}
        >
          {title}
        </MainHeading>
        <MainDescription
          component={'p'}
          sx={{
            textAlign: matches ? 'center' : textAlign,
            alignSelf: textAlign,
            ...lescDec
          }}
        >
          {description}
        </MainDescription>
        {buttonText && (
          <Box sx={{ alignSelf: matches ? 'center' : textAlign }}>
            <PrimaryButton variant='contained' onClick={onClick}>
              {buttonText}
            </PrimaryButton>
          </Box>
        )}
      </Stack>
      {children}
    </MainContent>
  );
};

export default MainSection;
const MainHeading = styled(Typography)(({ theme }) => ({
  ...theme.typography.display2heading,
  lineHeight: '4.5rem !important',
  fontWeight: 700
}));
const MainDescription = styled(Typography)(({ theme }) => ({
  ...theme.typography.display1Description,

  [theme.breakpoints.down('md')]: {
    width: '70%',
    alignSelf: 'center'
  }
}));
const MainContent = styled(Stack)(({ theme }) => ({
  [theme.breakpoints.down('lg')]: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center'
  },
  [theme.breakpoints.down('sm')]: {
    gap: '0.5rem'
  }
}));
