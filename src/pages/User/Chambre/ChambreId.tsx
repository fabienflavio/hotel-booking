import { Link, useParams } from "react-router-dom"
import {useQuery } from "react-query";
import { useContext, useState } from "react";
import Footer from "../../../Components/footer/Footer";
import { DataContext } from "../../../context/DataContext";
import { fetchOneId } from "../../../API/Roms";
import HeaderClient from "../../../Components/header/HeaderClient";
import CardImage from "../../../Components/Card/CardImage";
import CardOnlyChambre from "../../../Components/Card/CardOnlyChambre";
import HeaderMenu from "../../../Components/header/HeaderMenu";
import Loading from "../../../Components/Loading/Loading";
import Image from "../../../assets/images/chairs.jpg";
import { RoomsOneType } from "../../../Components/typescript/RoomsOneType";

export default function ChambreId() {
  const [dmd,setDmd] = useState("")
  const { token  } = useContext(DataContext);
  const { id  } = useParams<{id : string}>()
  const idParse = parseInt(id!)
  const { data ,isLoading  } = useQuery<RoomsOneType, Error>( ['chambreId',idParse],() => fetchOneId(idParse!));  

  if (isLoading) {
    return <Loading />
  }
    return (
    <div className="">
        <HeaderClient />
        <HeaderMenu Header="Room Details" Image={Image} Menu="Room" />
        {
          dmd !== "" &&
            <div>
              <h1 className="bg-red-500 bg-opacity-15 text-red-500 text-base text-center font-bold">{dmd} <Link to={"/Connexion"} className="text-lg bg-Primary-Text-Hover border-b-4 border-purple-500 hover:border-purple-600" >Connexion</Link></h1>
            </div>
        }
        <div className="flex justify-center w-full mt-20">
          <div className="mt-10  flex flex-row justify-between w-[1200px] gap-5 max-[1200px]:flex-col">
             <CardImage img={data?.room.image} className="h-96 w-full"/>
              <CardOnlyChambre setDmd={setDmd} Name={data?.room.name}  id={data?.room.id}  prix={data?.room.price} token={token} type={data?.room.class} />
            </div>
        </div>
        <Footer></Footer>
    </div>
  )
}