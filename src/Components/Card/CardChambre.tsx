import { FaRegEdit, } from "react-icons/fa";
import { MdDelete, } from "react-icons/md";
import { useMutation, useQueryClient } from "react-query";
import { deleteChambre } from "../../API/Roms";
import { DataContext } from "../../context/DataContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
    id : number ;
    Name : string ; 
    type : string ;
    prix : number ;
    img : string ;
}

export default function CardChambre({id,Name,type,prix,img}: Props) {
    const { token } = useContext(DataContext);
    const navigate = useNavigate()

    const queryClient = useQueryClient();
    const mutation = useMutation( 
        (id : number) => deleteChambre(id,token!) ,
        {
            onSuccess(){
                queryClient.invalidateQueries("rooms")
            },
            onError(){

            }
        }
    )
  return (
    <div key={id} className="shadow-xl rounded-2xl bg-white w-96 pb-8 mb-4 cursor-pointer  ">
        <img className="rounded-t-xl  object-cover h-40 w-full" src={`${"http://127.0.0.1:8000" + '/' + img}`} alt={`${"http://127.0.0.1:8000" + '/' + img}`} />
        <div className="flex justify-between ml-4 mt-4 border-l-2 border-black px-4">
            <div>
                <h1 className="text-xl font-bold">Porte {Name}</h1>
                <h2 className="text-sm mt-2">{prix} $ / nuit</h2>
            </div>
            <div>
                <p className="text-sm rounded-md shadow-md bg-white text-gray-900 font-light px-2 py-1">{type} </p>
                <div className="mt-2 flex justify-end gap-5">
                    < MdDelete size={25} className="inline-block" onClick={() => mutation.mutate(id) } />
                    < FaRegEdit size={25} className="inline-block" onClick={() => navigate(`/AdminModifierChambre/${id}`) } />
                </div>
            </div>
        </div>

        <div className="">
            <div className="flex flex-row justify-between px-4">
               
            </div>  
        </div>
    </div>
  )
}