import { Box, Container, Typography, useTheme } from '@mui/material';
import { InternalLink } from '../components/InternalLink';
import { Layout } from '../components/Layout';
import { PortfolioCardDesktop } from '../components/PortfolioCardDesktop';
import { PortfolioCardMobile } from '../components/PortfolioCardMobile';
import { PortfolioCardOther } from '../components/PortfolioCardOther';
import { FEATURED_PROJECTS, OTHER_PROJECTS } from '../data/projects';
import { chunk } from '../utils/chunk';

const Portfolio = () => {
   const theme = useTheme();

   return (
      <Layout>
         <Container maxWidth="lg" sx={{ pt: 2, pb: 4 }}>
            <Typography variant="h3">Portfolio</Typography>
            <Box>
               <Typography variant="subtitle1" color="textSecondary" sx={{ mt: 2 }}>
                  One of the coolest things about programming is that it allows you to bring your
                  ideas to life 💡 <br />
                  Here are some things I've built during my spare time, feel free to check them out!
                  If you have any question regarding one project,{' '}
                  <InternalLink href="/contact">feel free to reach me out</InternalLink>.
               </Typography>
            </Box>
         </Container>
         <Box
            sx={{
               borderTop: `1px solid ${theme.palette.text.secondary}`,
               borderBottom: `1px solid ${theme.palette.text.secondary}`,
               ml: -4,
               mr: -4,
               mt: 2,
               pt: { xs: 0, md: 8 },
               pb: { xs: 8, md: 12 },
               backgroundColor: theme.palette.background.paper,
            }}>
            <Container
               maxWidth="lg"
               sx={{
                  pl: 4,
                  pr: 4,
                  mb: -4,
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  width: '100%',
               }}>
               <Box
                  sx={{
                     display: 'flex',
                     flexDirection: 'column',
                     p: { xs: 0, sm: 4, md: 0 },
                     '& > *:not(:first-child)': { mt: { xs: 4, md: 12 } },
                  }}>
                  {FEATURED_PROJECTS.map((project, idx) => (
                     <>
                        <PortfolioCardDesktop
                           {...project}
                           rtl={idx % 2 === 0}
                           key={idx}
                           sx={{ display: { xs: 'none', md: 'flex' } }}
                        />
                        <PortfolioCardMobile
                           {...project}
                           key={`${idx}-mobile`}
                           sx={{ display: { xs: 'flex', md: 'none' } }}
                        />
                     </>
                  ))}
               </Box>
            </Container>
         </Box>
         <Container maxWidth="lg" sx={{ pt: 6, pb: 4 }}>
            <Typography gutterBottom variant="h4" sx={{ mb: 4 }}>
               Other Projects
            </Typography>
            {chunk(OTHER_PROJECTS, 2).map((projects) => (
               <Box
                  sx={{
                     display: 'grid',
                     gridTemplateColumns: {
                        xs: 'repeat(1, 1fr)',
                        md: 'repeat(2, 1fr)',
                     },
                     columnGap: 4,
                     mb: 4,
                     '& > *:first-child': {
                        mb: { xs: 4, md: 0 },
                     },
                     ':last-child': {
                        mb: 4,
                     },
                  }}>
                  {projects.map((project) => (
                     <PortfolioCardOther {...project} key={project.title} />
                  ))}
               </Box>
            ))}
         </Container>
      </Layout>
   );
};

export default Portfolio;
