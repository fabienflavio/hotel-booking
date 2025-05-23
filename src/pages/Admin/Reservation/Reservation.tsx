import {  useQuery} from "react-query";
import { useContext, useState } from "react";
import { DataContext } from "../../../context/DataContext";
import { fetchBooks } from "../../../API/Book";
import { BootAllType } from "../../../Components/typescript/BookAllType";
import MenuAdmin from "../../../Components/menuAdmin/MenuAdmin";
import MenuAdminTitle from "../../../Components/menuAdmin/MenuAdminTitle";
import { FaHome } from "react-icons/fa";


export default function AdminReservation() {
    const {token} = useContext(DataContext)
    const { data, isLoading } = useQuery<BootAllType>( ["books",token] ,() => fetchBooks(token!));
    const [menu, setMenu] = useState<boolean>(false);

    if (isLoading ) return <div>Loading...</div>;
  return (
    <div className="flex flex-row p-8 bg-slate-200 gap-8">
        <MenuAdmin menu={menu}  setMenu={setMenu}/>
            
            <div className="w-full    ">
                <MenuAdminTitle menu="Books" />
                <div className="h-screen mx-20 max-xl:mx-0">
                        <div>
                                <div className="mt-8">
                                    <div className="overflow-auto rounded-lg shadow-md">
                                        <table className="w-full table-auto border-collapse">
                                            <thead className=" bg-gradient-to-r from-[#00ccff] to-[#008eb986]  ,    sticky top-0 text-white z-10">
                                            <tr>
                                                <th className="px-4 py-3 text-left text-sm font-semibold">Name</th>
                                                <th className="px-4 py-3 text-left text-sm font-semibold">Email</th>
                                                <th className="px-4 py-3 text-left text-sm font-semibold">Téléphone</th>
                                                <th className="px-4 py-3 text-left text-sm font-semibold">rooms</th>
                                                <th className="px-4 py-3 text-left text-sm font-semibold">Price (night)</th>
                                                <th className="px-4 py-3 text-left text-sm font-semibold">Total</th>
                                                <th className="px-4 py-3 text-left text-sm font-semibold">Date enter</th>
                                                <th className="px-4 py-3 text-left text-sm font-semibold">Date end</th>
                                            </tr>
                                            </thead>
                                            <tbody className="text-gray-700">
                                            {data?.bookings.map((i : any) => (
                                                <tr
                                                key={i.id}
                                                className="bg-white even:bg-gray-100 hover:bg-cyan-50 transition-colors duration-200"
                                                >
                                                <td className="px-4 py-3 text-sm font-light">{i.user.name}</td>
                                                <td className="px-4 py-3 text-sm">{i.user.email}</td>
                                                <td className="px-4 py-3 text-base ">{i.user.phone}</td>
                                                <td className="px-4 py-3 text-lg"> <FaHome className="inline-block text-xs" /> {i.room.name}</td>
                                                <td className="px-4 py-3 text-sm font-semibold">{i.room.price} $</td>
                                                <td className="px-4 py-3 text-sm font-bold ">{i.total} $</td>
                                                <td className="px-4 py-3 text-sm">{i.start_date}</td>
                                                <td className="px-4 py-3 text-sm">{i.end_date}</td>
                                                </tr>
                                            ))}
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
