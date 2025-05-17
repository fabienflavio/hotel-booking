import { IoLogInSharp, IoLogOutSharp } from "react-icons/io5"
import { RiLogoutCircleFill } from "react-icons/ri"
import { Link} from "react-router-dom"

type Props = {
    token : string,
    setToken : (token : string) => void
}

export default function Auth({token,setToken}: Props) {
  return (
              <div className="text-white">
                {
                  token ? <Link 
                            to={"/"} 
                            onClick={() => setToken("")}
                            className=" px-4 py-2 rounded-full cursor-pointer transition-all bg-black hover:bg-white hover:text-black hover:border-2 border-black" >
                              <span className=" "><RiLogoutCircleFill className="inline-block mr-2" size={20}/></span>  
                              Deconnexion  
                          </Link> :
                           <div className="flex flex-row items-center">
                              <Link 
                                className="py-1 px-4 transition-all bg-black hover:bg-white hover:text-black hover:border-2 border-black " 
                                to={"/login"}>
                                  Connexion 
                                  <IoLogInSharp 
                                    className="text-gray-500 text-2xl inline-block" 
                                    size={30}/>
                              </Link>
                              
                              <Link 
                                className=" py-1 px-4 transition-all  text-black " 
                                to={"/register"}>
                                 <IoLogOutSharp 
                                    className="text-white text-2xl inline-block" 
                                    size={30}/> 
                                      Inscription  
                              </Link>     
                          </div>                     
                }
                </div>          
  )
}