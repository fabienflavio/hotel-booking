import { useContext, useState } from 'react'
import InputText from '../../Components/Ui/Input/InputText'
import { User, resetPasswordSchema } from '../../Validation/Auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import InputSubmit from '../../Components/Ui/Input/InputSubmit';
import { useMutation, useQueryClient } from 'react-query';
import { resetPasswordAuth } from '../../API/Auth';
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../../context/DataContext';
import  ImgBglogin from "../../assets/images/bedroom-2.jpg";
import { ResetPasswordType } from '../../Components/typescript/Auth';


export default function ResetPassword() {
  const { register,formState : {errors },handleSubmit } = useForm<User>(
    {resolver : zodResolver(resetPasswordSchema)}
  );

  const navigate = useNavigate()
  const { tokenVerified , userEmail  }  = useContext(DataContext)

  const [errorServer ,setErrorServer] = useState();
  const [loaderSubmit ,setLoaderSubmit] = useState(false);

  const queryClient = useQueryClient();
  const mutation = useMutation( 
    (newUser : ResetPasswordType ) => resetPasswordAuth(newUser!), 
    {
       onSuccess: () => {
         queryClient.invalidateQueries('users');
         setLoaderSubmit(false)
         navigate("/login")
       },
       onError: (error : any) => {
         setLoaderSubmit(false)
         setErrorServer(error.response.data.message || "ERROR ")
       }
 });

  const onSubmit = (dataForm : User ) => {
    setLoaderSubmit(true)
    mutation.mutate( {...dataForm , email : userEmail! , token : tokenVerified! }  )
  }

  return (
    <div className="w-full h-screen flex justify-center items-center text-white">
      <img src={ImgBglogin} alt="rooms" className="absolute  h-screen object-cover w-full -z-10 " />
      <div className="absolute bg-black bg-opacity-60 w-full h-screen -z-10">
      </div>
      <form onSubmit={ handleSubmit(onSubmit)} className='backdrop-blur-sm rounded-3xl p-4 border-2
      lg:p-16' >
        <h1 className="text-3xl my-4  font-bold text-center">Reset Password</h1>
        {errorServer && <p className="text-center p-2 bg-red-500 bg-opacity-30 text-red-500"> {errorServer} </p> }
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
          <InputSubmit label="send" loader={loaderSubmit} />
      </form>
    </div>
  )
}