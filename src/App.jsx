import "./App.css";
import AllBooks from "./Component/AllBooks/AllBooks";
import AppstoreBanner from "./Component/AppStoreBanner/AppstoreBanner";
import Banner from "./Component/Banner/Banner";
import BestBook from "./Component/BestBook/BestBook";
import Footer from "./Component/Footer/Footer";

import Hero from "./Component/hero/hero";
import Navbar from "./Component/navbar/Navbar";
function App() {
  return (
    <>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <Navbar />
        <Hero />
        <BestBook />
        <Banner />
        <AppstoreBanner />
        <AllBooks />

        <Footer />
      </div>
    </>
  );
}

export default App;
