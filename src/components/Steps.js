import {steps} from '../constants/constants'

const Steps = () =>{

  return(
    <>
      <div className=" container max-w-w  text-center py-[50px] ss:py-[110px]">
        <h2 className='text-7 leading-9 tracking-[1.2px] max-w-[500px] mx-auto text-center w-full  pb-[55px]'>We are a non-profit that partners with state criminal justice agencies to advance their use of data and reduce incarceration.</h2>
        <div className='flex flex-col ss:flex-row items-center ss:items-start gap-y-[50px] justify-between mx-auto max-w-[758px]'>
          {steps.map((descr, id) =>(
            <div key={descr.id} className='max-w-[126px] w-[100%] flex flex-col items-center '>
              <img src={descr.img} alt="/" className='max-w-[48px] ss:mb-5 mb-2' />
              <p className='text-[15px] leading-6 text-[#355362] opacity-[80%]'>{descr.descr}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Steps
