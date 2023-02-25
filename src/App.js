import "./App.css";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Companies from "./components/Companies/Companies";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Reviews from "./components/Reviews/Reviews";
import { blogContent } from "./Data.jsx";

// main component
function App() {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <About></About>
      <Blog blogContent={blogContent[0]}></Blog>
      <Companies></Companies>
      <Blog blogContent={blogContent[1]} alternative={true}></Blog>
      <Blog blogContent={blogContent[2]}></Blog>
      <Reviews></Reviews>
      <Footer></Footer>
    </div>
  );
}

export default App;
