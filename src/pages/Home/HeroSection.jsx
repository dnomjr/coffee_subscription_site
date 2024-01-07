const HeroSection = () => {
  return (
    <>
      <h1 className="font-frauncesBlack font-black text-[2.5rem] leading-10 mb-6 max-w-[18.125rem] mx-auto md:max-w-[22.1875rem] md:mx-0 md:text-[3rem] md:leading-[3rem] lg:text-[4.5rem] lg:leading-[4.5rem] lg:max-w-[28.4375rem] lg:mb-8">
        Great coffee made simple.
      </h1>
      <p className="font-barlow text-[.9375rem] leading-6 opacity-80 mb-10 max-w-[18.125rem] m-auto md:mx-0  md:max-w-[20.3125rem] lg:max-w-[27.8125rem] lg:mb-14">
        Start your mornings with the world’s best coffees. Try our expertly
        curated artisan coffees from our best roasters delivered directly to
        your door, at your schedule.
      </p>
      <button className="font-frauncesBlack text-[1.125rem] font-black px-8 py-4 bg-darkCyan leading-6 rounded-md lg:cursor-pointer hover:bg-[#66D2CF] transition ease-in-out duration-700 ">
        <a href="/plans">Create your plan</a>
      </button>
    </>
  )
}
export default HeroSection
