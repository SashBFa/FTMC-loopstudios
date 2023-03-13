import { Creation } from '../sections/Creation';
import { Footer } from '../sections/Footer';
import { Header } from '../sections/Header';
import { Intro } from '../sections/Intro';

export const Home = () => {
  return (
    <>
      <Header />
      <Intro />
      <Creation />
      <Footer />
    </>
  );
};
