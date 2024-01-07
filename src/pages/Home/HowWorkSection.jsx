import { steps } from "../../constants"
import { Link } from "react-router-dom"

const HowWorkSection = () => {
  return <><h2 className="text-center text-grey font-frauncesBlack text-2xl leading-8 font-black pb-20 md:pb-0 md:text-start">
          How it works
        </h2>

        <div className="hidden justify-between relative max-w-[29.125rem] pt-10 md:flex xl:pt-20 xl:max-w-[47.5625rem]">
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

        <div className="gap-x-[.9375rem] gap-y-14 xl:gap-x-[5rem] flex flex-col md:flex-row pb-20 md:pb-11 xl:pb-16">
          {steps.map((step) => {
            const { id, number, title, content } = step
            return (
              <div
                key={id}
                className="text-center max-w-[20.5rem] mx-auto md:mx-0 md:text-start md:w-[12.8125rem] md:mt-12 xl:w-[17.8125rem]"
              >
                <strong className="text-paleOrange font-frauncesBlack font-black text-7xl leading-[4.5rem]  ">
                  {number}
                </strong>
                <h3 className="font-frauncesBlack text-darkGreyBlue font-black text-[1.75rem] py-6 leading-8 md:leading-9 md:text-[2rem] md:pb-[2.375rem] xl:pb-[2.625rem] md:pt-[2.625rem] xl:pt-[2.375rem] xl:pr-7 dark:text-lightCream">
                  {title}
                </h3>
                <p className="text-darkGreyBlue font-barlow font-normal text-[.9375rem] leading-[1.5625rem] xl:text-base xl:leading-[26px] dark:text-lightCream">
                  {content}
                </p>
              </div>
            )
          })}
        </div>

        <Link to="/plans">
          <button className="font-frauncesBlack text-[1.125rem] font-black px-8 py-4 bg-darkCyan leading-6 rounded-md lg:cursor-pointer hover:bg-[#66D2CF] transition ease-in-out duration-700 text-white max-w-[13.625rem] table mx-auto md:mx-0">
            <h3>Create your plan</h3>
          </button>
        </Link></>
}
export default HowWorkSection
