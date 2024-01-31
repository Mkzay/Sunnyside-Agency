import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Page/Home";

export default function App() {
  return (
    <h1 className="text-4xl text-green-700">
      <Navbar />
      <Home />
      <Footer />
    </h1>
  );
}
