import { useContext, useState } from 'react'
import InputText from '../../Components/Ui/Input/InputText'
import InputSubmit from '../../Components/Ui/Input/InputSubmit'
import { useForm } from 'react-hook-form'
import { User, forgetPasswordSchema } from '../../Validation/Auth'
import { useMutation, useQueryClient } from 'react-query'
import { ForgotPasswordAuth } from '../../API/Auth'
import ErrorServer from '../../Components/Ui/ErrorServer'
import { IoReturnUpBack } from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom'
import { DataContext } from '../../context/DataContext'
import  ImgBglogin from "../../assets/images/isolated.jpg";
import { zodResolver } from '@hookform/resolvers/zod'

type Props = {}

export default function ForgetPassword({}: Props) {
  const { register, formState: { errors }, handleSubmit } = useForm<User>(
    {resolver : zodResolver(forgetPasswordSchema)}
  );
  const [errorServer ,setErrorServer] = useState();
  const [loaderSubmit ,setLoaderSubmit] = useState(false);
  const navigate = useNavigate();
  const {setTokenVerified,setUserEmail} = useContext(DataContext);

  const queryClient = useQueryClient();
  const mutation = useMutation( 
    (newUser : User)  =>  ForgotPasswordAuth(newUser!) , {
    onSuccess: (value) => {   
      console.log(value); 
      setUserEmail(value.email);
      setTokenVerified(value.token)
      setLoaderSubmit(false)
      queryClient.invalidateQueries('users');
      navigate("/load-forget-password")
    },
    onError: (error : any) => {
      setLoaderSubmit(false)
      setErrorServer(error.response.data.message);
    }
  });
  
  
  const onSubmit = async (formData: User) => {
    setLoaderSubmit(true)
    mutation.mutate(formData);
  }
   
  return (
    <div className="w-full h-screen flex justify-center items-center text-white">
        <img src={ImgBglogin} alt="rooms" className="absolute  h-screen object-cover w-full -z-10 " />
        <div className="absolute bg-black bg-opacity-50 w-full h-screen -z-10">
        </div>
        <div className='flex justify-center w-full '>
          <form onSubmit={handleSubmit(onSubmit)} className="border-2 relative h-auto backdrop-blur-sm rounded-3xl p-4 lg:p-16">
            <h1 className="text-2xl my-4 font-bold ">Forget your password </h1>
            <p className='my-4'>Please enter your address email if your it exists </p>
            {errorServer && ( <ErrorServer errorServer={errorServer} /> )}
            <div className=' my-4'>
                <InputText label="Email" register={register("email")} Err={errors.email?.message}/>
            </div>
            <div className='text-start'>
                <InputSubmit label="send" loader={loaderSubmit} classCss='' />
              <Link to={"/login"} className=' underline text-white hover:text-gray-200 mt-4'> Back to Login <IoReturnUpBack className='inline-block' /> </Link>
            </div>
          </form>
          
        </div>
    </div>
  )
}