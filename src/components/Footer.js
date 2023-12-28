import FooterBotttom from "./FooterBottom"
import { footerCompany } from "../constants/constants"

const Footer = () => {
  return (
    <>
      <div className='bg-[#001414] '>
        <div className='container max-w-w'>
          <div className='flex flex-wrap sm:justify-between justify-center pt-[100px]'>
            {footerCompany.map((link, id) => (
              <div key={id}>
                <h1 className='mb-11 mr-[100px] text-[#7D9798] text-[11px] uppercase tracking-[1px]'>
                  {link.title}
                </h1>
                <div className='flex flex-col pb-[15px]'>
                  {link.links.map((name, id) => (
                    <a key={id}
                      href='#!'
                      className='text-[#EDECEB] leading-[30px] '
                    >
                      {name.name}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <FooterBotttom />
    </>
  )
}

export default Footer
