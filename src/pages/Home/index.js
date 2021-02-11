import React from "react";
import Footer from "../../components/footer";
import GameSection from "../../components/game";
import Header from "../../components/header";
import Navbar from "../../components/navbar";
import Wellcome from "../../components/welcome";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Wellcome />
      <GameSection />
      <Footer />
    </>
  );
}
