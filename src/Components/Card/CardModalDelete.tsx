import { useMutation, useQueryClient } from 'react-query';
import { deleteChambre } from '../../API/Roms';
import { useNavigate } from 'react-router-dom';
import { modal } from '../typescript/modal';

type Props = {
    deleteChambreState : modal
    setDeleteChambreState : ( {id,modal} : modal ) => void
    token : string
    id : number
}

export default function CardModalDelete({id , deleteChambreState , setDeleteChambreState , token}: Props) {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const mutation = useMutation((id: number) => deleteChambre(id, token!), {
      onSuccess: () => {
        queryClient.invalidateQueries('chambres');
        navigate("/AdminChambre");
      },
    });
  
    const handleDeleteChambre = () => {
      mutation.mutate(deleteChambreState.id);
      setDeleteChambreState( {id : id, modal: false } );
    };


  return (
    <>
        {deleteChambreState.modal && (
        <div className="w-full bg-black bg-opacity-20 h-screen flex justify-center items-center absolute top-0 left-0">
          <div className="w-[400px] h-[210px] bg-gray-200 rounded-xl opacity-">
            <div className="p-8">
              <h1 className="bg-Primary-wh text-2xl font-bold text-center text-white">Confirmation</h1>
              <p className="text-gray-500 text-sm mt-2">Voulez-vous vraiment supprimer cette chambre ?</p>
              <div className="flex flex-row justify-between mt-2">
                <button
                  onClick={handleDeleteChambre}
                  className="bg-white px-4 py-1 rounded-md hover:bg-slate-200"
                >
                  Oui
                </button>
                <button
                  onClick={() => setDeleteChambreState({ id : id, modal: false} )}
                  className="bg-Primary px-4 py-1 text-white rounded-md"
                >
                  Non
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
    
  )
}