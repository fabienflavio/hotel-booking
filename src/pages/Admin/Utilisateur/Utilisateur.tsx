import  { useContext, useState } from 'react'
import Header from '../Header/Header'
import { IoMenuSharp } from 'react-icons/io5'
import { VscChromeClose } from 'react-icons/vsc'
import {  useMutation, useQuery, useQueryClient } from 'react-query'
import { EditUser, fetchUser } from '../../../Components/fetchData/Users'
import { DataContext } from '../../../context/DataContext'
import { User } from '../../../Components/typescript/User'

type Props = {}
type UserMutate = {
    newUser : User,
    id : number
}

export default function AdminUtilisateur({}: Props) {
    const [menu, setMenu] = useState<boolean>(false);
    const {token} = useContext(DataContext)
    const {data,isLoading , isError} = useQuery<User[]>("users" , () => fetchUser(token!)  )
    const queryClient = useQueryClient()
    const mutation = useMutation(
        ({newUser,id} : UserMutate ) => EditUser(newUser,id,token!),{
            onSuccess(){
                queryClient.invalidateQueries("users")
            },
            onError(){

            }
        }
    )

    const HandleRole = (id : number,role ?: string) => {
        const UsersFind = data?.find((u : User) => u.id === id )
        const NewUser = { ...UsersFind , role : role}
        mutation.mutate({newUser :NewUser ,id : id})
    }

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error</div>;

    return (
    <div className='flex flex-row'>
            <div className="w-[300px] max-[1500px]:hidden">
                <Header />
            </div>
            <div className="max-[1500px]:block  hidden ">
                <div className=" absolute z-50 max-[1500px]:mt-2">   
                    <IoMenuSharp style={{color : "white" }} onClick={() => setMenu(true)} size={40}  className={`cursor-pointer border-4 border-purple-500 bg-purple-500 ${menu ? "hidden" : "" }`}/>{/*  */}  
                    <VscChromeClose style={{color : "white"}} onClick={() => setMenu(false)} size={40} className={`cursor-pointer border-4 border-white   ${menu ? "" : "hidden" }`}/> {/**/} 
                </div>
               <div className={`absolute  z-10 ${menu ? "opacity-100 duration-200" : "opacity-0 duration-200"}`}>
                    <Header  />
                </div>
            </div>
            <div className='w-full'>
                <h1 className="bg-Primary-Text  text-4xl font-bold text-center w-full mt-8">Liste des Utilisateurs</h1>
                <div className='p-8'> 
                {
                    data?.filter((u) =>  u.email !== "arolivier5@gmail.com" ).map((user) => {
                        return (
                            <div className='w-full bg-gray-200 rounded-lg shadow-xl p-2 flex flex-row justify-between mt-4'>
                                <div className='w-full'>
                                    <h1 className='font-bold '> {user.username} </h1>
                                    <p className='text-gray-500'> {user.email} </p>
                                </div>
                                <h1 className='bg-Primary-Text w-full text-center text-xl'> {user.role} </h1>
                                <div className='w-full text-end'>
                                    <h1>Changer le role</h1>
                                    {
                                        user.role === "User" ? <button onClick={ () => HandleRole(user.id!,"Admin") } className='px-4 py-2 bg-white shadow-lg  rounded-xl hover:scale-105 '><span className='bg-Primary-Text'>Admin</span> </button> : <button 
                                        onClick={ () => HandleRole(user.id!,"User") } 
                                        className='px-4 py-2 bg-white shadow-lg  rounded-xl hover:scale-105 '><span 
                                        className='bg-Primary-Text'> User </span></button>
                                    }
                                </div>
                            </div>
                        )
                    } )
                }
                </div>
                
            </div>
    </div>
  )
}