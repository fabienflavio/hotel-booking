import { useNavigate } from 'react-router-dom';
import ButtonBase from '../Ui/Button/ButtonBase';

type Props = {
    Name ?: string;
    type ?: string;
    prix ?: number;
    id ?: number;
    token ?: string;
    setDmd : (a : string) => void
}

export default function CardOnlyChambre({Name,type,id,prix,token,setDmd}: Props) {
    const navigate = useNavigate();
    console.log(token,'Token')
    
  return (
    <div className=" w-[800px] border-[1px] border-gray-200  rounded-3xl py-8 shadow-2xl px-8">      
        <h1 className="text-3xl font-bold text-center " >Porte {Name} </h1>
        <div className=" mt-2">
            <p className="text-sm text-gray-500"> <span className="font-bold text-black"> Description </span> : Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum quidem, laborum numquam, illum rerum dolorem accusamus modi fugiat incidunt hic, facilis voluptate assumenda! Repellat aspernatur corrupti asperiores quas sapiente dicta!</p>
        </div>
        
        <div className="  mt-4 ">
            <div className="rounded-lg flex justify-between mt-4">
                <h1 className="text-md font-bold">Type de Chambre </h1>
                <p className=" text-xl font-bold text-center"> {type} </p>
            </div>
            <div className="flex justify-between mt-4">
                <h1 className="text-md font-bold ">Price of rooms</h1>
                <p className=" text-xl font-bold text-center "> {prix} $</p>
            </div>
        </div>

        <div className="mt-8" onClick={() => {token === "" ? setDmd("Vous n'etes pas connecter , connecter vous : ") : navigate(`/Reservation/${id}`)
            }}>
            <ButtonBase label='Book now'  />
        </div>
    </div>
  )
}