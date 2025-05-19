import { useForm } from "react-hook-form"
import InputText from "../../../Components/Ui/Input/InputText"
import InputTextarea from "../../../Components/Ui/Input/InputTextarea"
import Footer from "../../../Components/footer/Footer"
import HeaderClient from "../../../Components/header/HeaderClient"
import InputSubmit from "../../../Components/Ui/Input/InputSubmit"
import { Commentaire } from "../../../Components/typescript/Commentaire"
import { useMutation, useQueryClient } from "react-query"
import { AddCommentaire } from "../../../Components/fetchData/Commentaire"
import { useContext } from "react"
import { DataContext } from "../../../context/DataContext"
import { useNavigate } from "react-router-dom"
import HeaderMenu from "../../../Components/header/HeaderMenu"
import ImageContact from "../../../assets/images/bedroom-contact.jpg"
import TextStyleContect from "./TextStyleContect"
import { FaPhone } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { TbAddressBook } from "react-icons/tb"

export default function Contact() {
    const navigate = useNavigate()
    const {token,userId} = useContext(DataContext)
    const {register,handleSubmit,formState : {errors}} = useForm<Commentaire>()

    const QueryClient = useQueryClient()
    const mutation = useMutation(
        (newComment : Commentaire) => AddCommentaire(newComment,token!),
        {
            onSuccess(){
                QueryClient.invalidateQueries("commentaire")
                navigate("/")
            },
            onError(value){
                console.log(value)
            }
        }
    )

    const Submit = (data : Commentaire) => {
        const newObject = {...data , userId : userId}
        mutation.mutate(newObject)
    } 
  return (
    <div>
        <HeaderClient />
        <HeaderMenu Header="Contact Us" Image={ImageContact} Menu="Contact" />

        <div className="max-w-[1200px] gap-5 m-auto flex mt-32">
            <div className="w-[500px] ">
                <h1 className="text-3xl font-black">Get in touch</h1>
                <div>
                    <p className="text-gray-500 mt-4 mb-8">
                        Need a consultation for your room?
                    </p>
                    <TextStyleContect icons={<FaPhone/>} h2=" Emergency Help" h3="+1 386-688-3295" />
                    <TextStyleContect icons={<MdEmail/>} h2="Quick Email" h3="contact@seahotel.com" />
                    <TextStyleContect icons={<TbAddressBook/>} h2="Office Address" h3="GXF4+8HQ Chippenham United Kingdom" />                    
                </div>
            </div>
            <div className="w-full">
                <h1 className="text-3xl font-black">Send Message</h1>
                <form onSubmit={handleSubmit(Submit)} className="">
                    <div className="relative max-h-[350px] w-full mt-4">
                        <img className="rounded-3xl h-[350px] w-full object-cover" src={ImageContact} alt="" />
                        <div className="top-0 left-0 absolute bg-black bg-opacity-40 backdrop-blur-sm w-full h-full rounded-3xl z-10 p-8">
                            <InputText label="Motif" register={register("motif")} Err={errors.motif?.message}/>
                            <InputTextarea label="Votre message" register={register("message")}  Err={errors.message?.message}/>
                            <InputSubmit label="Send " />
                        </div>
                    </div>
                    
                </form>
            </div>
            
        </div>
        <Footer />
    </div>
  )
}