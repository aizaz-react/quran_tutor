import { useTheme } from '@emotion/react';
import { Tab, Tabs, styled } from '@mui/material';
import React from 'react';

const StyledTabs = ({ tabList, value, onChange }) => {
  const theme = useTheme();

  return (
    <Tabs
      value={value}
      onChange={onChange}
      variant='scrollable'
      scrollButtons={'auto'}
      TabIndicatorProps={{ sx: { mb: 1 } }}
      sx={{
        textAlign: 'center'
      }}
    >
      {tabList.map((tab, index) => (
        <StyledTab
          key={index}
          label={tab.name}
          value={tab.name}
          sx={{ color: 'text.primary' }}
        />
      ))}
    </Tabs>
  );
};

export default StyledTabs;

const StyledTab = styled(Tab)(({ theme }) => ({
  ...theme.typography.display1,
  [theme.breakpoints.down('md')]: {
    fontSize: '1rem'
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '.8rem'
  }
}));
