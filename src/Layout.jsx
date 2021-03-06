import Footer from "./autharea/components/Footer";
import Header from "./autharea/components/Header";

const Layout = (props) => {
  return (
    <div>
      <Header />
      {/* -------------------Header---------------- */}

      {props.children}
      {/* -------------------Footer---------------- */}
      <Footer />
    </div>
  );
};

export default Layout;
