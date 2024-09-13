import Head from 'next/head';
import Header from './componets/Header';
import Herosection from './componets/HeroSection';
import ContactUs from './componets/ContactUs';
import Footer from './componets/Footer';
import Solutions from './solutions/page';
import Services from './services/page';
import Blogs from './blogs/page';
import About from './about-us/page';
import WhyUs from './why-us/page';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Business Software Solutions</title>
        <meta name="description" content="Software services and solutions to take your business to the next level" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Dosis:wght@200..800&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
      </Head>

      <Header/>
      <Herosection />
      <Solutions/>
      <Services />
      <Blogs />
      <About/>
      <WhyUs/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}
