import { approach } from "../constants/constants"
import ApproachLinks from "./ApproachLinks"
const Approach = () => {
  return (
    <>
      <div className='container max-w-w'>
        <div className='flex justify-between ss:py-[80px] pt-0 pb-[50px] flex-wrap'>
          <div className='max-w-[450px] w-full'>
            <h1 className=' text-[22px] leading-[22px] '>
              A human–centered definition of success.
            </h1>
            <p className='text-sm leading-6 pt-3 pb-9'>
              Our approach is shaped by the perspective and experience of people
              impacted by the justice system. Together, we are focused on
              restoring equity and supporting success in the community.
            </p>
            <button className='py-4 px-8 rounded-[80px] border-[#355362] border-opacity-[20%]  border border-solid mb-[40px]'>
              Our approach
            </button>
            {/* border-[#7e7575] */}
          </div>
          <div className='gap-2 flex flex-wrap '>
            {approach.map((img) => (
              <div  key={img.id}>
                <img
                  src={img.img}
                  alt='img'
                  className=' ss:w-full ss:h-[266px]'
                />
              </div>
            ))}
          </div>
        </div>
        <ApproachLinks/>
      </div>
    </>
  )
}

export default Approach
