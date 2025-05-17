import { BsFillBookmarkCheckFill } from 'react-icons/bs'
import { FaMoneyBillWave, FaUser } from 'react-icons/fa'
import { MdBedroomParent } from 'react-icons/md'
import { User } from '../typescript/User'
import { Reservation } from '../typescript/Reservation'
import { ChambreTypeData } from '../typescript/chambre'

type Props = {
    users ?: User[],
    reservations ?: Reservation[],
    chambres ?: ChambreTypeData[],
    totalRevenue ?: number
}

export default function CardState({ users , reservations , chambres , totalRevenue  }: Props) {
  return (
    <div className="w-full max-xl:w-[650px] max-md:w-[350px] flex flex-row justify-between gap-5 flex-wrap  max-[1500px]:items-center max-[1500px]:justify-center">
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 px-1 py-1 rounded-lg flex flex-row">
            <span className="text-3xl font-bold text-white m-2"><FaUser style={{ display: "inline-block", fontSize: 40, color: "white" }} />  </span>
            <div className="flex flex-col p-2">
                <span className="text-xl font-bold text-white "> {users?.filter(u => u.role !== "Admin").length} </span>
                <span className="text-white "> Nombres de Clients</span>
            </div>
        </div>
        <div className="bg-gradient-to-r from-lime-500 to-green-500 px-1 py-1 rounded-lg flex flex-row">
            <span className="text-3xl font-bold text-white m-2"><BsFillBookmarkCheckFill style={{ display: "inline-block", fontSize: 40, color: "white" }} />  </span>
            <div className="flex flex-col p-2">
                <span className="text-xl font-bold text-white "> {reservations?.length} </span>
                <span className="text-white"> Nombres des Reservations</span>
            </div>
        </div>
        <div className="bg-gradient-to-r from-pink-500 to-rose-500 px-1 py-1 rounded-lg flex flex-row">
            <span className="text-3xl font-bold text-white m-2"><MdBedroomParent style={{ display: "inline-block", fontSize: 40, color: "white" }} />  </span>
            <div className="flex flex-col p-2">
                <span className="text-xl font-bold text-white "> {chambres?.length} </span>
                <span className="text-white"> Total de Chambre</span>
            </div>
        </div>
        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 px-1 py-1 rounded-lg flex flex-row">
            <span className="text-3xl font-bold text-white m-2"><FaMoneyBillWave style={{ display: "inline-block", fontSize: 40, color: "white" }} />  </span>
            <div className="flex flex-col p-2">
                <span className="text-xl font-bold text-white ">{totalRevenue} Ar </span>
                <span className="text-white"> Argents Recuperer</span>
            </div>
        </div>
    </div>
  )
}