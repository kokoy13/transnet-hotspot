import tiki from "../assets/tiki.png"
import basko from "../assets/basko.png"
// import daihatsu from "../assets/daihatsu.png"

function Footer(){
    return(
        <footer className="flex flex-col gap-3 justify-center items-center -translate-y-10 min-[1113px]:-translate-y-0 xl:mb-3">
            <div>
                <h1 className="text-center font-semibold text-wrap mb-2 md:text-3xl md:mb-5 xl:text-4xl">More than 100+ corporate use Transnet.</h1>
            </div>
            <div className="flex">
                <div className="flex flex-col grayscale items-center md:flex-row gap-8 md:gap-20 w-full">
                    <img className="w-40 xl:w-50" src={tiki} alt="" />
                    <img className="w-20 xl:w-30" src={basko} alt="" />
                    <img className="w-20 xl:w-30" src={basko} alt="" />
                </div>
            </div>
        </footer>
    )
}

export default Footer