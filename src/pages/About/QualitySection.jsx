const QualitySection = () => {
  return (
    <>
      <div className="max-w-[25.875rem] absolute left-0 right-0 mx-auto px-10 md:px-0 -translate-y-2/4 ">
        <img
          src="./src/assets/about/image-quality-mobile.jpg"
          alt=""
          className="  mx-auto rounded-[.625rem]   md:hidden object-cover"
        />
        <img
          src="./src/assets/about/image-quality-tablet.jpg"
          alt=""
          className="hidden absolute left-0 right-0 mx-auto -translate-y-2/4 w-full max-w-[32.8125rem] rounded-[.625rem]  md:block lg:hidden"
        />
        <img
          src="./src/assets/about/image-quality.jpg"
          alt=""
          className="hidden absolute -right-60 -translate-y-1/4 w-full max-w-[20.3125rem] rounded-[.625rem] lg:block"
        />
      </div>
      <div className="text-lightCream text-center pt-40 md:pt-44 max-w-[28.125rem] md:max-w-[40.625rem] mx-auto lg:pt-24 lg:text-start lg:mx-0 lg:px-14 lg:mr-96">
        <h2 className="font-frauncesBlack font-black text-[2rem] leading-[3rem] mb-10 lg:text-[2.5rem]  ">
          Uncompromising quality
        </h2>
        <p className="font-barlow text-[.9375rem] leading-6 opacity-80 px-10 lg:px-0">
          Although we work with growers who pay close attention to all stages of
          harvest and processing, we employ, on our end, a rigorous quality
          control program to avoid over-roasting or baking the coffee dry. Every
          bag of coffee is tagged with a roast date and batch number. Our goal
          is to roast consistent, user-friendly coffee, so that brewing is easy
          and enjoyable.
        </p>
      </div>
    </>
  )
}
export default QualitySection