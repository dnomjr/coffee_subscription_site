import { questions, points } from "../constants"

const CreatePlan = () => {
  return (
    <>
      <div className="hidden lg:block pr-32">
        <table className="w-[230px] -translate-y-5">
          {points.map((point) => {
            return (
              <tr
                key={point.id}
                className="text-[#b9bbbf] border-b font-frauncesBlack font-black text-2xl last:border-b-0 "
              >
                <td className="pr-6  py-6">{point.number}</td>
                <td className="py-6">{point.content}</td>
              </tr>
            )
          })}
        </table>
      </div>

      <div className="flex flex-col gap-y-24">
        {questions.map((quest) => {
          const {
            id,
            question,
            option1,
            option2,
            option3,
            describe1,
            describe2,
            describe3,
          } = quest
          return (
            <div key={id} className="">
              <div className="mb-8 flex items-center justify-between grow">
                <h3 className="text-grey font-frauncesBlack font-black text-2xl leading-7 pr-2 md:text-[32px] md:leading-[48px] lg:text-[40px]">
                  {question}
                </h3>
                <svg width="24" height="14" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M15.949.586l2.828 2.828-9.096 9.096L.586 3.414 3.414.586l6.267 6.267z"
                    fill="#0E8784"
                    fillRule="nonzero"
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-y-4 text-darkGreyBlue md:flex-row md:gap-x-[10px]">
                <div className="p-6 bg-[#F4F1EB] rounded-lg md:pb-20">
                  <h4 className="font-frauncesBlack  text-2xl font-black mb-2 md:mb-6">
                    {option1}
                  </h4>
                  <p className="font-barlow leading-6">{describe1}</p>
                </div>

                <div className="p-6 bg-[#F4F1EB] rounded-lg">
                  <h4 className="font-frauncesBlack  text-2xl font-black mb-2 md:mb-6">
                    {option2}
                  </h4>
                  <p className="font-barlow leading-6">{describe2}</p>
                </div>

                <div className="p-6 bg-[#F4F1EB] rounded-lg">
                  <h4 className="font-frauncesBlack  text-2xl font-black mb-2 md:mb-6">
                    {option3}
                  </h4>
                  <p className="font-barlow leading-6">{describe3}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
export default CreatePlan
