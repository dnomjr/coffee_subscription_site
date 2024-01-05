import { quests } from "../constants"
import Questions from "./Questions"
import AsideSteps from "./AsideSteps"
import Summary from "./Summary"

const CreatePlan = () => {
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
      </article>
    </>
  )
}
export default CreatePlan
