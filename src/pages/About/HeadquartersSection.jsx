import { headquarters } from "../../constants/index"

const HeadquartersSection = () => {
  return (
    <>
      <h2 className="font-frauncesBlack font-black text-center  text-2xl leading-8 text-grey mb-[4.5rem] md:text-start">
        Our headquarters
      </h2>

      <div className="flex flex-col justify-center text-center gap-y-20 md:flex-row md:text-start md:justify-between">
        {headquarters.map((headquarter) => {
          const { id, map, country, city, address, suburb, number } =
            headquarter
          return (
            <div
              key={id}
              className="mx-auto text-darkGreyBlue dark:text-lightCream md:mx-0"
            >
              <img src={map} alt="" className="mx-auto mb-8 md:mx-0" />
              <h3 className="mb-5 font-frauncesBlack font-black text-[1.75rem] leading-9">
                {country}
              </h3>
              <div className="font-barlow leading-[1.625rem]">
                <p>{address}</p>
                <p>{city}</p>
                <p>{suburb}</p>
                <p>{number}</p>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
export default HeadquartersSection