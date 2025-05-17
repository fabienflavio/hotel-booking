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
        <div className="px-80">
            <h1 className="text-center bg-Primary-Text text-4xl font-black max-xl:text-2xl pt-10  max-[700px]:text-lg  max-[700px]:pt-5">Contacter nous</h1>
            <form onSubmit={handleSubmit(Submit)}>
                <InputText label="Motif" register={register("motif")} Err={errors.motif?.message}/>
                <InputTextarea label="Votre message" register={register("message")}  Err={errors.message?.message}/>
                <InputSubmit />
            </form>
        </div>
        <Footer />
    </div>
  )
}