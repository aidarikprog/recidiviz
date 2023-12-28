import { partners } from "../constants/constants"

const Partners = () => {
  return (
    <>
      <div className='container max-w-w'>
        <div className='flex justify-between items-center gap-3 py-5 ss:flex-row flex-col text-center'>
          <p className='text-[11px] leading-4 tarcking-[0.5px] uppercase'>
            Partners
          </p>
          {partners.map((link) => (
            <div
              key={link.id}
              className='ss:max-w-[160px]'
            >
              <img
                src={link.img}
                alt='img'
              />
            </div>
          ))}
          <p className='text-[11px] leading-4 tarcking-[0.5px] uppercase inline w-[88px]'>
            See All
          </p>
        </div>
      </div>
    </>
  )
}

export default Partners
