import { AboutMe } from '@/components/Home/AboutMe';
import { Projects } from '@/components/Home/Projects';
import { Project, AboutMe as TAboutMe } from '@/types/Home';
import { GetStaticProps } from 'next';
import Head from 'next/head';

interface HomeProps {
  home: {
    aboutMe: TAboutMe;
    projects: Project[];
  };
}

const Home = ({ home }: HomeProps) => {
  const { projects, aboutMe } = home;

  return (
    <>
      <Head>
        <title>Sobre mim | Eraldo</title>
        <meta
          name="description"
          content="Sou um desenvolvedor Front-end apaixonado por criar interfaces e ajudar outros devs!"
        />
      </Head>
      <div className="py-12 px-6 md:px-32 space-y-10 md:space-y-28">
        <AboutMe aboutMe={aboutMe} />
        <Projects projects={projects} />
      </div>
    </>
  );
};

const loadHome = async () => {
  const res = await fetch(
    'https://gist.githubusercontent.com/EraldoOL/ea71b732cd9b95722298cbf7d3929d55/raw/8ea459a6610a9f4a027a7d3124f5bc17edcd8bd2/home.json',
  );
  const home = await res.json();

  return home;
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const home = await loadHome();

  return {
    props: { home },
  };
};

export default Home;
