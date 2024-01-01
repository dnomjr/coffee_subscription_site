import { Link } from "react-router-dom"
import { coffeeTypes, features, steps } from "../constants"

const Home = () => {
  return (
    <>
      {/*** SECTION1 ***/}
      <section className=" text-lightCream bg-mobile-home bg-cover  bg-no-repeat w-full bg-center text-center py-24 px-6 rounded-lg mb-24 md:mb-36 md:text-start md:bg-desktop-home md:px-14 lg:px-20">
        <h1 className="font-frauncesBlack font-black text-[40px] leading-10 mb-6 max-w-[290px] mx-auto md:max-w-[355px] md:mx-0 md:text-[48px] md:leading-[48px] lg:text-[72px] lg:leading-[72px] lg:max-w-[455px] lg:mb-8">
          Great coffee made simple.
        </h1>
        <p className="font-barlow text-[15px] leading-6 opacity-80 mb-10 max-w-[290px] m-auto md:mx-0  md:max-w-[325px] lg:max-w-[445px] lg:mb-14">
          Start your mornings with the world’s best coffees. Try our expertly
          curated artisan coffees from our best roasters delivered directly to
          your door, at your schedule.
        </p>
        <button className="font-frauncesBlack text-[18px] font-black px-8 py-4 bg-darkCyan leading-6 rounded-md lg:cursor-pointer hover:bg-[#66D2CF] transition ease-in-out duration-700 ">
          <a href="/plans">Create your plan</a>
        </button>
      </section>

      {/*** SECTION2 ***/}
      <section className="text-center md:text-start lg:text-center">
        <h2 className="text-[40px] mb-5 font-black text-center font-frauncesBlack leading-[72px] bg-gradient-to-b from-[#979797] from-0% to-[#fefcf700] to-100% bg-clip-text text-transparent md:mb-0 md:text-[96px] lg:text-[150px] lg:leading-[150px]">
          our collection
        </h2>
        <div className="flex flex-col  gap-y-12 lg:flex-row lg:translate-y-[-30px] justify-center ">
          {coffeeTypes.map((type) => {
            const { id, image, title, content } = type
            return (
              <div
                key={id}
                className="flex flex-col m-auto md:flex-row lg:flex-col lg:w-64 lg:m-0"
              >
                <img
                  src={image}
                  alt="Bag of coffee"
                  className="mx-auto max-w-44 md:max-w-56 md:translate-y-[-25px]"
                />
                <div className="w-[282px] md:translate-y-[-10px] lg:w-full ">
                  <h3 className="text-darkGreyBlue dark:text-lightCream font-frauncesBlack text-2xl font-black leading-8 mb-6 ">
                    {title}
                  </h3>
                  <p className="font-barlow text-[15px] font-normal leading-6 text-darkGreyBlue dark:text-lightCream lg:px-2">
                    {content}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/*** SECTION3 ***/}
      <section className="mt-[90px] grid">
        <div className="row-start-1 col-start-1 h-[875px] bg-darkGreyBlue dark:bg-[#28313C] text-lightCream rounded-md text-center px-6 py-16 md:px-[74px] md:h-[610px] md:rounded-xl lg:px-10 lg:h-[480px]">
          <h2 className="font-frauncesBlack text-[28px] font-black leading-7 mb-6 md:text-[32px] lg:text-[40px] lg:mb-8">
            Why choose us?
          </h2>
          <p className="font-barlow text-[15px] leading-6 max-w-[540px] m-auto opacity-80">
            A large part of our role is choosing which particular coffees will
            be featured in our range. This means working closely with the best
            coffee growers to give you a more impactful experience on every
            level.
          </p>
        </div>
        <div className="flex flex-col gap-y-6 px-6 row-start-1 col-start-1 mt-[300px] lg:flex-row lg:gap-x-[30px] md:px-16 lg:px-14">
          {features.map((feature) => {
            const { id, icon, title, content } = feature
            console.log(title)
            return (
              <div
                key={id}
                className="bg-darkCyan flex flex-col justify-center text-center rounded-lg text-lightCream px-8 pt-16 pb-12 max-w-[359px] mx-auto md:flex-row md:px-12 md:pl-[70px] md:py-10 md:items-center md:gap-x-14 md:text-start md:max-w-[647px] lg:flex-col lg:text-center lg:justify-normal "
              >
                <img
                  src={icon}
                  alt=""
                  className={`w-[72px] mx-auto mb-14  md:mb-0 lg:mb-14 ${
                    title.includes("shipping") ? "lg:mb-[78px]" : "lg:mb-14"
                  }`}
                />
                <div className="">
                  <h3 className="font-frauncesBlack text-2xl font-black leading-8 mb-6 ">
                    {title}
                  </h3>
                  <p className="font-barlow text-[15px] leading-6">{content}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/*** SECTION4 ***/}
      <section className="px-6  pt-28 pb-[120px] md:pt-36 md:px-10 lg:px-14 md:pb-36 xl:pb-[200px]">
        <h2 className="text-center text-grey font-frauncesBlack text-2xl leading-8 font-black pb-20 md:pb-0 md:text-start">
          How it works
        </h2>

        <div className="hidden justify-between relative max-w-[466px] pt-10 md:flex xl:pt-20 xl:max-w-[761px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            height="31"
            viewBox="0 0 31 31"
            fill="none"
            className="z-10"
          >
            <circle
              cx="15.5"
              cy="15.5"
              r="14"
              fill="#FEFCF7"
              stroke="#0E8784"
              strokeWidth="2"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            height="31"
            viewBox="0 0 31 31"
            fill="none"
            className="z-10"
          >
            <circle
              cx="15.5"
              cy="15.5"
              r="14"
              fill="#FEFCF7"
              stroke="#0E8784"
              strokeWidth="2"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            height="31"
            viewBox="0 0 31 31"
            fill="none"
            className="z-10"
          >
            <circle
              cx="15.5"
              cy="15.5"
              r="14"
              fill="#FEFCF7"
              stroke="#0E8784"
              strokeWidth="2"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="466"
            height="2"
            viewBox="0 0 466 2"
            fill="none"
            className="self-center absolute xl:hidden"
          >
            <path d="M0 1H466" stroke="#FDD6BA" strokeWidth="2" />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="761"
            height="3"
            viewBox="0 0 761 3"
            fill="none"
            className="self-center absolute hidden xl:block"
          >
            <path d="M0.5 1.5H760.5" stroke="#FDD6BA" strokeWidth="2" />
          </svg>
        </div>

        <div className="gap-x-[15px] gap-y-14 xl:gap-x-[80px] flex flex-col md:flex-row pb-20 md:pb-11 xl:pb-16">
          {steps.map((step) => {
            const { id, number, title, content } = step
            return (
              <div
                key={id}
                className="text-center max-w-[328px] mx-auto md:mx-0 md:text-start md:w-[205px] md:mt-12 xl:w-[285px]"
              >
                <strong className="text-paleOrange font-frauncesBlack font-black text-7xl leading-[72px]  ">
                  {number}
                </strong>
                <h3 className="font-frauncesBlack text-darkGreyBlue font-black text-[28px] py-6 leading-8 md:leading-9 md:text-[32px] md:pb-[38px] xl:pb-[42px] md:pt-[42px] xl:pt-[38px] xl:pr-7 dark:text-lightCream">
                  {title}
                </h3>
                <p className="text-darkGreyBlue font-barlow font-normal text-[15px] leading-[25px] xl:text-base xl:leading-[1.625rem] dark:text-lightCream">
                  {content}
                </p>
              </div>
            )
          })}
        </div>

        <Link to="/plans">
          <button className="font-frauncesBlack text-[18px] font-black px-8 py-4 bg-darkCyan leading-6 rounded-md lg:cursor-pointer hover:bg-[#66D2CF] transition ease-in-out duration-700 text-white max-w-[218px] table mx-auto md:mx-0">
            <h3>
              <a href="/plans">Create your plan</a>
            </h3>
          </button>
        </Link>
      </section>
    </>
  )
}
export default Home

/*24
42,38
38,42
 */
