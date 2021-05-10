import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <header className="header">Aplicación de Notas</header>
      {children}
      <footer className="footer">Knowledge powered by Mmir</footer>
    </>
  );
};

export default Layout;
