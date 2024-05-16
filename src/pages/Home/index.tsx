import ReliefGallery from "@/components/Home/Gallery";
import MiniBanner from "@/components/Home/MiniBanner";
import RelifGoods from "@/components/Home/RelifGoods";
import Testimonials from "@/components/Home/Testimonial";
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
    </Container>
  );
};

export default Home;
