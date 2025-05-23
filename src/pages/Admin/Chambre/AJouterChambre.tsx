import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useContext, useState } from "react";
import { DataContext } from "../../../context/DataContext";
import { fetchClass } from "../../../API/Class";
import { addRoms } from "../../../API/Roms";
import { zodResolver } from "@hookform/resolvers/zod";
import { RoomsType, roomsSchema } from "../../../Validation/Rooms";
import { ClassType } from "../../../Components/typescript/ClassType";
import MenuAdmin from "../../../Components/menuAdmin/MenuAdmin";
import { IoHome } from "react-icons/io5";
import { MdArrowForwardIos } from "react-icons/md";
type Props = {};

export default function AdminAjouterChambre({}: Props) {
  const [menu, setMenu] = useState(false);
  const { token } = useContext(DataContext);
  const {data} = useQuery(  [,token] , () => fetchClass (token!));   
  
  const { register, handleSubmit, formState: { errors } } = useForm<RoomsType>({
    resolver : zodResolver(roomsSchema)
  });
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [errorServer, setErrorServer] = useState<string>("");
  const mutation = useMutation(
    (formData: FormData) => addRoms(formData, token!), 
    {
      onSuccess: () => {
        queryClient.invalidateQueries('rooms');
        navigate("/AdminChambre");
      },
      onError: (error: any) => {
        if (error.response && error.response.data) {
          setErrorServer(error.response.data.message);
        } else {
          setErrorServer("An unexpected error occurred");
        }
      }
    }
  );

  const onSubmit = (formData: RoomsType) => {
    const formDataObj = new FormData();
    
    formDataObj.append('name', formData.name);
    formDataObj.append('class', formData.class);
    formDataObj.append('price', formData.price.toString());

    if (formData.image_url) {
      formDataObj.append('image_url', formData.image_url[0]);
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
            <h1 className="text-4xl mt-4 mb-4 font-bold text-center text-black ">Add rooms</h1>
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
                data?.classes.map( (item : ClassType ) => <option value={`${item.class}`} > {item.class} </option> )
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
              {typeof errors.image_url?.message === 'string' && (
                <p className="text-red-500 text-xs">🔺 {errors.image_url.message}</p>
              )}
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
