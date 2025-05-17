import { useQuery } from "react-query";
import { fetchChambre } from "../../../API/Roms";
import { Link } from "react-router-dom";
import { ChambreTypeData } from "../../../Components/typescript/chambre";
import CardChambre from "../../../Components/Card/CardChambre";
import MenuAdmin from "../../../Components/menuAdmin/MenuAdmin";
import { useState } from "react";
import { IoHome } from "react-icons/io5";
import { MdArrowForwardIos } from "react-icons/md";


export default function AdminChambre() {
  const [menu, setMenu] = useState(false);
  const { data, isLoading, isError } = useQuery('rooms' , () => fetchChambre() );
  

  if (isLoading) {return <h1 className="">Loading...</h1>;}
  if (isError || !data) { return <div>Error loading data</div>;}

  return (
    <div className="bg-slate-200 text-black p-8">
      <div className="flex flex-row justify-between">
        <MenuAdmin menu={menu}  setMenu={setMenu}/>
        <div className="w-full ml-8">
          <div className="w-full flex flex-row justify-between bg-white p-4 rounded-l-3xl">
            <div>
              <p> <IoHome className="inline-block text-[#00CCFF] mr-2 " size={30} /> Home <MdArrowForwardIos className="inline-block mx-1" /> Dashboard </p>
            </div>
            <p>Welcome Admin Fabien ,</p>
            <p>Welcome Admin Fabien ,</p>
          </div>
          <div className="mt-8">
            <Link to={"/AdminAjouterChambre"} className=" bgPrimaryButton ">+ Ajouter un chambre</Link>
          </div>
          <div className="mt-4 flex flex-row   flex-wrap justify-between gap-2">
            {data?.rooms &&  data.rooms.map((i : ChambreTypeData) =>{
              return (
                <CardChambre   img={i.image} Name={i.name} prix={i.price} type={i.class} id={i.id}  />
            )
            } )}
            {data.rooms.length === 0 && <h1 className="text-black font-bold text-2xl">Aucun Chambre</h1> }
          </div> 
        </div>
      </div>
    </div>
  );
}
