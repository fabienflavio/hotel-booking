import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient, useQuery } from "react-query";
import { useEffect, useState, useContext } from "react";
import { DataContext } from "../../../context/DataContext";
import { fetchOneId, updateChambre } from "../../../API/Roms";
import { fetchClass } from "../../../API/Class";
import { ClassType } from "../../../Components/typescript/ClassType";
import { zodResolver } from "@hookform/resolvers/zod";
import { RoomsType, roomsSchema } from "../../../Validation/Rooms";

type Props = {}


export default function AdminModifierChambre({}: Props) {
  const { token } = useContext(DataContext);
  const { id } = useParams<{ id: string }>();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [errorServer, setErrorServer] = useState<string>("");
  const {data : dataClass} = useQuery(  [,token] , () => fetchClass(token!)); 

  const { data } = useQuery(
    ["chambreId", id], () => fetchOneId(parseInt(id!))
  );

  const { register, setValue, formState: { errors }, handleSubmit } = useForm<RoomsType>({
    resolver : zodResolver(roomsSchema)
  });
  useEffect(() => {
    if (data) {
      setValue("name", data.name);
      setValue("class", data.type);
      setValue("price", data.prix);
    }
  }, [data, setValue]);

  const mutation = useMutation(
    (formData: FormData) => updateChambre(formData, id!, token!),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('chambre');
        navigate("/AdminChambre");
      },
      onError: (error: any) => {
        if (error.response && error.response.data) {
          setErrorServer(error.response.data.message);
        } else {
          setErrorServer("An unexpected error occurred");
        }
        console.error("Error during mutation: ", error);
      },
    }
  );

  const onSubmit = (formData : RoomsType) => {
    const formDataObj = new FormData();
    formDataObj.append('name', formData.name);
    formDataObj.append('class', formData.class);
    formDataObj.append('price', formData.price.toString());
    formDataObj.append('_method', "PUT");

    if (formData.image_url && formData.image_url.length > 0) {
      formDataObj.append('image_url', formData.image_url[0]);
    } else {
      console.error('L\'image fournie n\'est pas un fichier.');
      return;
    }

    mutation.mutate(formDataObj);
  };

  return (
    <div className="absolute w-full h-full flex justify-center items-center">
      <form onSubmit={handleSubmit(onSubmit)} className="w-[500px] h-auto bg-slate-100 rounded-xl p-4">
        <h1 className="text-4xl mt-4 mb-4 font-bold text-center text-violet-500 bg-Primary-Text">Ajouter une chambre</h1>
        {errorServer && (
            <div className="w-full flex justify-center">
              <span className="text-red-500 text-sm bg-red-500 bg-opacity-15 px-8 py-1 ">  {errorServer} </span>
            </div>
          )}

        <div className="mb-2">
          <label htmlFor="nbPlace" className="font-bold">Name of roms</label>
          <input
            {...register("name", { required: "Ce champ est requis" })}
            placeholder="Entrez le nom de chambre"
            type="text"
            className="w-full border-b-4 py-2 pl-2 border-fuchsia-500 focus:outline-none focus:border-l-4 rounded-lg"
            id="nbPlace"
          />
          {errors.name && (<p className="text-red-500 text-xs">🔺 {errors.name.message}</p>)}
        </div>

        <div className="mb-2">
          <label htmlFor="email" className="font-bold">Classes </label>
          <select
            className="w-full h-11 pl-2 border-b-4 border-fuchsia-500 focus:border-l-4 rounded-lg"
            {...register("class", { required: "Ce champ est requis" })}
          >
          
          {
            dataClass?.classes.map( (item : ClassType ) => <option value={`${item.class}`} > {item.class} </option> )
          }

          </select>
          {errors.class && (<p className="text-red-500 text-xs">🔺 {errors.class.message}</p>)}
        </div>

        <div className="mb-2">
          <label htmlFor="prix" className="font-bold">Price</label>
          <input
            {...register("price", { required: "Ce champ est requis", valueAsNumber: true })}
            placeholder="Entrez le prix d'une chambre par nuit"
            type="text"
            className="w-full border-b-4 py-2 pl-2 border-fuchsia-500 focus:outline-none focus:border-l-4 rounded-lg"
            id="prix"
          />
          {errors.price && (<p className="text-red-500 text-xs">🔺 {errors.price.message}</p>)}
        </div>

        <div className="mb-2">
          <label htmlFor="MDP" className="font-bold">Sélect an Image</label>
          <input
            {...register("image_url", { required: "Ce champ est requis" })}
            type="file"
            className="h-11 w-full rounded-lg cursor-pointer bg-white text-gray-800 py-2"
          />
          {errors.image_url && (<p className="text-red-500 text-xs">🔺 {errors.image_url?.message}</p>)}
        </div>

        <div className="text-center mt-4">
          <input
            type="submit"
            className="border-b-4 border-black rounded-xl text-white font-bold px-8 py-2 bg-Primary"
          />
        </div>
      </form>
    </div>
  );
}
