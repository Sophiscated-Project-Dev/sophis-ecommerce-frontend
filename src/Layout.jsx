import Footer from "./autharea/components/Footer";
import Header from "./autharea/components/Header";
// import { LaptopListComs } from "./autharea/components/LaptopListComs";
import RecomProds from "./autharea/components/RecomProds";

const Layout = (props) => {
  return (
    <div>
      <Header />
      {/* -------------------Header---------------- */}
      {/* <LaptopListComs /> */}
      <RecomProds />
      {props.children}
      {/* -------------------Footer---------------- */}
      <Footer />
    </div>
  );
};

export default Layout;
