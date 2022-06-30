import React from "react";

const Layout = props => {
  return (
    <div>
      {/* -------------------Header---------------- */}
      Header{props.children}
      {/* -------------------Footer---------------- */}
      Footer
    </div>
  );
};

export default Layout;
