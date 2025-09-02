import Hero from "@/components/hero";
import Newsletter from "@/components/newsletter";
import Mission from "@/components/mission-vision";
import Services from "@/components/our-service";
import Slider from "@/components/carousel/slider";
import AboutUs from "@/components/about";
import Partners from "@/components/partners";
import UpcomingEvent from "@/components/upcoming-event";
import WhyChooseUs from "@/components/why-choose-us";
import ImpactStats from "@/components/Impact";
export default function Home() {
  return (
    <>
      <UpcomingEvent />
      <Hero />
      <Services />
      <WhyChooseUs />
      <ImpactStats />
      {/* <Slider /> */}
      {/* <Mission /> */}
      <Partners />
      {/* <Newsletter /> */}
    </>
  );
}
