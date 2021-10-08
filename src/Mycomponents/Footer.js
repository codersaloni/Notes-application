import React from "react";

const Footer = () => {
  let footerStyle = {
    position: "relative",
    width: "100%",
    top: "10vh",
  };
  return (
    <footer className="bg-dark text-light py-3" style={footerStyle}>
      <p className="text-center">Copyright &copy; MyNotesApp.com</p>
    </footer>
  );
};
export default Footer;
