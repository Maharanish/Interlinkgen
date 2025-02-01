import { AboutUs } from "~/components/aboutus";
import { Closing2 } from "~/components/closing2";
import { Mission } from "~/components/mission";
import { Motto } from "~/components/motto";
import { Navbar } from "~/components/navbar";
import { PicSlide } from "~/components/picslide";
import { Vision } from "~/components/vision";

export function About() {
  return (
    <>
      <Navbar />
      <AboutUs />
      <PicSlide />
      <Motto />
      <Vision />
      <Mission />
      <Closing2 />
    </>
  );
}