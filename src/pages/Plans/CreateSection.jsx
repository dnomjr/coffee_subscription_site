import { quests } from "../../constants"
import Questions from "../../components/Questions"
import AsideSteps from "../../components/AsideSteps"
import Summary from "../../components/Summary"
import CreatePlanBtn from "../../components/CreatePlanBtn"

const CreateSection = () => {
  return (
    <>
      <aside className="hidden lg:block mr-40 relative">
        <AsideSteps />
      </aside>

      <article className="w-full">
        {quests.map((question) => {
          return <Questions key={question.id} {...question} />
        })}
        <Summary />
        <CreatePlanBtn />
      </article>
    </>
  )
}
export default CreateSection
