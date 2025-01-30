import imgLogin from '../assets/login.jpg'

function Login(){
    return(
        <>
            <div className="w-full flex flex-col lg:flex-row lg:mb-8">
                <img className="w-full h-80 md:h-[500px] xl:h-[550px] rounded-t-3xl lg:rounded-tr-none lg:rounded-l-3xl" src={imgLogin} alt="" />
                <div className="w-full h-1/2 bg-white px-8 py-5 md:py-10 rounded-t-3xl relative -translate-y-20 lg:-translate-y-0 lg:h-[500px] lg:rounded-tl-none lg:rounded-br-3xl xl:h-[550px] lg:flex lg:flex-col lg:justify-between">
                    <div className="mb-5">
                        <h1 className="text-wrap font-bold text-5xl lg:text-6xl mb-5 leading-14 hidden md:flex md:text-center lg:mb-16 xl:mb-20 rounded" style={{fontFamily:'Nunito Sans, sans'}}>Welcome to Transnet-Hotspot</h1>
                        <p className="text-gray-700 font-light text-wrap text-justify md:text-2xl"><span className='font-bold italic'>&quot;Connectivity for better future&quot;</span>, Click continue to connect to the Transnet-hotspot network. if the page can&apos;t work, please forget the wifi and reconnect again to the network</p>
                    </div>
                    <div className="flex justify-center">
                        <a href="/welcome" className="px-5 py-2 font-semibold bg-black text-white rounded-full text-xl md:text-3xl">Continue</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login