import { features } from "../../constants"

const ChooseSection = () => {
  return (
    <>
      <div className="row-start-1 col-start-1 h-[54.6875rem] bg-darkGreyBlue dark:bg-[#28313C] text-lightCream rounded-md text-center px-6 py-16 md:px-[4.625rem] md:h-[38.125rem] md:rounded-xl lg:px-10 lg:h-[30rem]">
        <h2 className="font-frauncesBlack text-[1.75rem] font-black leading-7 mb-6 md:text-[2rem] lg:text-[2.5rem] lg:mb-8">
          Why choose us?
        </h2>
        <p className="font-barlow text-[.9375rem] leading-6 max-w-[33.75rem] m-auto opacity-80">
          A large part of our role is choosing which particular coffees will be
          featured in our range. This means working closely with the best coffee
          growers to give you a more impactful experience on every level.
        </p>
      </div>
      <div className=" flex flex-col gap-y-6 px-6 row-start-1 col-start-1 mt-[18.75rem] lg:flex-row lg:gap-x-[1.875rem] md:px-16 lg:px-14">
        {features.map((feature) => {
          const { id, icon, title, content } = feature
          return (
            <div
              key={id}
              className=" bg-darkCyan flex flex-col justify-center text-center rounded-lg text-lightCream px-8 pt-16 pb-12 max-w-[22.4375rem] mx-auto md:flex-row md:px-12 md:py-10 md:items-center md:gap-x-14 md:text-start md:max-w-[40.4375rem] lg:flex-col lg:text-center lg:justify-normal "
            >
              <img
                src={icon}
                alt=""
                className={`w-[4.5rem] mx-auto mb-14  md:mb-0 lg:mb-14 ${
                  title.includes("shipping") ? "lg:mb-[4.875rem]" : "lg:mb-14"
                }`}
              />
              <div className="flex flex-col">
                <h3 className="font-frauncesBlack text-2xl font-black leading-8 h-12 lg:h-20 xl:h-10">
                  {title}
                </h3>
                <p className="font-barlow text-[.9375rem] leading-6">{content}</p>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
export default ChooseSection
