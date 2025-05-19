import {  useQuery} from "react-query";
import Header from "../Header/Header";
import { useContext, useState } from "react";
import { DataContext } from "../../../context/DataContext";
import { IoMenuSharp } from "react-icons/io5";
import { VscChromeClose } from "react-icons/vsc"
import { fetchReservation } from "../../../Components/fetchData/Reservation";
import { Reservation } from "../../../Components/typescript/Reservation";


export default function AdminReservation() {
    const {token} = useContext(DataContext)
    const { data: reservations, isLoading: isLoadingReservations } = useQuery<Reservation[]>( ["reservations",token] ,() => fetchReservation(token!));
    const [menu, setMenu] = useState<boolean>(false);


    if (isLoadingReservations ) return <div>Loading...</div>;
  return (
    <div className="flex flex-row ">
            <div className="w-[300px] max-[1500px]:hidden">
                <Header />
            </div>
            <div className="max-[1500px]:block  hidden ">
                <div className=" absolute z-50 max-[1500px]:mt-2">   
                    <IoMenuSharp style={{color : "white" }} onClick={() => setMenu(true)} size={40}  className={`cursor-pointer border-4 border-purple-500 bg-purple-500 ${menu ? "hidden" : "" }`}/>{/*  */}  
                    <VscChromeClose style={{color : "white"}} onClick={() => setMenu(false)} size={40} className={`cursor-pointer border-4 border-white   ${menu ? "" : "hidden" }`}/> {/**/} 
                </div>
               <div className={`absolute  z-10 ${menu ? "opacity-100 duration-200" : "opacity-0 duration-200"}`}>
                    <Header  />
                </div>
            </div>
      <div className="w-full  pt-5   "> 
          <div className="h-screen mx-20 max-xl:mx-0">
                <h1 className="bg-Primary-Text te ml-2 text-4xl font-bold text-center">Liste des Reservations</h1>
                <div>
                        <div className="mt-4">
                            <div className="flex flex-row justify-between flex-wrap overflow-scroll">
                                    <table>
                                        <thead className="bg-Primary-wh text-white font-bold ">
                                            <tr className="">
                                                <td className="px-2 py-2 text-base">Nom d'utilisateur</td>
                                                <td className="px-2 py-2 text-base">Email</td>
                                                <td className="px-2 py-2 text-base">N° Telephone</td>
                                                <td className="px-2 py-2 text-base">Chambre</td>
                                                <td className="px-2 py-2 text-base">Prix Totale</td>
                                                <td className="px-2 py-2 text-base">Date d'Entrer</td>
                                                <td className="px-2 py-2 text-base">Date de Sortie</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {
                                        reservations?.map((i ) => {
                                            return (
                                                <tr key={i.id}>
                                                    {/* <td className="bg-white font-normal px-2 py-2 text-sm border-b-4 shadow-md text-gray-500"> {i.username} </td>
                                                    <td className="bg-white font-normal px-2 py-2 text-sm border-b-4 shadow-md text-gray-500"> {i.email } </td>
                                                    <td className="bg-white font-normal px-2 py-2 text-sm border-b-4 shadow-md text-gray-500"> {i.telephone } </td>
                                                    <td className="bg-white font-normal px-2 py-2 text-sm border-b-4 shadow-md text-gray-500">Porte {i.chambreID?.name} </td>
                                                    <td className="bg-white font-normal px-2 py-2 text-sm border-b-4 shadow-md text-gray-500"> {i.prixTotal} Ar</td> */}
                                                    <td className="bg-white font-normal px-2 py-2 text-sm border-b-4 shadow-md text-gray-500"> {i.dateEntrer} </td>
                                                    <td className="bg-white font-normal px-2 py-2 text-sm border-b-4 shadow-md text-gray-500"> {i.dateSortie} </td>
                                                 
                                                </tr>)})
                                        }
                                        </tbody>
                                    </table>
                            </div>                         
                        </div>
                </div>
          </div>
      </div>
    </div>
  )
}
