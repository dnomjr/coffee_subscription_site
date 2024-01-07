const CommitmentSection = () => {
  return (
    <>
      <div>
        <img
          src="/src/assets/about/image-commitment-mobile.jpg"
          alt=""
          className="rounded-[.625rem] w-80  mx-auto md:hidden"
        />

        <img
          src="/src/assets/about/image-commitment-tablet.jpg"
          alt=""
          className="rounded-[.625rem]  hidden md:block lg:hidden"
        />

        <img
          src="/src/assets/about/image-commitment.jpg"
          alt=""
          className="rounded-[.625rem] w-96 hidden lg:block"
        />
      </div>

      <div className="text-center text-darkGreyBlue dark:text-lightCream w-full max-w-[25rem] mx-auto md:text-start md:pl-10 lg:max-w-[32.8125rem]">
        <h2 className=" font-frauncesBlack font-black text-[2rem] leading-[3rem] mb-10 lg:text-[2.5rem] ">
          Our commitment
        </h2>
        <p className="font-barlow text-[.9375rem] leading-6 opacity-80">
          We’re built on a simple mission and a commitment to doing good along
          the way. We want to make it easy for you to discover and brew the
          world’s best coffee at home. It all starts at the source. To locate
          the specific lots we want to purchase, we travel nearly 60 days a year
          trying to understand the challenges and opportunities in each of these
          places. We collaborate with exceptional coffee growers and empower a
          global community of farmers through with well above fair-trade
          benchmarks. We also offer training, support farm community
          initiatives, and invest in coffee plant science. Curating only the
          finest blends, we roast each lot to highlight tasting profiles
          distinctive to their native growing region.
        </p>
      </div>
    </>
  )
}
export default CommitmentSection