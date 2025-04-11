"use client";
import Header from "./components/header/page";
import Footer from "./components/footer/page";
import About from "./components/index/page";


// import Search from "./search/page"

const Home = () => {
  return (
    <div className="">
       
      <Header />
      <About />
      <Footer />
      {/* <Search/> */}
    </div>
  );
};
export default Home;
