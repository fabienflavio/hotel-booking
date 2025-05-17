import {  useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { useContext, useState } from "react";
import Footer from "../../../Components/footer/Footer";
import { DataContext } from "../../../context/DataContext";
import HeaderClient from "../../../Components/header/HeaderClient";
import CardOnlyChambreSmall from "../../../Components/Card/CardOnlyChambreSmall";
import CardImage from "../../../Components/Card/CardImage";
import { addReservation} from "../../../Components/fetchData/Reservation";
import { fetchOneId } from "../../../API/Roms";
import "react-datepicker/dist/react-datepicker.css";
import Payement from "./Payement";
import InputDateField from "../../../Components/Ui/Input/inputDateField";
import { zodResolver } from "@hookform/resolvers/zod";
import { BookType, bookSchema } from "../../../Validation/Book";
import { RoomsOneType } from "../../../Components/typescript/RoomsOneType";

export default function Reservations() {
  const  [pay , setPay] = useState(false)
  const { token  } = useContext(DataContext);
  const { id } = useParams();
  const idParse = parseInt(id!)
  const { data : dataChambre } = useQuery<RoomsOneType, Error>(['chambreId', idParse], () => fetchOneId(idParse));
  const [idReserv,setIdReserv] = useState()
  const { register, formState: { errors }, handleSubmit, control } = useForm<BookType>({
    resolver : zodResolver(bookSchema)
  });
  const queryClient = useQueryClient();
  const  [newName , setNewName] = useState("")
  const  [totalAmount , setTotalAmount] = useState(0)

  const mutation = useMutation(
    (formData: BookType) => addReservation( token!,formData), {
    onSuccess: (value) => {
      console.log(value);
      
      queryClient.invalidateQueries('reservation');
      setNewName(value.book.user.name)
      setIdReserv(value.book.id)
      setTotalAmount(value.book.total)
      setPay(true)
    },
    onError: (value) => {
      console.log(value);

    }
  });
 

  function changeDate(date : Date ) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const day = String(date.getDate()).padStart(2, '0');

    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate
  }


  const onSubmit = async (formData: BookType) => {
    formData.room_id = idParse;
    formData.start_date = changeDate( new Date(formData.start_date) )
    formData.end_date = changeDate( new Date(formData.end_date))

    mutation.mutate(formData);
  };

  return (
    <div>

      <HeaderClient />
      <div className="mt-10 w-full flex justify-center items-center">
        <form onSubmit={handleSubmit(onSubmit)} className="w-[600px] pb-8 bg-slate-100 rounded-xl p-4 max-[600px]:h-[900px]">
          <h1 className="text-5xl mt-4 mb-4 font-bold text-center bg-white p-4">Réserver</h1>
          <div className="gap-4 flex flex-row justify-between max-[600px]:flex-col mb-4">
            <CardImage img={dataChambre?.room.image} className={"h-60"} />
            <CardOnlyChambreSmall Name={dataChambre?.room.name} type={dataChambre?.room.class} prix={dataChambre?.room.price} id={dataChambre?.room.id}/>
          </div>     
          <InputDateField  control={control} errors={errors.start_date?.message} label="Date d'entrer" nameData="start_date"/>
          <InputDateField  control={control}  errors={errors.end_date?.message} label="Date de sortie" nameData="end_date"/>

          <div className="mb-2">
          <label htmlFor="number_of_people" className="font-bold">Number of people</label>
          <input
            {...register("number_of_people", { required: "Ce champ est requis", valueAsNumber: true })}
            placeholder="Entrez le prix d'une chambre par nuit"
            type="text"
            className="w-full border-b-4 py-2 pl-2 border-fuchsia-500 focus:outline-none focus:border-l-4 rounded-lg"
            id="number_of_people"
          />
          {errors.number_of_people && (<p className="text-red-500 text-xs">🔺 {errors.number_of_people.message}</p>)}
        </div>          <div className="text-center mt-4 flex flex-row justify-between">
            <input type="submit"   className="rounded-xl text-white font-bold px-8 py-2 bg-black" />
          </div>
        </form>
      </div>
      <Footer />
      { pay &&  <Payement  setPay={setPay}  nom={newName} id={idReserv!} totalAmount={totalAmount} /> } 
    </div>
  );
}