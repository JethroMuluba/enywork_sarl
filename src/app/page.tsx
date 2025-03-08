// import AboutSection from '@/components/about-section';
import Header from '@/components/header';
import HeroSection from '@/components/hero-section';




const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div>
        <Header />
      </div>
      <main className="flex-grow">
        <HeroSection />
        {/* <AboutSection /> */}
        {/* <ServicesSection /> */}
        {/* <RealisationsSection /> */}
        {/* <TeamSection /> */}
        {/* <TestimonialsSection /> */}
        {/* <BlogSection /> */}
        {/* <ContactSection /> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;