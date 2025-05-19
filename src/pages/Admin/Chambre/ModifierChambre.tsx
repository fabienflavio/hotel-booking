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
import MenuAdmin from "../../../Components/menuAdmin/MenuAdmin";
import { IoHome } from "react-icons/io5";
import { MdArrowForwardIos } from "react-icons/md";

type Props = {}


export default function AdminModifierChambre({}: Props) {
  const [menu, setMenu] = useState(false);
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
    <div className="bg-slate-200 text-black p-8">
      <div className="flex flex-row justify-between">
        <MenuAdmin menu={menu}  setMenu={setMenu}/>
        <div className="w-full ml-8">
          <div className="w-full flex flex-row justify-between bg-white p-4 rounded-l-3xl">
            <div>
              <p> <IoHome className="inline-block text-[#00CCFF] mr-2 " size={30} /> Home <MdArrowForwardIos className="inline-block mx-1" /> Add-Room </p>
            </div>
            <p>Welcome Admin Fabien ,</p>
            <p>Welcome Admin Fabien ,</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-16 m-auto w-[600px] h-auto bg-white rounded-xl p-4">
            <h1 className="text-4xl mt-4 mb-4 font-bold text-center text-black ">Edit rooms</h1>
            {errorServer && (
                  <span className="text-red-500 text-sm bg-red-500 bg-opacity-15 px-8 py-1 ">  {errorServer} </span>
              )}

            <div className="mb-2">
              <label htmlFor="nbPlace" className="">Name of roms</label>
              <input
                {...register("name", { required: "Ce champ est requis" })}
                placeholder="Entrez le nom de chambre"
                type="text"
                className="w-full bg-gray-200 placeholder:text-black border-b-4 py-2 pl-2 border-black focus:outline-none focus:border-l-4 rounded-lg"
                id="nbPlace"
              />
              {errors.name && (<p className="text-red-500 text-xs">🔺 {errors.name.message}</p>)}
            </div>

            <div className="mb-2">
              <label htmlFor="email" className="">Classes </label>
              <select
                className="w-full bg-gray-200 placeholder:text-black h-11 pl-2 border-b-4 border-black focus:border-l-4 rounded-lg"
                {...register("class", { required: "Ce champ est requis" })}
              >
              
              {
                dataClass?.classes.map( (item : ClassType ) => <option value={`${item.class}`} > {item.class} </option> )
              }

              </select>
              {errors.class && (<p className="text-red-500 text-xs">🔺 {errors.class.message}</p>)}
            </div>

            <div className="mb-2">
              <label htmlFor="prix" className="">Price</label>
              <input
                {...register("price", { required: "Ce champ est requis", valueAsNumber: true })}
                placeholder="Entrez le prix d'une chambre par nuit"
                type="text"
                className="w-full bg-gray-200 placeholder:text-black border-b-4 py-2 pl-2 border-black focus:outline-none focus:border-l-4 rounded-lg"
                id="prix"
              />
              {errors.price && (<p className="text-red-500 text-xs">🔺 {errors.price.message}</p>)}
            </div>

            <div className="mb-2">
              <label htmlFor="MDP" className="">Sélect an Image</label>
              <input
                {...register("image_url", { required: "Ce champ est requis" })}
                type="file"
                className="h-11 w-full bg-gray-200 placeholder:text-black rounded-lg cursor-pointer text-gray-800 py-2"
              />
              {errors.image_url && (<p className="text-red-500 text-xs">🔺 {errors.image_url?.message}</p>)}
            </div>

            <div className="text-center mt-4">
              <input
              value={"Send"}
                type="submit"
                className="border-b-4 border-[1px] border-black rounded-xl text-black font-bold px-8 py-2"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
