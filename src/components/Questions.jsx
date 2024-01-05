/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from "react"
import { useGlobalContext } from "../context"

const Questions = ({ id, question, options }) => {
  const [isQuestOpen, setIsQuestOpen] = useState(false)
  const [isActive, setIsActive] = useState(null)
  const optionsRef = useRef(null)

  const { stepId, setStepId, setQuestId, checkedOption, setCheckedOption } =
    useGlobalContext()

  useEffect(() => {
    if (stepId === id) {
      setIsQuestOpen(!isQuestOpen)
      setStepId(null)
    }
  }, [stepId])

  useEffect(() => {
    if (isActive) {
      setQuestId(id)
    }
  }, [isActive])

  const questStyles = {
    height: isQuestOpen
      ? `${optionsRef.current.getBoundingClientRect().height}px`
      : "0rem",
  }

  const handleOptions = (idOption, option, title) => {
    setIsActive(idOption)

    if (!isActive) {
      const addOption = [...checkedOption, { id: id, [title]: option }]

      setCheckedOption(addOption)
    } else {
      let findOption = checkedOption.find((option) => option.id === id)
      let editOption = { ...findOption, [title]: option }
      let newArray = checkedOption.map((option) =>
        option.id === id ? editOption : option
      )
      setCheckedOption(newArray)
    }
  }

  return (
    /* CONTAINER */
    <div className="mb-24 last:mb-0 w-full">
      {/* QUESTION */}
      <div
        className="mb-8 flex items-center justify-between lg:cursor-pointer"
        onClick={() => setIsQuestOpen(!isQuestOpen)}
      >
        <h3
          id={id}
          className="text-grey font-frauncesBlack font-black text-2xl leading-7 pr-2 md:text-[2rem] md:leading-[3rem] lg:text-[2.5rem]"
        >
          {question}
        </h3>
        <svg
          width="24"
          height="14"
          xmlns="http://www.w3.org/2000/svg"
          className={`duration-700  ${isQuestOpen ? "rotate-180" : ""}`}
        >
          <path
            d="M15.949.586l2.828 2.828-9.096 9.096L.586 3.414 3.414.586l6.267 6.267z"
            fill="#0E8784"
            fillRule="nonzero"
          />
        </svg>
      </div>

      {/* OPTIONS */}
      <div
        className={`overflow-hidden transition-all duration-700 
        }`}
        style={questStyles}
      >
        <div
          className="flex flex-col items-stretch gap-y-4 text-darkGreyBlue md:flex-row md:gap-x-[.625rem]"
          ref={optionsRef}
        >
          {options.map((optionality) => {
            const { id, option, describe, title } = optionality
            return (
              <div
                key={id}
                className={`overflow w-full min-h-[8.5rem]  md:min-h-[14.5rem] p-6  rounded-lg lg:cursor-pointer lg:hover:bg-paleOrange ${
                  isActive === id
                    ? "bg-darkCyan dark:text-lightCream hover:text-darkGreyBlue"
                    : "bg-[#F4F1EB]"
                }`}
                onClick={() => handleOptions(id, option, title)}
              >
                <h4 className="font-frauncesBlack  text-2xl font-black mb-2 md:mb-6">
                  {option}
                </h4>
                <p className="font-barlow leading-6">{describe}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
export default Questions
