import Contact from "../components/Contact/Contact";
import Features from "../components/Features/Features";
import FoodPhotos from "../components/FoodPhotos/FoodPhotos";
import Programs from "../components/Programs/Programs";
import Promo from "../components/Promo/Promo";

function Home() {
  return (
    <>
      <Promo />
      <Features />
      <Programs />
      <FoodPhotos />
      <Contact />
    </>
  );
}

export default Home;
