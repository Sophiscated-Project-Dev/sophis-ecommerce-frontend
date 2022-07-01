import Footer from "./autharea/components/Footer";

const Layout = props => {
  return (
    <div>
      {/* -------------------Header---------------- */}
      {props.children}
      {/* -------------------Footer---------------- */}
      <Footer />
    </div>
  );
};

export default Layout;
