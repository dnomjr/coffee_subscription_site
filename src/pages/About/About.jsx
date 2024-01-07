import AOS from "aos"
import "aos/dist/aos.css"
import {
  HeadquartersSection,
  QualitySection,
  CommitmentSection,
  HeroSection,
} from "./index"
import { useEffect } from "react"

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  return (
    <>
      <section
        className="px-6 py-28 text-center rounded-[.625rem] text-lightCream mb-32 bg-cover bg-mobile-about-hero md:bg-tablet-about-hero md:text-start md:px-14 md:py-[7.375rem] lg:bg-desktop-about-hero lg:px-20 lg:py-[8.5625rem] md:mb-40"
        data-aos="fade-right"
      >
        <HeroSection />
      </section>

      <section
        className="flex flex-col gap-y-12 mb-52 md:mb-72 md:gap-y-0 md:flex-row lg:items-center lg:mb-60"
        data-aos="fade-up"
        data-aos-offset="170"
      >
        <CommitmentSection />
      </section>

      <section
        className="relative flex flex-col bg-darkGreyBlue dark:bg-[#262e38] mb-28 lg:mb-40 lg:flex-row-reverse rounded-[.625rem] pb-20 lg:block "
        data-aos="fade-up"
        data-aos-offset="0"
      >
        <QualitySection />
      </section>

      <section className="md:px-12 lg:px-[5.3125rem] mb-40 " data-aos="fade-up">
        <HeadquartersSection />
      </section>
    </>
  )
}
export default About
