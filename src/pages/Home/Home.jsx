import AOS from "aos"
import "aos/dist/aos.css"

import {
  HeroSection,
  ChooseSection,
  CollectionSection,
  HowWorkSection,
} from "./index"
import { useEffect } from "react"

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  return (
    <>
      <section
        className=" text-lightCream bg-mobile-home bg-cover  bg-no-repeat w-full bg-center text-center py-24 px-6 rounded-lg mb-24 md:mb-36 md:text-start md:bg-desktop-home md:px-14 lg:px-20"
        data-aos="fade-right"
      >
        <HeroSection />
      </section>

      <section
        className="text-center md:text-start lg:text-center mb-32"
        data-aos="fade-up"
      >
        <CollectionSection />
      </section>

      <section className="grid mb-36" data-aos="fade-up">
        <ChooseSection />
      </section>

      <section
        className="px-6   pb-[7.5rem]  md:px-10 lg:px-14 md:pb-36 xl:pb-[12.5rem]"
        data-aos="fade-up"
      >
        <HowWorkSection />
      </section>
    </>
  )
}
export default Home

/*24
42,38
38,42
 */
