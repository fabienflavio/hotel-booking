import {  useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { useContext, useState } from "react";
import Footer from "../../../Components/footer/Footer";
import { DataContext } from "../../../context/DataContext";
import HeaderClient from "../../../Components/header/HeaderClient";
import CardImage from "../../../Components/Card/CardImage";
import { addReservation} from "../../../Components/fetchData/Reservation";
import { fetchOneId } from "../../../API/Roms";
import "react-datepicker/dist/react-datepicker.css";
import Payement from "./Payement";
import InputDateField from "../../../Components/Ui/Input/inputDateField";
import { zodResolver } from "@hookform/resolvers/zod";
import { BookType, bookSchema } from "../../../Validation/Book";
import { RoomsOneType } from "../../../Components/typescript/RoomsOneType";
import HeaderMenu from "../../../Components/header/HeaderMenu";
import ImgBook from "../../../assets/images/dining-room.jpg";


export default function Reservations() {
  const  [pay , setPay] = useState(false)
  const { token  } = useContext(DataContext);
  const { id } = useParams();
  const idParse = parseInt(id!)
  const { data : dataChambre } = useQuery<RoomsOneType, Error>(['chambreId', idParse], () => fetchOneId(idParse));
  const [idReserv,setIdReserv] = useState()
  const { register, formState: { errors }, handleSubmit, control } = useForm<BookType>({
    resolver : zodResolver(bookSchema),
    shouldFocusError: false 
  });
  const queryClient = useQueryClient();
  const  [newName , setNewName] = useState("")
  const  [totalAmount , setTotalAmount] = useState(0)
  const [errorServer,setErrorServer] = useState();

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
    onError: (value : any) => {
      console.log(value)
      setErrorServer(value?.response.data.message)
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
    console.log(formData,'form DATA');
    
    formData.room_id = idParse;
    formData.start_date = changeDate( new Date(formData.start_date) )
    formData.end_date = changeDate( new Date(formData.end_date))
    mutation.mutate(formData);
  };

  return (
    <div>
      <HeaderClient />
      <HeaderMenu Header="Booking" Image={ImgBook} Menu="book" />
      <div className="mt-10 w-full flex flex-col justify-center items-center">
        {errorServer && <p className="translate-y-12 text-red-600 bg-red-500 bg-opacity-20 text-center font-bold text-xl p-4"> {errorServer} </p>} 
        <div className="flex gap-5 justify-center items-center rounded-xl min-w-[1200px] mt-32">
          
          <div className="w-full gap-4 flex flex-row justify-between items-start border-[1px] border-gray-200 h-80 rounded-2xl p-8 relative">
            <div className="absolute -translate-y-20">
              <CardImage img={dataChambre?.room.image} className={"w-40 h-40"} />
            </div>
            <div className="absolute right-4 top-0">
              <h1 className="text-[100px] text-gray-200 font-black "> {dataChambre?.room.name} </h1>
            </div>
            <div className="mt-28 w-full">
              <div className="flex justify-between w-full">
                <h2 className="uppercase">Rooms {dataChambre?.room.name}</h2>
                <h1 className="font-light">{dataChambre?.room.class}</h1>
              </div>
              <div className="flex justify-between w-full mt-4">
                <p className="text-sm max-w-96 text-gray-500">Sweep your loved one off their feet with a romantic retreat by the sea. Relax in a beautifully appointed oceanview suite, where champagne and chocolate.
                </p>
                <p className="text-xl font-bold">{dataChambre?.room.price}$</p>
              </div>
            </div>
          </div> 
          <form onSubmit={handleSubmit(onSubmit)} className=" flex justify-start">
            <div>
              <InputDateField  control={control} errors={errors.start_date?.message} label="Start date" nameData="start_date"/>
              <InputDateField  control={control}  errors={errors.end_date?.message} label="End date" nameData="end_date"/>
    
              <div className="mb-2">
                <label htmlFor="number_of_people" className="font-bold">Number of people</label>
                <input
                  {...register("number_of_people", { required: "Ce champ est requis", valueAsNumber: true })}
                  placeholder="Entrez le prix d'une chambre par nuit"
                  type="text"
                  className="w-full border-b-4 py-2 pl-2 border-black placeholder:text-gray-600 bg-gray-200 focus:outline-none  focus:border-l-4 rounded-lg"
                  id="number_of_people"
                />
                {errors.number_of_people && (<p className="text-red-500 text-xs">🔺 {errors.number_of_people.message}</p>)}
              </div>          
              <div className="text-center mt-4 flex flex-row justify-between">
                <input type="submit"   className="cursor-pointer hover:bg-gray-800 rounded-xl text-white font-bold px-8 py-2 bg-black" />
              </div>
            </div>
              
            </form>
        </div>
       
      </div>
      <Footer />
      { pay &&  <Payement  setPay={setPay}  nom={newName} id={idReserv!} totalAmount={totalAmount} /> } 
    </div>
  );
}