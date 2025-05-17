import { useContext, useState } from 'react'
import Header from '../Header/Header'
import { useQuery } from 'react-query'
import { getCommentaire } from '../../../Components/fetchData/Commentaire'
import { DataContext } from '../../../context/DataContext'
import { Commentaire } from '../../../Components/typescript/Commentaire'
import { IoMenuSharp } from 'react-icons/io5'
import { VscChromeClose } from 'react-icons/vsc'

type Props = {}

export default function AdminCommentaire({}: Props) {
  const {token} = useContext(DataContext)
  const {data , isLoading , isError} = useQuery<Commentaire[]>("commentaire" ,() => getCommentaire(token!)  )
  const [menu, setMenu] = useState<boolean>(false);

  if(isLoading) return <div>...Loading</div>
  if(isError) return <div>Error</div>
  
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
            </div>        <div className='w-full'>        
          <h1 className='bg-Primary-Text text-center text-4xl font-bold w-full mt-8'> Les Commentaires </h1>
           {data?.map((comment) => {

              return(
                <div className='w-full bg-gray-200 rounded-lg m-2 p-4 flex justify-between '>
                    <div>
                      <h1 className='font-bold text-lg text-black'> {comment.motif} </h1>
                      <p className='text-gray-500'> {comment.message} </p>
                    </div>
                    <div>
                      <h1>  </h1>
                    </div>
                  
                </div>
              )
           } ) }
        </div>
    </div>
  )
}