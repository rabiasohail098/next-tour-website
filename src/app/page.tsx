import Hero from "@/components/hero";
import Hotel from "@/components/hotel";
import Testimonial from "@/components/testimonial";
import Tours from "@/components/tours";

export default function Home () {
  return(
    <main>
    <Hero/>
    <Tours/>
    <Hotel/>
    <Testimonial/>
    </main>
  );
}