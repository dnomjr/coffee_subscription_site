import { quests } from "../constants"
import { useGlobalContext } from "../context"

const CreatePlanBtn = () => {
  const { isModalOpen, setIsModalOpen, checkedOption } = useGlobalContext()
  return (
    <button
      type="button"
      disabled={checkedOption.length < quests.length}
      onClick={() => setIsModalOpen(!isModalOpen)}
      className="disabled:cursor-no-drop disabled:bg-grey disabled:opacity-50 font-frauncesBlack text-[1.125rem] font-black px-8 py-4 bg-darkCyan leading-6 rounded-md lg:cursor-pointer lg:hover:bg-[#66D2CF] disabled:lg:hover:bg-grey transition  duration-700 text-white max-w-[13.625rem] table mx-auto  lg:mx-0 lg:ml-auto"
    >
      <h3>Create your plan</h3>
    </button>
  )
}
export default CreatePlanBtn
