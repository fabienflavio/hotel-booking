import { useState } from "react";
import {Chart as ChartJS,CategoryScale,LinearScale, BarElement,Title,Tooltip,Legend,} from 'chart.js';

import MenuAdmin from "../../../Components/menuAdmin/MenuAdmin";

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
        <div className="bg-slate-200 text-black p-8">
            <div className="flex flex-row justify-between">
                <MenuAdmin menu={menu}  setMenu={setMenu}/>
                <div className="w-full flex flex-row justify-center items-start pt-4 ">
                    <div className="flex flex-col items-center ">
                        {/* <CardState users={users} chambres={chambres} reservations={reservations} totalRevenue={totalRevenue} /> */}
                        <div className=" relative mt-8  chart-container">
                            {/* <Bar data={data} options={options} /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
