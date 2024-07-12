import Header from "../components/Header";
import BannerSection from "../components/HomepageCarousel";
import Kartu from "../components/Kartu";
import Kategori from "../components/kategori";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <BannerSection />
      <Kategori />
      <Kartu />
      <Footer />
    </>
  );
};

export default Home;
