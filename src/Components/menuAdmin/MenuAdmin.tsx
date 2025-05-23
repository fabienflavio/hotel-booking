import Header from '../../pages/Admin/Header/Header'
import { IoMenuSharp } from 'react-icons/io5'
import { VscChromeClose } from 'react-icons/vsc'

type Props = {
    setMenu : (menu : boolean) => void
    menu : boolean
}

export default function MenuAdmin({setMenu,menu}: Props) {
  return (
    <div className='sticky top-0'>
        <div className="w-[300px] lg:block  hidden ">
            <Header  />
        </div>
        <div className=" lg:hidden ">
                <div className=" absolute z-50 max-[1500px]:mt-2">   
                    <IoMenuSharp style={{color : "white" }} onClick={() => setMenu(true)} size={40}  className={`cursor-pointer border-4 border-purple-500 bg-purple-500 ${menu ? "hidden" : "" }`}/>{/*  */}  
                    <VscChromeClose style={{color : "white"}} onClick={() => setMenu(false)} size={40} className={`cursor-pointer border-4 border-white   ${menu ? "" : "hidden" }`}/> {/**/} 
                </div>
               <div className={`absolute  z-10 ${menu ? "opacity-100 duration-200" : "opacity-0 duration-200"}`}>
                    <Header  />
                </div>
        </div>
    </div>
     )
}