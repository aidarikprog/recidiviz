import { aprlinks } from "../constants/constants"

const ApproachLinks = () => {
  return (
    <>
      <div className='pb-[40px] flex justify-between flex-wrap ss:flex-row flex-col items-center gap-y-[10px]'>
        {aprlinks.map((link) => (
          <div key={link.id}>
            <a
              href='!#'
              className='flex items-center  '
            >
              <img
                className=' h-6 pr-2'
                src={link.img}
                alt='link'
              />
              <p>{link.link}</p>
            </a>
          </div>
        ))}
      </div>
    </>
  )
}

export default ApproachLinks
