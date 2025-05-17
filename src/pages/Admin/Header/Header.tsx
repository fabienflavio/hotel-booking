import { Link, useLocation } from "react-router-dom";
import { LinkMenuAdmin } from "../../../Components/menuAdmin/LinkMenu";
import ImgLogo from "../../../assets/images/Logo.png"

export default function Header() {
    const {pathname} = useLocation()
  return (
    <div className="h-screen w-full pt-4 bg-white rounded-r-3xl shadow-2xl">
        <div className="mb-4  flex justify-center border-b-2">
            <div className="">
                <img className="w-40 h-40" src={ImgLogo} alt="" />
                <div className="mb-4">
                    <h1 className="  text-2xl font-semi-black text-center">Mayana Hôtel </h1>
                </div>
            </div>
        </div>
   
        <div className="">
            {
                LinkMenuAdmin.map((menu) => {
                    const isActived = pathname === menu.route
                    return(
                            <Link to={menu.route} className={`${isActived ? "ActiveMenu " : "hoverNotActive" } block px-4 py-2 bg-white text-black m-2  rounded-lg  cursor-pointer `}  >
                                <span className=" inline-block "> {<menu.icons className=" inline-block " size={20} />} </span>   
                                <span className="bg-Primary-Text ml-2 inline-block"> {menu.label} </span>
                            </Link>)
                    })
            }
        </div>
    </div>
  )
}