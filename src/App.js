import Footer from "./components/Footer";
import HomeContent from "./components/HomeContent";
import Navbar from "./components/Navbar";
import "./App.css";

const App = () => {
  return (
    <div className="max-w-[1440px] h-screen mx-auto flex flex-col">
      <Navbar />
      <div className="my-2">
        <HomeContent />
      </div>
      <Footer />
    </div>
  );
};

export default App;
