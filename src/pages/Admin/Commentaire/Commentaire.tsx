import { useState } from 'react'
import { useQuery } from 'react-query'
import { getCommentaire } from '../../../Components/fetchData/Commentaire'
import { CommentaireAllType } from '../../../Components/typescript/CommentaireAllType'
import MenuAdmin from '../../../Components/menuAdmin/MenuAdmin'
import MenuAdminTitle from '../../../Components/menuAdmin/MenuAdminTitle'

type Props = {}

export default function AdminCommentaire({}: Props) {
  const {data , isLoading , isError} = useQuery<CommentaireAllType>("commentaire" ,() => getCommentaire()  )
  const [menu, setMenu] = useState<boolean>(false);  

  if(isLoading) return <div>...Loading</div>
  if(isError) return <div>Error</div>
  
  return (
    <div className='flex flex-row p-8 bg-slate-200 gap-8'>
            <MenuAdmin menu={menu} setMenu={setMenu} />
               
            <div className='w-full'>      
            <MenuAdminTitle menu='Contact' />  
            {data?.contacts.map((c) => {
                return(
                <div className='w-full bg-slate-100 rounded-lg m-2 p-4 flex justify-between mt-8'>
                    <div>
                      <h1 className='font-bold text-lg text-black'> {c.name} </h1>
                      <p className='text-gray-500'> {c.objet} </p>
                    </div>           
                </div>
              )
           } ) }
        </div>
    </div>
  )
}