import  ImgBglogin from "../../assets/images/bedroom-1.jpg";
import { SiComma } from "react-icons/si";

type Props = {}

export default function LoadForgetPassword({}: Props) {
  return (
    <div className="w-full h-screen flex justify-center items-center text-white">
      <img src={ImgBglogin} alt="rooms" className="absolute  h-screen object-cover w-full -z-10 " />
      <div className="absolute bg-black bg-opacity-30 w-full h-screen -z-10">
      </div>
      <div className="flex justify-center items-center
        lg:justify-end
        ">
        <form className="backdrop-blur-sm rounded-3xl p-4 border-2 
          lg:p-16">
          <h1 className="text-4xl font-bold">Confirmation reset password</h1>
          <div className="w-full relative mt-4">
            <div className="flex justify-end items-start  w-full">
              <SiComma size={30} className="absolute" />
            </div>
            <p className="mt-4 text-end pr-8">You will receive a confirmation email to reset your password</p>
            <p className="font-light text-gray-300 mt-4 text-end pr-8">Please check your inbox</p>
          </div>
        </form>
      </div>
    </div>  
    )
}