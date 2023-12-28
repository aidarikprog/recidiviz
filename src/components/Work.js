import usaimg from "../assets/usaimg.svg"

const Work = () => {
  return (
    <>
      <div className="bg-[#001F1F]">
        <div className='container max-w-w'>
          <div className="flex flex-wrap justify-between py-[30px] ss:py-[130px]">
            <div className="max-w-[326px] w-full text-white">
              <h1 className="text-4xl leading-[52px] tracking-[1.2px] ">Where we work</h1>
              <p className="py-8 text-[18px] leading-7">We're expanding. Get in touch and start turning your data into action.</p>
              <button className="py-4 px-8 rounded-[80px] border-[#355362] border-opacity-[20%]  border border-solid bg-[#00665F]">Get in touch</button>
            </div>
            <div className="mt-6 ss:mt-0">
              <img
                src={usaimg}
                alt='img'
                className="max-w-[461px] w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Work
