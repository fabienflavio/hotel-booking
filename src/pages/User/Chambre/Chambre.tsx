import { useQuery } from "react-query";
import Footer from "../../../Components/footer/Footer";
import HeaderClient from "../../../Components/header/HeaderClient";
import { fetchChambre } from "../../../API/Roms";
import CardChambreUser from "../../../Components/Card/CardChambreUser";
import Loading from "../../../Components/Loading/Loading";
import HeaderMenu from "../../../Components/header/HeaderMenu";
import Image from "../../../assets/images/living-room-8.jpg";
import { RoomsAllType } from "../../../Components/typescript/RoomsAllType";


export default function Chambre() {
    const { data, isLoading, isError } = useQuery<RoomsAllType>('rooms' , () => fetchChambre());
    

    if (isLoading) {return <Loading /> ;}
    if (isError || !data) { return <div>Error loading data</div>;}
    return (
        <div className="">
            <HeaderClient />
            <HeaderMenu Header="Rooms & Suites" Image={Image} Menu="Rooms" />
            <div className="w-full flex justify-center h-full mt-32">
                <div className="w-[1000px]">
                   
                    <div className="flex flex-row justify-start gap-5 flex-wrap border-black ">
                        {
                        data?.rooms &&  data.rooms.map((i ) => {
                            return( 
                                <CardChambreUser  id={i.id!} Name={i.name} type={i.class} prix={i.price} img={i.image!} />
                            )
                        })}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
 