
import MainDescription from "./MainDescription"
import NavBar from "./NavBar"

const MainPage = () => {
  return (
    <>
      <div className="bg-mainImage relative  h-[100vh] bg-no-repeat bg-cover bg-center max-w-full object-cover">{/* h-[776px] */}
        <NavBar/>
        <MainDescription/>
      </div>
    </>
  )
}

export default MainPage
