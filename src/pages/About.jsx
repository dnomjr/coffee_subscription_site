import { headquarters } from "../constants"

const About = () => {
  console.log(window.screen.width)
  return (
    <>
      <section className="px-6 py-28 text-center rounded-[10px] text-lightCream mb-24 bg-cover bg-mobile-about-hero md:bg-tablet-about-hero md:text-start md:px-14 md:py-[118px] lg:bg-desktop-about-hero lg:px-20 lg:py-[137px] lg:mb-40">
        <h2 className="mb-6 font-frauncesBlack font-black text-[28px] leading-7 md:text-[32px] md:leading-10 lg:text-[40px] lg:leading-[48px]">
          About Us
        </h2>
        <p className="font-barlow text-[15px] leading-6 opacity-80 max-w-[300px] mx-auto md:mx-0  md:max-w-[400px] lg:max-w-[445px] lg:text-base lg:leading-[26px]">
          Coffeeroasters began its journey of exotic discovery in 1999,
          highlighting stories of coffee from around the world. We have since
          been dedicated to bring the perfect cup - from bean to brew - in every
          shipment.
        </p>

      </section>

      <section className="flex flex-col gap-y-12 mb-44 md:mb-72 md:gap-y-0 md:flex-row lg:items-center lg:mb-52">
        <div>
          <img
            src="/src/assets/about/mobile/image-commitment.jpg"
            alt=""
            className="rounded-[10px] w-80  mx-auto md:hidden"
          />

          <img
            src="/src/assets/about/tablet/image-commitment.jpg"
            alt=""
            className="rounded-[10px]  hidden md:block lg:hidden"
          />

          <img
            src="/src/assets/about/desktop/image-commitment.jpg"
            alt=""
            className="rounded-[10px] w-96 hidden lg:block"
          />
        </div>

        <div className="text-center text-darkGreyBlue dark:text-lightCream w-full max-w-[400px] mx-auto md:text-start md:pl-10 lg:max-w-[525px]">
          <h2 className=" font-frauncesBlack font-black text-[32px] leading-[48px] mb-10 lg:text-[40px] ">
            Our commitment
          </h2>
          <p className="font-barlow text-[15px] leading-6 opacity-80">
            We’re built on a simple mission and a commitment to doing good along
            the way. We want to make it easy for you to discover and brew the
            world’s best coffee at home. It all starts at the source. To locate
            the specific lots we want to purchase, we travel nearly 60 days a
            year trying to understand the challenges and opportunities in each
            of these places. We collaborate with exceptional coffee growers and
            empower a global community of farmers through with well above
            fair-trade benchmarks. We also offer training, support farm
            community initiatives, and invest in coffee plant science. Curating
            only the finest blends, we roast each lot to highlight tasting
            profiles distinctive to their native growing region.
          </p>
        </div>
      </section>

      <section className="relative flex flex-col bg-darkGreyBlue dark:bg-lightCream mb-28 lg:mb-40 lg:flex-row-reverse rounded-[10px] pb-20 lg:block">
        <div className="max-w-[414px] absolute left-0 right-0 mx-auto px-10 md:px-0 -translate-y-2/4 ">
          <img
            src="/src/assets/about/mobile/image-quality.jpg"
            alt=""
            className="  mx-auto rounded-[10px]   md:hidden object-cover"
          />
          <img
            src="/src/assets/about/tablet/image-quality.jpg"
            alt=""
            className="hidden absolute left-0 right-0 mx-auto -translate-y-2/4 w-full max-w-[525px] rounded-[10px]  md:block lg:hidden"
          />
          <img
            src="/src/assets/about/desktop/image-quality.jpg"
            alt=""
            className="hidden absolute -right-60 -translate-y-1/4 w-full max-w-[325px] rounded-[10px] lg:block"
          />
        </div>
        <div className="text-lightCream dark:text-darkGreyBlue text-center pt-40 md:pt-44 max-w-[450px] md:max-w-[650px] mx-auto lg:pt-24 lg:text-start lg:mx-0 lg:px-14 lg:mr-96">
          <h2 className="font-frauncesBlack font-black text-[32px] leading-[48px] mb-10 lg:text-[40px]  ">
            Uncompromising quality
          </h2>
          <p className="font-barlow text-[15px] leading-6 opacity-80 px-10 lg:px-0">
            Although we work with growers who pay close attention to all stages
            of harvest and processing, we employ, on our end, a rigorous quality
            control program to avoid over-roasting or baking the coffee dry.
            Every bag of coffee is tagged with a roast date and batch number.
            Our goal is to roast consistent, user-friendly coffee, so that
            brewing is easy and enjoyable.
          </p>
        </div>
      </section>

      <section className="md:px-12 lg:px-[85px] mb-40">
        <h2 className="font-frauncesBlack font-black text-center text-2xl leading-8 text-grey mb-[72px] md:text-start">
          Our headquarters
        </h2>

        <div className="flex flex-col justify-center text-center gap-y-20 md:flex-row md:text-start md:justify-between">
          {headquarters.map((headquarter) => {
            const { id, map, country, city, address, suburb, number } =
              headquarter
            return (
              <div key={id} className="mx-auto text-darkGreyBlue md:mx-0">
                <img src={map} alt="" className="mx-auto mb-8 md:mx-0" />
                <h3 className="mb-5 font-frauncesBlack font-black text-[28px] leading-9">
                  {country}
                </h3>
                <div className="font-barlow leading-[26px]">
                  <p>{address}</p>
                  <p>{city}</p>
                  <p>{suburb}</p>
                  <p>{number}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}
export default About
