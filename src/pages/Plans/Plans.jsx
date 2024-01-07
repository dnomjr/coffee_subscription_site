import AOS from "aos"
import "aos/dist/aos.css"
import CreateSection from "./CreateSection"
import HeroSection from "./HeroSection"
import Modal from "./Modal"
import StepsSection from "./StepsSection"
import { useEffect } from "react"

const Plans = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 240 })
  }, [])

  return (
    <>
      <section
        className="px-6 py-28 text-center rounded-[.625rem] text-lightCream mb-24 bg-cover bg-mobile-plan-cup md:bg-tablet-plan-cup md:text-start md:px-14 md:py-[7.375rem] lg:bg-desktop-plan-cup lg:px-20 lg:py-[8.5625rem] lg:mb-40"
        data-aos="fade-right"
      >
        <HeroSection />
      </section>
      <section
        className="px-6 pt-20 pb-10 mb-28 bg-darkGreyBlue dark:bg-[#262e38] rounded-[.625rem]  md:px-10 lg:px-14 md:pb-20"
        data-aos="fade-up"
      >
        <StepsSection />
      </section>
      <section
        className="mb-20 flex flex-row"
        data-aos="fade-up"
        data-aos-offset="160"
      >
        <CreateSection />
      </section>

      <Modal />
    </>
  )
}
export default Plans
