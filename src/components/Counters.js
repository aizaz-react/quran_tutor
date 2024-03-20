import React from "react";

import { Box, Stack, styled, Typography, useTheme } from "@mui/material";
import StyledContainer from "./core/styled/Container";
const cardData = [
  {
    count: "100+",
    title: "Custom Application Solutions",
    desc: `Quran Tutor's Custom Application Solutions offer tailored
     software solutions to meet your unique business needs. 
     With over 100 successful implementations, we empower 
     your business to thrive in today's 
     competitive market.`,
  },
  {
    count: "30+",
    title: "Rapid Full Stack Deployment",
    desc: `Experience rapid full stack deployment
     with Quran Tutor. With over 30 successful deployments, 
     we deliver robust solutions quickly to 
     meet your business needs.`,
  },

  {
    count: "10+",
    title: "Rapid Desktop Development",
    desc: `Experience rapid development with 
    Quran Tutor's Desktop Development Solutions. 
    Our expert team delivers efficient and 
    innovative desktop applications 
    tailored to your business needs.`,
  },

  {
    count: "50+",
    title: "Mobile Application Development",
    desc: `Quran Tutor specializes in Mobile App Development, 
    delivering innovative solutions to meet your business objectives. 
    With over 50 successful projects, we bring your ideas to life 
    on iOS and Android platforms.`,
  },
];
const Counters = () => {
  const theme = useTheme();
  return (
    <>
      <TabList>
        {cardData.map((item, index) => (
          <TabBoxMain sx={{ bgcolor: "background.default" }} key={index}>
            <Stack
              sx={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
              }}
            >
              <Typography
                variant="display2"
                sx={{
                  fontSize: "2.6rem",
                  [theme.breakpoints.down("lg")]: {
                    fontSize: "2.7rem",
                    lineHeight: "3.6rem",
                  },
                  [theme.breakpoints.down("md")]: {
                    fontSize: "2.2rem",
                    lineHeight: "3.1rem",
                  },
                  [theme.breakpoints.down("sm")]: {
                    fontSize: "1.9rem",
                    lineHeight: "2rem",
                  },

                  fontWeight: 700,
                  color: "primary.main",
                }}
              >
                {item.count}
              </Typography>
              <Typography
                variant="display2"
                sx={{
                  fontSize: "1.4rem",
                  padding: "0 1rem",
                  fontWeight: 300,
                  lineHeight: "2rem",
                  [theme.breakpoints.down("lg")]: {
                    fontSize: "1rem",
                  },
                  [theme.breakpoints.down("md")]: {
                    fontSize: "0.8rem",
                    lineHeight: "3.1rem",
                  },
                  [theme.breakpoints.down("sm")]: {
                    fontSize: "1.1rem",
                    lineHeight: "2rem",
                  },
                }}
              >
                {item.title}
              </Typography>

              <Typography
                variant="display1"
                color={"text.drawerText"}
                sx={{
                  fontSize: "1rem",
                  textTransform: "capitalize",
                  [theme.breakpoints.down("lg")]: {
                    fontSize: "0.8rem",
                    marginTop: "1rem",
                  },
                  [theme.breakpoints.down("md")]: {
                    fontSize: "0.6rem",
                    marginTop: "0.9rem",
                  },
                  [theme.breakpoints.down("sm")]: {
                    fontSize: "0.6rem",
                    padding: "1rem 1rem 0.5rem",
                    marginTop: "0.1rem",
                  },
                  fontWeight: 400,
                  marginTop: "2rem",
                }}
              >
                {item.desc}
              </Typography>
            </Stack>
          </TabBoxMain>
        ))}
      </TabList>
    </>
  );
};

export default Counters;
const TabBoxMain = styled(Box)(({ theme, selected }) => ({
  borderRadius: "12px",
  padding: "2rem 1rem",
  overflow: "hidden",
  [theme.breakpoints.down("lg")]: {
    padding: "1rem 1rem",
  },
  [theme.breakpoints.down("md")]: {
    padding: "0.6rem 0.5rem",
  },
  [theme.breakpoints.down("md")]: {
    padding: "1rem 1rem",
  },
}));

const TabList = styled(StyledContainer)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  gridTemplateRows: "min-content",
  borderRadius: "15px",
  paddingLeft: "0rem",
  paddingRight: "0rem",
  gap: "1rem",
  overflow: "auto",
  [theme.breakpoints.down("lg")]: {
    gridTemplateColumns: "1fr 1fr",
    gap: "0.7rem",
  },
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
    gap: "0.9rem",
  },
  // [theme.breakpoints.down('lg')]: {
  //   gap: '0.3rem'
  // }
}));
