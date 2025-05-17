import { Link, useNavigate } from "react-router-dom";
import {useForm} from "react-hook-form"
import { useMutation, useQueryClient} from "react-query";
import InputText from "../../Components/Ui/Input/InputText";
import InputSubmit from "../../Components/Ui/Input/InputSubmit";
import { useState } from "react";
import { User, registerSchema } from "../../Validation/Auth";
import { registerAuth } from "../../API/Auth";
import  ImgBgRegister from "../../assets/images/black-white-bedroom.jpg";
import { zodResolver } from '@hookform/resolvers/zod'


export default function Register() {
  const { register,formState : {errors },handleSubmit } = useForm<User>(
    {resolver : zodResolver(registerSchema)}
  );

  const [errorServer ,setErrorServer] = useState();
  const [loaderSubmit ,setLoaderSubmit] = useState(false);
  const navigate = useNavigate() ;
  const queryClient = useQueryClient();

  const mutation = useMutation( 
     (newUser : User) => registerAuth(newUser!), 
     {
        onSuccess: () => {
          queryClient.invalidateQueries('users');
          setLoaderSubmit(false)
          navigate("/login")
        },
        onError: (error : any  ) => {
          setLoaderSubmit(false)
          setErrorServer(error?.response?.data.message || "ERROR ")
        }
  });

  

  const onSubmit = (formData: User) => {
    setLoaderSubmit(true)
    const newUser = { ...formData,role:"Default"};
    mutation.mutate(newUser);
  };

  return (
      <div className="w-full h-screen flex justify-center items-center">
        <img src={ImgBgRegister} alt="rooms" className="absolute  h-screen object-cover w-full -z-10 " />
        <div className="absolute bg-black bg-opacity-50 w-full h-screen -z-10">
        </div>
        <form 
          onSubmit={handleSubmit(onSubmit)} 
          className="backdrop-blur-sm rounded-3xl p-4 border-2 
            lg:p-16
          ">
          <h1 className="my-4 text-center font-bold text-3xl text-white">Create an account</h1>
          <p className="my-4 text-center text-sm text-gray-200 ">Already have an account? <Link className="font-bold" to={"/login"}>Login</Link> </p>
          {errorServer && <p className="text-center p-2 bg-red-500 bg-opacity-30 text-red-500"> {errorServer} </p> }
          <div className="sm:flex gap-10 w-full">
            <InputText 
              label="Name" 
              register={register("name")} 
              Err={errors.name?.message}/>
            <InputText 
              label="Phone" 
              register={register("phone")} 
              Err={errors.phone?.message}/>
          </div>
          <InputText 
            label="Email" 
            register={register("email")} 
            Err={errors.email?.message}/>
          <div className="sm:flex gap-10  w-full">
            <InputText 
              show={true} 
              label="Password" 
              register={register("password")} 
              Err={errors.password?.message}/>
            <InputText 
              show={true} 
              label="Confirm password" 
              register={register("password_confirmation")} 
              Err={errors.password_confirmation?.message}/>
          </div>
          <InputSubmit label="register" loader={loaderSubmit} />
        </form>
      </div>
  )
}