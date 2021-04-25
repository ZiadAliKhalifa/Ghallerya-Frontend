import Megatron from "./Megatron/Megatron";
import Navbar from "../Navbar/Navbar";
import Reasons from "./Reasons/Reasons";
import "./Homepage.css";
import FeaturedImages from "./FeaturedImages/FeaturedImages";
import PhotoCollections from "./PhotoCollections/PhotoCollections";
import Footer from "../Footer/Footer";

export default function Homepage() {
  return (
    <div className="homepage">
      <Navbar />
      <Megatron />
      <FeaturedImages />
      <Reasons />
      <PhotoCollections />
      <Footer />
    </div>
  );
}
