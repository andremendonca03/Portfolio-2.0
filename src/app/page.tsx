import About from '@/components/about/About';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import IntroSection from '@/components/introSection/IntroSection';
import Sidebar from '@/components/sidebar/Sidebar';
import SkillAreas from '@/components/skillAreas/SkillAreas';
import Strip from '@/components/strip/Strip';



const Homepage = () => {

  return (
    <>
      <Header />
    
      <main className='main'>
        <IntroSection />
        <About />
        <SkillAreas />
      </main>
    
      <Footer />
      <Sidebar />
    </>
  )
}

export default Homepage;