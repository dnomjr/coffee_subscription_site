/* eslint-disable no-self-assign */
import { useEffect } from "react"
import { useGlobalContext } from "../../context"
import { MdCancel } from "react-icons/md"
import { toast } from "react-toastify"

const Modal = () => {
  const { checkedOption, isModalOpen, setIsModalOpen } = useGlobalContext()

  let bean = checkedOption.find((a) => a.bean)
  let type = checkedOption.find((a) => a.type)
  let amount = checkedOption.find((a) => a.amount)
  let grind = checkedOption.find((a) => a.grind)
  let delivery = checkedOption.find((a) => a.delivery)

  const checkout = () => {
    sessionStorage.setItem("showToastAfterReload", "true")
    window.location.href = window.location.href
  }

  useEffect(() => {
    if (sessionStorage.getItem("showToastAfterReload") === "true") {
      toast.success("Thank you for your purchase!", {
        position: "top-center",
        autoClose: 4000,
      })
      sessionStorage.removeItem("showToastAfterReload")
    }
  }, [])

  return (
    <div
      className={`${
        isModalOpen ? "visible opacity-100 z-30" : "invisible opacity-0 -z-10"
      } fixed top-0 left-0 h-full w-full bg-black bg-opacity-50 px-6 py-14  duration-1000`}
    >
      <div className="relative rounded-2xl rounded-b-lg bg-white  w-full mx-auto max-w-[400px] pb-6  md:max-w-[33.75rem] ">
        <h2 className="  bg-darkGreyBlue rounded-t-lg text-white capitalize p-6 font-frauncesBlack text-[1.75rem] font-black leading-8">
          order summary
        </h2>
        <button
          onClick={() => setIsModalOpen(!isModalOpen)}
          className="bg-transparent border-transparent absolute top-6 right-4"
        >
          <MdCancel className="text-white w-8 h-8 cursor-default lg:cursor-pointer lg:hover:text-darkCyan" />
        </button>

        <p className=" text-grey font-frauncesBlack font-black leading-10 text-2xl px-6 pt-10 mb-4">
          “I drink my coffee as
          <span className="summary"> {bean ? bean.bean : "_____"} </span>, with
          a <span className="summary"> {type ? type.type : "_____"} </span>
          type of bean.{" "}
          <span className="summary">
            {amount ? amount.amount : "_____"}
          </span>{" "}
          ground ala{" "}
          <span className="summary">{grind ? grind.grind : "_____"}</span>, sent
          to me{" "}
          <span className="summary">
            {delivery ? delivery.delivery : "_____"}
          </span>
          .”
        </p>
        <p className="px-6 text-darkGreyBlue font-barlow text-[15px] leading-[1.5625rem] opacity-80 mb-6">
          Is this correct? You can proceed to checkout or go back to plan
          selection if something is off. Subscription discount codes can also be
          redeemed at the checkout.
        </p>

        <div className="px-6 font-frauncesBlack text-[1.125rem] font-black md:flex md:justify-between items-center">
          <p className="hidden text-darkGreyBlue text-[2rem] leading-6 md:block">
            $14.00 / mo
          </p>

          <button
            onClick={checkout}
            type="button"
            className=" px-8 py-4 bg-darkCyan leading-6 rounded-md cursor-default lg:cursor-pointer lg:hover:bg-[#66D2CF] transition ease-in-out duration-700 text-white w-full md:w-1/2"
          >
            <p className="md:hidden">Checkout - $14.00 / mo</p>
            <p className="hidden md:block">Checkout</p>
          </button>
        </div>
      </div>
    </div>
  )
}
export default Modal
