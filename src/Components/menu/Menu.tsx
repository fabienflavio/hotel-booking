import { Link, useLocation } from "react-router-dom"
import { MenuData } from "./Link/Data"

export default function Menu() {
    const {pathname} = useLocation()
  return (
    <>
        <div className=" text-black ">
            <ul className="flex flex-col lg:justify-center gap-5
                lg:flex-row    
                ">
                {
                    MenuData.map((items) => { 
                        const isActive = pathname === items.path
                        return(
                            <li className="borderAnimateLi">
                                <Link className={`   ${isActive ?  " border-b-2 text-gray-600 font-semibold border-black" : "borderAnimate " }`} to={items.path}> {items.label} </Link> 
                            </li>
                        )  
                    } )
                }        
            </ul>
        </div>
    </>

  )
}