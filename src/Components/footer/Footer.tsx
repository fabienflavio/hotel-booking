import Image from "../../assets/images/LogoWhite.png"
import ImageBgBack from "../../assets/images/real-estate.jpg"
import TextFooter from "./TextFooter"

export default function Footer() {
    return (
      <>
          <footer className=" mt-32 flex justify-center ">
            <div className="relative w-full ">
                <img className="overley object-cover w-full h-[1000px] lg:h-[500px]"  src={ImageBgBack} alt="" />
                <div className="flex justify-center items-center absolute w-full h-full bg-black bg-opacity-50 backdrop-blur-sm top-0 left-0 z-10 ">
                    <div className="w-full flex flex-col justify-evenly items-center lg:flex-row lg:justify-between max-w-[1200px] gap-10 ">
                        <div className="flex flex-col w-full justify-center items-center">
                            <div className="flex flex-row items-center gap-2">
                                <div>
                                    <img src={`${Image}`} width="100px" height="100px" alt="" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-white ">HOTEL MAYANA</p>
                                </div>
                            </div>
                            <div className="mt-4">
                                <p className=" text-white ">Monument Funéraire France Des Souvenirs Éternels, Un Respect Immuable.</p>
                            </div>
                        </div>
                            
                        <div className="borderAnimateOnlyLi lg:w-1/2">
                            <h1 className="text-2xl  font-bold mb-4 text-white max-sm:text-center">Produits</h1>
                            <TextFooter text="About Us" />
                            <TextFooter text="Service" />
                            <TextFooter text="Gallery" />
                            <TextFooter text="Blog" />
                            <TextFooter text="Contact Us" />  
                        </div>
                        <div className="borderAnimateOnlyLi lg:w-1/2">
                            <h1 className="text-2xl  font-bold mb-4 text-white max-sm:text-center">Produits</h1>
                            <TextFooter text="Superior Room" />
                            <TextFooter text="Deluxe Room" />
                            <TextFooter text="Deluxe Junior Suite" />
                            <TextFooter text="Detached Suite" />
                        </div>
                        <div className="borderAnimateOnlyLi lg:w-1/2">
                            <h1 className="text-2xl  font-bold mb-4 text-white max-sm:text-center">Produits</h1>
                            <TextFooter text="+261 34 28 791 74 " />
                            <TextFooter text="fabien4240flavio@gmail.com" />
                            <TextFooter text="Madagascar, Fianarantsoa , Igaga" />
                        </div>
                    </div>

                </div>
            </div>

            
          </footer>
      </>
    )
  }  