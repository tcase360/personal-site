import Head from 'next/head';
import styled, { ThemeProvider } from 'styled-components';
import { motion } from 'framer-motion';

import theme from '../components/theme';
import Experience from '../components/Experience';

import { Header, Description } from '../components/General';

const Navbar = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  height: 140px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled(motion.div)`
  background-color: ${props => props.theme.color.background};
`;

const Logo = styled.a`
  font-family: ${props => props.theme.font.family.serif};
  font-size: ${props => props.theme.font.size.mediumLarge};
  color: ${props => props.theme.color.primary};
  
  text-decoration: none;
`;

const Main = styled.main`
  display: flex;
  margin-top: 170px;
  color: white;

  font-family: ${props => props.theme.font.family.serif};

  flex-direction: column;
  justify-content: center;
`;

const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  margin-bottom: 50px;
`;

const HR = styled.hr`
  background-color: 1px solid #C4C4C4;
  max-width: 700px;
  width: 100%;
`;

const OrangeSpan = styled.span`
  color: ${props => props.theme.color.primary};
`;

/**
 * const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
}
<motion.div variants={variants} />

<motion.div
  initial="hidden"
  animate="visible"
  variants={variants}
/>
 */

const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};



export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Container
        initial="hidden"
        animate="visible"
        variants={variants}
      >
        <Head>
          <title>Taylor Case | Home</title>

          <link href="https://fonts.googleapis.com/css2?family=Fjord+One&family=Roboto&display=swap" rel="stylesheet" />

          <link rel="apple-touch-icon" sizes="180x180" href="favicon_io/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="favicon_io/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="favicon_io/favicon-16x16.png" />
          <link rel="manifest" href="favicon_io/site.webmanifest" />

        </Head>

        <Navbar>
          <Logo href="/"><h2>T</h2></Logo>
        </Navbar>

        <Main>
          <Section>
            <Header>
              Hello, my name is <OrangeSpan>Taylor.</OrangeSpan>
            </Header>

            <Description>
              I'm a front-end engineer.
              <br />
              I like to run, read, learn and help others.
            </Description>
          </Section>

          <HR />

          <Section>
            <Experience />
          </Section>
        </Main>

        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: 'Fjord One', serif;
            background-color: ${theme.color.background}
          }

          *::selection {
            color: white;
            background: ${theme.color.primary};
          }

          * {
            box-sizing: border-box;
          }
        `}</style>
      </Container>
    </ThemeProvider>
  );
}
