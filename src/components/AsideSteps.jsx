import { points } from "../constants"
import { useGlobalContext } from "../context"
import { FaCheck } from "react-icons/fa"

const AsideSteps = () => {
  const { setStepId, checkedOption } = useGlobalContext()

  let filterId = checkedOption.map((id) => id.id)

  const scrollHandler = (id) => {
    document.getElementById(id).scrollIntoView(true)
  }
  return (
    <table className="w-72 -translate-y-5 sticky top-10">
      {points.map((point) => {
        const complete = filterId.includes(point.id)

        return (
          <tbody
            key={point.id}
            onClick={() => setStepId(point.id)}
          >
            <tr
              className={`flex justify-start items-center border-b font-frauncesBlack font-black text-2xl last:border-b-0 hover:cursor-pointer hover:text-grey ${
                complete
                  ? "text-darkGreyBlue dark:text-white"
                  : "text-[#b9bbbf]"
              }`}
              onClick={() => scrollHandler(point.id)}
            >
              <td className="pr-6  py-6">{point.number}</td>
              <td className="py-6">{point.content}</td>
              <td className={`${complete ? "block" : "hidden"} pl-4 ml-auto`}>
                <FaCheck />
              </td>
            </tr>
          </tbody>
        )
      })}
    </table>
  )
}
export default AsideSteps
