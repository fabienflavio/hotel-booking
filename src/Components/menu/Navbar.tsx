import { IoLogInSharp, IoLogOutSharp, IoMenuSharp } from "react-icons/io5"
import Menu from "./Menu"
import { VscChromeClose } from "react-icons/vsc"
import { Link } from "react-router-dom"
import { RiLogoutCircleFill } from "react-icons/ri"

type Props = {
    menu :boolean
    setMenu : (menu : boolean) => void
    token ?: string
}

export default function Navbar({menu,setMenu,token}: Props) {
  return (
        <div className="relative rounded-xl duration-100 ">
          <div>
            <IoMenuSharp 
              onClick={() => setMenu(true)} 
              size={30}  
              className={`cursor-pointer text-white ${menu ? "hidden" : "" }`}/>
            <VscChromeClose 
              onClick={() => setMenu(false)} 
              size={30}  
              className={`cursor-pointer text-white ${menu ? "" : "hidden" }`}/>
          </div>
            <div className={`absolute w-40 right-0 py-4 px-4 bg-Primary-wh  ${menu ? "" : "hidden"}`}>
                <Menu />
                {
                  token ? 
                  <div className={`flex flex-col border-t-2 pr-8 ${menu} `} >
                    <Link 
                      className=" rounded-lg bg-white hover:bg-slate-200 " 
                      to={"/"} >
                        Deconnexion 
                        <RiLogoutCircleFill 
                          size={20}
                          className="inline-block"
                          />
                    </Link>
                  </div> : 
                  <div className= {`${menu} flex flex-col items-center border-t-2 py-2`}>
                    <Link 
                      className="rounded-lg my-2 py-1 px-2 bg-white hover:bg-slate-200 " 
                      to={"/login"}>
                        Login 
                        <IoLogInSharp 
                          className="inline-block"
                          size={20}/>
                    </Link>
                    <Link 
                      className="rounded-lg border-2 py-1 px-2 text-white border-white  hover:bg-black" 
                      to={"/register"}>
                        <IoLogOutSharp 
                          className="inline-block text-white" 
                          size={20}/>
                        Sign in  
                    </Link>
                  </div>
                }
            </div>
          </div> 
  )
}