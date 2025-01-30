import logo from '../assets/logo.png'

function Navbar(){
    return(
        <nav className="w-full py-3 flex justify-center">
            {/* <h1 className="font-extrabold text-xl" style={{fontFamily:'Nunito Sans, sans'}}>Transnet.</h1> */}
            <img className='w-54 md:w-80 my-3' src={logo} alt="" />
        </nav>
    )
}

export default Navbar