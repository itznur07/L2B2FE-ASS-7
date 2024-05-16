import About from "@/components/Home/About";
import ReliefGallery from "@/components/Home/Gallery";
import MiniBanner from "@/components/Home/MiniBanner";
import RelifGoods from "@/components/Home/RelifGoods";
import Testimonials from "@/components/Home/Testimonial";
import WeServe from "@/components/Home/WeServer";
import Banner from "@/components/shared/Banner/Banner";
import Container from "@/components/ui/container";
import React from "react";

const Home = () => {
  return (
    <Container>
      <Banner />
      <MiniBanner />
      <RelifGoods />
      <Testimonials />
      <ReliefGallery />
      <About />
      <WeServe />
    </Container>
  );
};

export default Home;
