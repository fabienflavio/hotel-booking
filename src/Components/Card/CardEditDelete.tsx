import { FaEdit } from 'react-icons/fa';
import { MdOutlineDeleteForever } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

type Props = {
    setDeleteChambreState : ({modal, id} : {modal : boolean , id : number} ) => void
    id : number
}

export default function CardEditDelete({setDeleteChambreState,id}: Props) {
  const navigate = useNavigate();
  return (
      
    <div className="flex flex-row justify-between mt-4 mx-4">
        <button
        onClick={() => navigate(`/AdminModifierChambre/${id}`)}
        className="text-sm bg-Primary text-white  p-2 rounded-lg"
        >
        <FaEdit style={{ display: "inline-block", fontSize: 18 }} />
        <span className="text-sm ml-1">Modifier</span>
        </button>
        <button
        onClick={() => setDeleteChambreState({ id: id, modal: true })}
        className="text-sm bg-red-500 bg-opacity-10 hover:bg-opacity-15 text-red-500 p-2 rounded-lg"
        >
        <MdOutlineDeleteForever style={{ display: "inline-block", fontSize: 18 }} />
        <span className="text-sm ml-1">Suprimer</span>
        </button>
    </div>
  )
}