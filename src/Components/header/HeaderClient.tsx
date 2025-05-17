import {  useState} from "react";
import { useContext} from "react";
import Logo from "../Logo/Logo";
import Menu from "../menu/Menu";
import { DataContext } from "../../context/DataContext";
import Auth from "../authComponents/auth";
import Navbar from "../menu/Navbar";


export default function HeaderClient() {
  const [menu, setMenu] = useState(false);
  const {token,setToken} = useContext(DataContext)

  return (
    <div className={` w-full h-20 sticky top-0 z-50 bg-white`}>
      <div 
        className="flex justify-between items-center h-full px-1 lg:hidden">
        <Logo />
        <Navbar menu={menu} setMenu={setMenu} token={token} />
      </div>

      <div 
        className="w-full  h-full hidden lg:flex justify-center"> 
            <div className="w-full max-w-[1200px] flex flex-row justify-between items-center">
              <Logo />
              <Menu />
              <Auth token={token!} setToken={setToken} />
            </div>
      </div>
    </div>
  )
}