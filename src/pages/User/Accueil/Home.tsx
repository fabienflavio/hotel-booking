import ButtonBase from "../../../Components/Ui/Button/ButtonBase"
import ImageBgHero from "../../../assets/images/interior.jpg"
import ImgCard from "../../../assets/images/Card.png"
import ImgCard1 from "../../../assets/images/kitchen.jpg"
import ImgCard2 from "../../../assets/images/interior-design.jpg"
import ImgCard3 from "../../../assets/images/living-room.jpg"

export default function Home() {
    return (
      <>
        <div className="white  w-full ">
            {/* hero Section */}
            <div className="relative h-[400px] lg:h-[700px] text-white">
                <div className="flex justify-center items-center absolute w-full h-full bg-black bg-opacity-50 top-0 left-0 z-10">
                    <div  className="shadow-2xl lg:py-20 py-8 w-[1200px] backdrop-blur-lg bg-black bg-opacity-25 rounded-[80px]">
                        <h1 className="lg:leading-[3.5rem] px-8 lg:px-40 text-center text-2xl lg:text-5xl font-bold">Explore and make your dreams come true with our Mayana Hotel</h1>
                        <p className="lg:px-80 lg:mt-8  px-8 mt-4 text-center lg:text-base text-xs">There are many variations of the passages of lorem Ipsum fromavailable,variations of the passages.</p>
                        <div className="text-center mt-8">
                            <ButtonBase label="Book Your Stay" />
                        </div>
                        
                    </div>
                </div>
                <img src={ImageBgHero} alt=""  className="overley object-cover w-full h-full"/>
            </div>
         
            <div className="mt-16 lg:mt-32 w-full flex  justify-center">
                <div className="max-w-[1200px] flex flex-col lg:flex-row justify-around items-center gap-10"> 
                    <img className="lg:w-full h-full w-[300px] lg:h-[600px]" src={ImgCard} alt="" />
                    <div className="w-full flex items-center">
                        <div className="">
                            <p className=" text-xl"> About us </p>
                            <h2 className=" mt-2 lg:text-4xl text-2xl font-bold capitalize"> We invite guests to celebrate and enjoy a life of luxury </h2>
                            <p className="text-gray-500 lg:my-8 my-4 lg:text-base text-sm">
                                SeaHotel is a top-class, modern and attention-grabbing in the luxury hotel website template for your boutique accommodation business. If you are ready to bring your hotel services online
                            </p>
                           <ButtonBase label="About us" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-black w-full lg:h-96 p-8 mt-16 lg:mt-32 text-white flex justify-center items-center">
                <div className="max-w-[1200px]  flex  lg:flex-row items-center flex-wrap justify-evenly gap-8 ">
                    <div className=" border-r-2 border-white w-60 pr-20 ">
                        <h1 className="text-5xl font-bold mb-4">25K+</h1>
                        <p className="font-semibold">Happy Client</p>
                    </div>
                    <div className=" border-r-2 border-white w-60 pr-20 ">
                        <h1 className="text-5xl font-bold mb-4">174+</h1>
                        <p className="font-semibold">Rooms</p>
                    </div>
                    <div className=" border-r-2 border-white w-60 pr-20 ">
                        <h1 className="text-5xl font-bold mb-4">50+</h1>
                        <p className="font-semibold">Types Of Service</p>
                    </div>
                    <div className="border-r-2 lg:border-r-0 border-white w-60 pr-20">
                        <h1 className="text-5xl font-bold mb-4">10+</h1>
                        <p className="font-semibold">Lounges</p>
                    </div>
                </div>
            </div>

            <div className="mt-16 lg:mt-32 flex justify-center">
                <div className="max-w-[1200px] ">
                    <h3 className="text-xl text-center">Our blog</h3>
                    <h1 className=" lg:text-4xl text-2xl text-center font-bold ">Read our blog and news</h1>
                    <p className="text-gray-500 text-sm mt-4  lg:mt-8 lg:text-base text-center  lg:px-60">Savvy travelers are looking for more than just the next destination on the map. They are looking for a memorable experience and to make new friends along the way.</p>
                    
                    <div className="flex gap-8 mt-16 flex-col justify-evenly items-center lg:flex-row lg:justify-between">
                        <div className="shadow-xl rounded-2xl border-[1px] border-gray-400 w-96 pb-8 mb-4 cursor-pointer  ">
                            <img src={ImgCard1} className="rounded-t-xl  object-cover h-40 w-full"  alt={`${"http://127.0.0.1:8000" + '/' }`} />
                            <div className="flex justify-between ml-4 mt-4 border-l-2 border-black px-4">
                                <div>
                                    <h1 className="text-xl font-bold">Porte 250 </h1>
                                    <h2 className="text-sm mt-2">50 $ / nuit</h2>
                                </div>
                                <div>
                                    <p className="text-sm rounded-md shadow-md bg-white text-gray-900 font-light px-2 py-1"> Family </p>
                                </div>
                            </div>
                        </div>
                        <div className="shadow-xl rounded-2xl border-[1px] border-gray-400 w-96 pb-8 mb-4 cursor-pointer  ">
                            <img src={ImgCard2} className="rounded-t-xl  object-cover h-40 w-full"  alt={`${"http://127.0.0.1:8000" + '/' }`} />
                            <div className="flex justify-between ml-4 mt-4 border-l-2 border-black px-4">
                                <div>
                                    <h1 className="text-xl font-bold">Porte 140 </h1>
                                    <h2 className="text-sm mt-2">10 $ / nuit</h2>
                                </div>
                                <div>
                                    <p className="text-sm rounded-md shadow-md bg-white text-gray-900 font-light px-2 py-1"> Family Only </p>
                                </div>
                            </div>
                        </div>
                        <div className="shadow-xl rounded-2xl border-[1px] border-gray-400 w-96 pb-8 mb-4 cursor-pointer  ">
                            <img src={ImgCard3} className="rounded-t-xl  object-cover h-40 w-full"  alt={`${"http://127.0.0.1:8000" + '/' }`} />
                            <div className="flex justify-between ml-4 mt-4 border-l-2 border-black px-4">
                                <div>
                                    <h1 className="text-xl font-bold">Porte 190 </h1>
                                    <h2 className="text-sm mt-2">60 $ / nuit</h2>
                                </div>
                                <div>
                                    <p className="text-sm rounded-md shadow-md bg-white text-gray-900 font-light px-2 py-1"> Device </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>  
      </>
    )
  }  