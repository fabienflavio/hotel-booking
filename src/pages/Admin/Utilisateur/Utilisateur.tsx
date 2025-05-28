import  { useContext, useState } from 'react'
import {  useMutation, useQuery, useQueryClient } from 'react-query'
import { DataContext } from '../../../context/DataContext'
import { EditUser, getAllUsers } from '../../../API/User'
import { User } from '../../../Validation/Auth'
import { UsersType } from '../../../Components/typescript/UsersType'
import MenuAdmin from '../../../Components/menuAdmin/MenuAdmin'
import MenuAdminTitle from '../../../Components/menuAdmin/MenuAdminTitle'

type Props = {}
type UserMutate = {
    newUser : User,
    id : number
}

export default function AdminUtilisateur({}: Props) {
    const [menu, setMenu] = useState(false);
    const {token} = useContext(DataContext)    
    console.log(token , "token user")

    const {data,isLoading , isError} = useQuery<UsersType>("users" , () => getAllUsers(token!)  )
    const queryClient = useQueryClient()
    const mutation = useMutation(
        ({newUser,id} : UserMutate ) => EditUser(newUser,id,token!),{
            onSuccess(value){
                queryClient.invalidateQueries("users")
                console.log(value)
            },
            onError(error){
                console.log(error);
                
            }
        }
    )    

    const HandleRole = (id : number,role ?: string) => {
        const UsersFind = data?.users.find((u) => u.id === id )
        if(UsersFind) {
            const NewUser = { ...UsersFind , role : role}
            mutation.mutate({newUser :NewUser ,id : id})
        }
    }
    

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error</div>;

    return (
    <div className='flex flex-row p-8 bg-slate-200 gap-8'>
            <MenuAdmin setMenu={setMenu} menu={menu}  />

            <div className='w-full'>
            <MenuAdminTitle menu='Setting' />
                <div className='mt-8'> 
                {
                    data?.users.map((user) => {
                        return (
                            <div className='w-full bg-white rounded-lg shadow-xl p-2 flex flex-row justify-between mt-4'>
                                <div className='w-full'>
                                    <h1 className='font-bold '> {user.name} </h1>
                                    <p className='text-gray-500'> {user.email} </p>
                                </div>
                                <h1 className='bg-Primary-Text w-full text-center text-xl'> {user.role} </h1>
                                <div className='w-full text-end'>
                                    <h1>Changer le role</h1>
                                    {
                                        user.role === "default" ? <button onClick={ () => HandleRole(user.id!,"admin") } className='px-4 py-2 bg-white shadow-lg  rounded-xl hover:scale-105 '><span className='bg-Primary-Text'>Admin</span> </button> : <button 
                                        onClick={ () => HandleRole(user.id!,"default") } 
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