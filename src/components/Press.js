import { press } from "../constants/constants"

const Press = () => {
  return (
    <>
      <div className='container max-w-w'>
        <div className='ss:py-[80px] py-[30px]'>
          <div className='flex justify-between items-center mb-6'>
            <h1 className='ss:text-[26px] ss:leading-[38px] tracking-[1.2px]'>
              Recidiviz in the Press
            </h1>
            <button className='py-4 px-8 rounded-[80px] border-[#355362] border-opacity-[20%]  border border-solid'>
              See All
            </button>
          </div>
          {/* <div className="flex justify-between flex-wrap"> */}
          <div className="grid grid-cols-press ss:justify-center gap-x-8 ">
            {press.map((press) => (
              <div key={press.id} className="ss:max-w-[360px] max-w-[300px]  ss:w-full ss:h-[155px]  border-t-2 border-[#355362] border-opacity-[20%] border-solid ">
                <div className='flex gap-4 py-4 items-center '>
                  <img
                    src={press.img}
                    alt='img'
                    className="w-6"
                  />
                  <h2 className="text-[11px] leading-4 tracking-[0.5px] uppercase text-[#35536299]">{press.press}</h2>
                  <p className="text-[11px] leading-4 tracking-[0.5px] uppercase text-[#35536299]">{press.date}</p>
                </div>
                <div className="text-base leading-6 pb-[40px] ss:pb-0">{press.descr}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Press
