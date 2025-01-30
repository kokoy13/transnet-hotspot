import Navbar from "./components/Navbar"
import Login from "./components/Login"
import Footer from "./components/Footer"

function App() {

  return (
    <>
      <div className="px-3 bg-zinc-100 h-full text-xl md:px-5">
        <Navbar></Navbar>
        <Login></Login>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
