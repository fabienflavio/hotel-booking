import { GoogleLogin } from '@react-oauth/google';
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient} from "react-query";
import {AxiosError} from "axios";
import { useContext, useState } from "react";
import { DataContext } from "../../context/DataContext";
import ErrorServer from "../../Components/Ui/ErrorServer";
import InputText from "../../Components/Ui/Input/InputText";
import InputSubmit from "../../Components/Ui/Input/InputSubmit";
import { User, loginSchema } from "../../Validation/Auth";
import { loginAuth, loginAuthGoogle } from "../../API/Auth";
import  ImgBglogin from "../../assets/images/bedroom.jpg";
import {  BsGoogle } from "react-icons/bs";
import DontHaveAccount from "../../Components/Ui/Text/DontHaveAccount";
import { zodResolver } from '@hookform/resolvers/zod';

type Testa = {
  message : string
}

export default function Login() {
  const { register, formState: { errors }, handleSubmit } = useForm<User>(
    {resolver : zodResolver(loginSchema)}
  );

  const navigate = useNavigate();
  const {setRole, setToken,setUser} = useContext(DataContext);
  const [loaderSubmit ,setLoaderSubmit] = useState(false);
  const [errorServer, setErrorServer] = useState("");
  const queryClient = useQueryClient();

  const mutation = useMutation( 
    (newUser : User)  =>  loginAuth(newUser!) , {
    onSuccess: (value) => {
      setLoaderSubmit(false)
      console.log(value);
      queryClient.invalidateQueries('users');
      setUser(value.user.id)
      setRole(value.user.role)
      setToken(value.token)
      value.user.role === "admin" ? navigate("/Admin") : navigate("/")
    },
    onError: (error : AxiosError<Testa>) => {
      setLoaderSubmit(false)
      if (error.response && error.response.data) {
        setErrorServer(error.response.data.message);
      } else {
        setErrorServer("An unexpected error occurred");
      }
    }
  });

  const mutationGoogle = useMutation( 
    (newUser : any)  =>  loginAuthGoogle(newUser!) , {
      onSuccess: (value) => {
        queryClient.invalidateQueries('users');
        setLoaderSubmit(false)
        setUser(value.user.id)
        setRole(value.user.role)
        setToken(value.token)
      value.user.role === "admin" ? navigate("/Admin") : navigate("/add-phone")
    },
    onError: (error : AxiosError<Testa>) => {
      setLoaderSubmit(false)
      if (error.response && error.response.data) {
        setErrorServer(error.response.data.message);
      } else {
        setErrorServer("An unexpected error occurred");
      }
    }
  });
  
  const onSubmit = async (formData: User) => {
    setLoaderSubmit(true)
    mutation.mutate(formData);
  } 
  
  const handleSuccess = async (credentialResponse: any) => 
    mutationGoogle.mutate({
      googleToken : credentialResponse.credential
    })

  return (
      <div className="w-full h-screen flex justify-center items-center text-white">
        <img src={ImgBglogin} alt="rooms" className="absolute  h-screen object-cover w-full -z-10 " />
        <div className="absolute bg-black bg-opacity-60 w-full h-screen -z-10"></div>
        <div className="flex justify-center items-center
          lg:justify-end
          ">
          <form onSubmit={handleSubmit(onSubmit)} className="backdrop-blur-sm rounded-3xl p-4 border-2 
            lg:p-16">
            <h1 className="text-3xl my-4  font-bold text-center">Login</h1>
            <DontHaveAccount/>
            <div className=" mt-4 relative">
              <button type="button" className="block w-full py-1 px-4 rounded-md bg-white text-black hover:bg-gray-200 "> <BsGoogle  className="inline-block mx-1 "  size={30}/> Continue with Google </button>
                <div className="absolute inset-0 opacity-0 z-10 pointer-events-auto">
                  <GoogleLogin
                    onSuccess={handleSuccess}
                    onError={() => setErrorServer("Erreur de connexion Google")}
                    theme="filled_black"
                    text="continue_with"
                    shape="pill"
                  />
                </div>
            </div>
            <div className=" my-8 border-[1px] border-white w-full h-[1px] p-0"> <span className="absolute left-[50%] -translate-x-5 -translate-y-4 px-4 py-1 bg-white text-black">Or</span> </div>
            <p className="text-sm font-light mt-4 text-center">Sign up with your email address</p>
            {errorServer && ( <ErrorServer errorServer={errorServer} /> )}
            <InputText label="Email" register={register("email")} Err={errors.email?.message}/>
            <Link to={"/forget-password"} className="absolute right-0 mr-4 lg:mr-16 text-sm underline cursor-pointer text-gray-200  hover:text-gray-300 z-20">Forgot Password</Link>
            <InputText show={true} label="Mot de passe" register={register("password")} Err={errors.password?.message}/>
            <InputSubmit label="login" loader={loaderSubmit} />
          </form>
        </div>
      </div>
  );
}
