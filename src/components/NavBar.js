import { useState } from "react"
import logo from "../assets/logo.svg"
import { navLinks } from "../constants/constants"
import { RxHamburgerMenu } from "react-icons/rx"
import { IoMdClose } from "react-icons/io"
import Modal from "./Modal/Modal"

const NavBar = () => {
  const [open, setOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <div className={!open ? "container max-w-w" : " container bg-black"}>
        <nav className='hidder flex  justify-between items-center py-4 '>
          <a href='!#'>
            <img
              src={logo}
              alt='logo'
            />
          </a>
          <ul className='ss:flex gap-[51px] hidden '>
            {navLinks.map((navs) => (
              <li key={navs.id}>
                <a
                  href='#!'
                  className='text-white'
                >
                  {navs.title}
                </a>
              </li>
            ))}
            <button
              onClick={() => setModalOpen(!modalOpen)}
              className='text-white'
            >
              Log In
            </button>
          </ul>

          {/* burger btns */}
          <div
            className='ss:hidden text-white z-10'
            onClick={() => setOpen(!open)}
          >
            {open ? <IoMdClose size={30} /> : <RxHamburgerMenu size={30} />}
          </div>
        </nav>

        {/* response navLinks */}
        <ul
          className={
            !open
              ? " hidden"
              : "pt-5 left-0 top-[60px] absolute  w-full text-center h-full bg-[#000]"
          }
        >
          {navLinks.map((navs) => (
            <li
              key={navs.id}
              className='pb-6'
            >
              <a
                href='#!'
                className='text-white '
              >
                {navs.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* modal window */}
      <Modal
        open={modalOpen}
        setOpen={setModalOpen}
      />
    </>
  )
}

export default NavBar
