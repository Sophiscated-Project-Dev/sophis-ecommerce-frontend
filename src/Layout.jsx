import Footer from "./autharea/components/Footer";
import Header from "./autharea/components/Header";
import RecomProds from "./autharea/components/RecomProds";

const Layout = props => {
  return (
    <div>
      <Header />
      {/* -------------------Header---------------- */}
      <RecomProds/>
      {props.children}
      {/* -------------------Footer---------------- */}
      <Footer />
    </div>
  );
};

export default Layout;
