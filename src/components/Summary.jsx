import { useGlobalContext } from "../context"

const Summary = () => {
  const { checkedOption } = useGlobalContext()

  let bean = checkedOption.find((a) => a.bean)
  let type = checkedOption.find((a) => a.type)
  let amount = checkedOption.find((a) => a.amount)
  let grind = checkedOption.find((a) => a.grind)
  let delivery = checkedOption.find((a) => a.delivery)

  return (
    <div className="rounded-[.625rem] bg-darkGreyBlue px-6 py-9 mb-20">
      <h3 className="uppercase mb-4 font-barlow leading-[1.625rem] font-normal text-[#fff] opacity-50">
        order summary
      </h3>
      <p className="text-white font-frauncesBlack font-black leading-10 text-2xl">
        “I drink my coffee as
        <span className="summary"> {bean ? bean.bean : "_____"} </span>, with a{" "}
        <span className="summary"> {type ? type.type : "_____"} </span>
        type of bean.{" "}
        <span className="summary">{amount ? amount.amount : "_____"}</span>{" "}
        ground ala{" "}
        <span className="summary">{grind ? grind.grind : "_____"}</span>, sent
        to me{" "}
        <span className="summary">
          {delivery ? delivery.delivery : "_____"}
        </span>
        .”
      </p>
    </div>
  )
}
export default Summary
