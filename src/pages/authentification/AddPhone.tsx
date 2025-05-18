import InputText from '../../Components/Ui/Input/InputText'
import { useForm } from 'react-hook-form'
import InputSubmit from '../../Components/Ui/Input/InputSubmit'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { zodResolver } from '@hookform/resolvers/zod'
import { addPhoneNumberSchema } from '../../Validation/Auth'
import { AddphoneNumberAuth } from '../../API/Auth'
import { useContext } from 'react'
import { DataContext } from '../../context/DataContext'
import { useNavigate } from 'react-router-dom'
import { addPhoneType } from '../../Components/typescript/AddphoneNumber'
import ImgBg from '../../assets/images/real-estate-.jpg'
import { getAllUsers } from '../../API/User'
import Loading from '../../Components/Loading/Loading'
import { UsersType } from '../../Components/typescript/UsersType'

type Props = {}

export default function AddPhone({}: Props) {
    const {register , handleSubmit , formState : {errors}} = useForm<addPhoneType>({
      resolver : zodResolver(addPhoneNumberSchema)
    })
    
    const navigate = useNavigate();
    const {userId,token} = useContext(DataContext);
    console.log(userId,token)

    const {data : dataUser , isLoading , isError } = useQuery<UsersType>( ["user" ,token] ,  () => getAllUsers(token!)  )
    const userUpdate = dataUser?.users.find((i)  =>  i.id === userId)

    const queryClient = useQueryClient();
    const mutation = useMutation(
      (dataForm : addPhoneType) =>  AddphoneNumberAuth(dataForm,userId!,token!),{
        onSuccess(){
          queryClient.invalidateQueries('user')
          navigate("/")
        },
        onError(value){
          console.log(value);
        }
      }
    ) 

    const onSubmit = (dataForm : addPhoneType) => {
      const users = {...userUpdate , phone : dataForm.phone }
      mutation.mutate(users)
    }

    if (isLoading) {return <Loading />}
    if (isError) { return <div>Error loading data</div>}
  return (
        <div className="p-4 w-full h-screen relative flex justify-center items-center text-white">
          <img src={ImgBg} alt="" className='w-full h-screen' />
          <div className="absolute bg-black bg-opacity-20 w-full h-screen "></div>
          <form onSubmit={handleSubmit(onSubmit)} className='w-[600px] absolute  p-16 backdrop-blur-sm bg-black bg-opacity-10 rounded-2xl'>
            <h1 className="text-3xl font-bold mb-4 text-center">Add your phone number </h1>
            <InputText label='Phone' register={register("phone")} Err={errors.root?.message} />
            <InputSubmit label='send' />
          </form>
        </div>
  )
}