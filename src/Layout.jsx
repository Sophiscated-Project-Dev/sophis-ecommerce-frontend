import React from "react";

const Layout = props => {
  return (
    <main>
      {/* -------------------Header---------------- */}
      {props.children}
      {/* -------------------Footer---------------- */}
    </main>
  );
};

export default Layout;
