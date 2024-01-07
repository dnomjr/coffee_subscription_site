import { steps } from "../../constants"

const StepsSection = () => {
  return (
    <>
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

      <div className="gap-x-[15px] gap-y-14 xl:gap-x-[80px] flex flex-col md:flex-row  md:pb-11 xl:pb-16">
        {steps.map((step) => {
          const { id, number, title, content } = step
          return (
            <div
              key={id}
              className="text-center text-lightCream  max-w-[328px] mx-auto md:mx-0 md:text-start md:w-[205px] md:mt-12 xl:w-[285px]"
            >
              <strong className="text-paleOrange font-frauncesBlack font-black text-7xl leading-[72px]  ">
                {number}
              </strong>
              <h3 className="font-frauncesBlack  font-black text-[28px] py-6 leading-8 md:leading-9 md:text-[32px] md:pb-[38px] xl:pb-[42px] md:pt-[42px] xl:pt-[38px] xl:pr-7">
                {title}
              </h3>
              <p className=" font-barlow font-normal text-[15px] leading-[25px] xl:text-base xl:leading-[1.625rem] ">
                {content}
              </p>
            </div>
          )
        })}
      </div>
    </>
  )
}
export default StepsSection
