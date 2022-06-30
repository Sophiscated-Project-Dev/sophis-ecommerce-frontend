import React from "react";

const Layout = props => {
  return (
    <div>
      Header{props.children}
      Footer
    </div>
  );
};

export default Layout;
