import { coffeeTypes } from "../../constants"

const CollectionSection = () => {
  return (
    <>
      <h2 className="text-[2.5rem] mb-5 font-black text-center font-frauncesBlack leading-[4.5rem] bg-gradient-to-b from-[#979797] from-0% to-[#fefcf700] to-100% bg-clip-text text-transparent md:mb-0 md:text-[6rem] lg:text-[9.375rem] lg:leading-[9.375rem]">
        our collection
      </h2>
      <div className="flex flex-col  gap-y-12 lg:flex-row lg:translate-y-[-1.875rem] justify-center ">
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
                className="mx-auto max-w-44 md:max-w-56 md:translate-y-[-1.5625rem]"
              />
              <div className="w-[17.625rem] md:translate-y-[-0.625rem] lg:w-full ">
                <h3 className="text-darkGreyBlue dark:text-lightCream font-frauncesBlack text-2xl font-black leading-8 mb-6 ">
                  {title}
                </h3>
                <p className="font-barlow text-[.9375rem] font-normal leading-6 text-darkGreyBlue dark:text-lightCream lg:px-2">
                  {content}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
export default CollectionSection
