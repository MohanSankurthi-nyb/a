import React from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

function Parent() {
  return (
    <div style={{ border: "2px solid black", padding: "20px" }}>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default Parent;