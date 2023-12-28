import "./modal.css"

const Modal = ({ open, setOpen }) => {
  return (
    <>
      <div
        className={ !open || "h-full w-full backdrop-blur-sm"}
        onClick={() => setOpen(!open)} //закрыть вне окна
      >
        <form
          onClick={(e) => e.stopPropagation()} //не закрывать при нажатии на окно
          className={
            !open
              ? "hidden"
              : "form absolute top-1/3 left-1/2 translate-[-50%] -translate-x-1/2 -translate-y-1/2 "
          }
        >
          <p className='form-title'>Sign in to your account</p>
          <div className='input-container'>
            <input
              type='email'
              placeholder='Enter email'
            />
            <span></span>
          </div>
          <div className='input-container'>
            <input
              type='password'
              placeholder='Enter password'
            />
          </div>
          <button
            type='submit'
            className='submit'
          >
            Sign in
          </button>
          <button
            // type='submit'
            className='submit'
            onClick={() => setOpen(false)}
          >
            close
          </button>
          <p className='signup-link'>
            No account?
            <a href='!#'>Sign up</a>
          </p>
        </form>
      </div>
    </>
  )
}

export default Modal
