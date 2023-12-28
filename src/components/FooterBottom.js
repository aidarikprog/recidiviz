import logo from "../assets/logobottom.svg"

const FooterBottom = () => {
  return (
    <>
      <div className='bg-[#000F0F]'>
        <div className='container max-w-w'>
          <div className='flex justify-between items-center py-10'>
            <div>
              <img
                src={logo}
                alt='img'
                className=''
              />
            </div>
            <div className='flex flex-col text-[#E5ECEC] text-[10px] leading-[10px] '>
              <div className='flex gap-2 pb-2'>
                <p>Terms of Service</p>
                <p>Privacy</p>
                <p>Responsible Disclosure</p>
              </div>
              <div className='flex gap-2'>
                <p className=''>Copyright © 2017</p>
                <p>-2022, Recidiviz. All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FooterBottom
