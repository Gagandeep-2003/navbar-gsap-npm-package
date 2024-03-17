import React from "react";
import Header from "./components/Header";

const App = () => {
  const navbarItems = [
    { label: "Home", href: "https://www.google.com", target: "_blank" },
    { label: "About", href: "https://www.youtube.com", target: "_blank" },
    { label: "Services", href: "#services", target: "_blank" },
    { label: "Contact", href: "#contact", target: "_blank" },
  ];
  return (
    <div>
      <Header items={navbarItems} heading="Gagandeep Singh Creation" />
    </div>
  );
};

export default App;
