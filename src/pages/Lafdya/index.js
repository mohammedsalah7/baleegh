import React from "react";
import Footer from "../../components/footer";
import GameLaf from "../../components/gamelafdya";
import Header from "../../components/header";
import NavbarLafdya from "../../components/navbarlafdya";

export default function Lafdya() {
  return (
    <div>
      <NavbarLafdya />
      <Header />
      <GameLaf />
      <Footer />
    </div>
  );
}
