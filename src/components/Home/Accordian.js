import * as React from 'react';
import MuiAccordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useTheme } from '@emotion/react';
import { styled } from '@mui/material';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `none`,
  '&:not(:last-child)': {
    borderBottom: 0
  },
  '&:before': {
    display: 'none'
  },
  borderRadius: '15px',
  marginTop: '1rem',
  backgroundColor: theme.palette.primary.footer
}));

const ControlledAccordions = () => {
  const AccordianData = [
    {
        title: 'Custom Software',
        Desc: 'Tailored solutions for unique business needs. Our team specializes in crafting custom software applications that are precisely designed to meet the specific requirements of your business. Whether you need a robust enterprise solution or a niche application, we work closely with you to develop software that aligns perfectly with your goals and objectives.',
        bordercolor: '#E64A19'
    },
    {
        title: 'Web Development',
        Desc: 'Modern, responsive website creation. We excel in creating dynamic and user-friendly websites that not only attract visitors but also deliver exceptional user experiences. Our expertise spans across various web development technologies, ensuring that your website is built to the highest standards of functionality, performance, and design.',
        bordercolor: '#FF8F00'
    },
    {
        title: 'Mobile App',
        Desc: 'Native or cross-platform mobile apps. In today\'s mobile-centric world, having a presence on smartphones and tablets is essential for reaching your target audience. Our team specializes in developing mobile applications for both iOS and Android platforms, utilizing the latest technologies to ensure seamless performance and intuitive user interfaces.',
        bordercolor: '#827717'
    },
    {
        title: 'UI/UX Design',
        Desc: 'Intuitive, visually appealing digital experiences. Great design is more than just aesthetics—it\'s about creating engaging and intuitive user experiences. Our UI/UX design team combines creativity with user-centric design principles to craft interfaces that not only look stunning but also enhance usability and drive user engagement.',
        bordercolor: '#388E3C'
    },
    {
        title: 'E-commerce Solutions',
        Desc: 'Online store development for businesses. E-commerce is revolutionizing the way businesses sell their products and services online. We offer end-to-end e-commerce solutions tailored to your business needs, from building custom online stores to integrating secure payment gateways and optimizing for maximum conversions.',
        bordercolor: '#00838F'
    },
    {
        title: 'Cloud Services',
        Desc: 'Scalable, efficient application deployment. Embrace the power of the cloud with our comprehensive cloud services. Whether you\'re looking to migrate existing applications to the cloud or build new cloud-native solutions, we provide expertise in cloud infrastructure, scalability, security, and cost optimization to help you leverage the full potential of cloud computing.',
        bordercolor: '#1565C0'
    },
    {
        title: 'Software Consulting',
        Desc: 'Expert guidance for software initiatives. Navigating the complexities of software development can be challenging. Our team of experienced consultants offers strategic guidance and technical expertise to help you plan, execute, and optimize your software initiatives. From project inception to delivery, we\'re here to ensure your success every step of the way.',
        bordercolor: '#3949AB'
    },
    {
        title: 'Data Analytics',
        Desc: 'Insightful data-driven decision-making solutions. Data is a valuable asset for businesses, but extracting meaningful insights can be daunting. Our data analytics services empower you to unlock the full potential of your data, leveraging advanced analytics techniques to uncover actionable insights that drive informed decision-making and business growth.',
        bordercolor: '#6A1B9A'
    },
    {
        title: 'Maintenance and Support',
        Desc: 'Ongoing support for software applications. Our commitment to your success doesn\'t end after deployment. We provide comprehensive maintenance and support services to keep your software applications running smoothly and efficiently. From troubleshooting and bug fixes to performance optimization and updates, we\'re here to ensure your software remains reliable and secure.',
        bordercolor: '#880E4F'
    }
];

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const theme = useTheme();

  return (
    <>
      {AccordianData.map((item, index) => (
        <Accordion
          expanded={expanded === index}
          onChange={handleChange(index)}
          key={index}
          sx={{
            bgcolor: expanded === index && 'primary.main'
          }}
        >
          <AccordionSummary
            expandIcon={
              expanded === index ? (
                <RemoveIcon sx={{ color: '#fff' }} />
              ) : (
                <AddIcon sx={{ color: 'primary.main' }} />
              )
            }
            aria-controls='panel1bh-content'
            id='panel1bh-header'
            sx={{ borderRadius: '15px' }}
          >
            <Typography
              sx={{
                width: '33%',
                flexShrink: 0,
                textAlign: 'left',
                [theme.breakpoints.down('lg')]: {
                  fontSize: '1.1rem'
                },
                [theme.breakpoints.down('md')]: {
                  fontSize: '0.9rem',
                  lineHeight: '1.2rem'
                },
                [theme.breakpoints.down('sm')]: {
                  fontSize: '0.8rem',
                  lineHeight: '1rem'
                }
              }}
              variant='display2'
            >
              {item.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant='display3'
              sx={{
                fontSize: '1.2rem ',
                fontWeight: 300,
                [theme.breakpoints.down('lg')]: {
                  fontSize: '1rem'
                },
                [theme.breakpoints.down('md')]: {
                  fontSize: '0.8rem',
                  lineHeight: '0.7rem'
                },
                [theme.breakpoints.down('sm')]: {
                  fontSize: '0.7rem',
                  lineHeight: '0.7rem'
                }
              }}
            >
              {item.Desc}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};
export default React.memo(ControlledAccordions);
