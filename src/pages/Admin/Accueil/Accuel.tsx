import { useState } from "react";
import {Chart as ChartJS,CategoryScale,LinearScale, BarElement,Title,Tooltip,Legend,} from 'chart.js';

import MenuAdmin from "../../../Components/menuAdmin/MenuAdmin";
import MenuAdminTitle from "../../../Components/menuAdmin/MenuAdminTitle";
import { FaUser } from "react-icons/fa";
import CardState from "../../../Components/Card/CardState";
import ClickTable from "../../../Components/Table/ClickTable";
import SourceMediumChart from "../../../Components/Card/SourceMeduim";

ChartJS.register(CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend);

export default function AdminAccueil() {
    // const { token } = useContext(DataContext)
    // const { data: reservations, isLoading: isLoadingReservations } = useQuery<Reservation[]>(["reservations", token], () => fetchReservation(token!));
    // const { data: users, isLoading: isLoadingUsers } = useQuery<User[]>(["users", token], () => fetchUser(token!));
    // const { data: chambres, isLoading: isLoadingChambres } = useQuery<ChambreTypeData[]>(["chambres", token], () => fetchChambreInfinitepage(token!));
    const [menu, setMenu] = useState<boolean>(false);

    // if (isLoadingReservations || isLoadingUsers || isLoadingChambres) return <div>Loading...</div>;

    // const data = {
    //     labels: chambres?.map(u => `porte ${u.name}`),
    //     datasets: [
    //         {
    //             label: 'Prix des Chambres en Ar',
    //             data: chambres?.map((u) => u.prix), 
    //             backgroundColor: 'rgba(75, 192, 192, 0.6)',
    //             borderColor: 'rgba(75, 192, 192, 1)',
    //             borderWidth: 1,
    //         },
    //     ],
    // };
    // const options = option
     // const totalRevenue = reservations?.reduce((accumulator, reservation) => accumulator + reservation.prixTotal, 0);
    return (
            <div className="bg-slate-200 text-black p-8 flex flex-row gap-8 justify-between w-full">
                <MenuAdmin menu={menu}  setMenu={setMenu}/>
                <div className="w-full overflow-y-auto">
                    <MenuAdminTitle menu="Dashboard" />
                    <div className=" flex lg:flex-row flex-col items-center mt-8 gap-10 ">
                        <div className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 px-1 py-4 rounded-2xl flex flex-row">
                            <span className="text-3xl font-bold text-white m-2"><FaUser style={{ display: "inline-block", fontSize: 40, color: "white" }} />  </span>
                            <div className="flex flex-col p-2">
                                <span className="text-xl font-bold text-white ">20</span>
                                <span className="text-white "> Nombres de Clients</span>
                            </div>
                        </div>       
                    </div>
                    <CardState  />
                    <div className="flex mt-8 gap-8">
                        <ClickTable />
                        <SourceMediumChart />
                    </div>
                </div>
            </div>
        
    )
}
