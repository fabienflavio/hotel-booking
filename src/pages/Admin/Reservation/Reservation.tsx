import {  useQuery} from "react-query";
import Header from "../Header/Header";
import { useContext, useState } from "react";
import { DataContext } from "../../../context/DataContext";
import { IoMenuSharp } from "react-icons/io5";
import { VscChromeClose } from "react-icons/vsc"
import { fetchReservation } from "../../../Components/fetchData/Reservation";
import { fetchUser } from "../../../Components/fetchData/Users";
import { fetchChambre } from "../../../API/Roms";
import { Reservation } from "../../../Components/typescript/Reservation";
import { User } from "../../../Components/typescript/User";
import {  chambreType } from "../../../Components/typescript/chambre";


export default function AdminReservation() {
    const search = ""
    const short = ""
    const page= 1
    const limit = 100;
    const {token} = useContext(DataContext)
    const { data: reservations, isLoading: isLoadingReservations } = useQuery<Reservation[]>( ["reservations",token] ,() => fetchReservation(token!));
    const { data: users, isLoading: isLoadingUsers} = useQuery<User[]>( ["users",token] ,() => fetchUser(token!));
    const { data: chambres, isLoading: isLoadingChambres } = useQuery<chambreType>( ["chambres",page , limit,search,short ] ,() => fetchChambre());
    const [menu, setMenu] = useState<boolean>(false);


    if (isLoadingReservations || isLoadingUsers || isLoadingChambres) return <div>Loading...</div>;
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
                                            const userID = users?.find((u) => u.id  === i.idUser)
                                            const chambreID = chambres?.data.find((j) => j.id  === i.idChambre)
                                            if (!userID || !chambreID) return null
                                            return (
                                                <tr key={i.id}>
                                                    <td className="bg-white font-normal px-2 py-2 text-sm border-b-4 shadow-md text-gray-500"> {userID?.username} </td>
                                                    <td className="bg-white font-normal px-2 py-2 text-sm border-b-4 shadow-md text-gray-500"> {userID?.email } </td>
                                                    <td className="bg-white font-normal px-2 py-2 text-sm border-b-4 shadow-md text-gray-500"> {i.telephone } </td>
                                                    <td className="bg-white font-normal px-2 py-2 text-sm border-b-4 shadow-md text-gray-500">Porte {chambreID?.name} </td>
                                                    <td className="bg-white font-normal px-2 py-2 text-sm border-b-4 shadow-md text-gray-500"> {i.prixTotal} Ar</td>
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
