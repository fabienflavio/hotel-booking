import ImgLogo from "../../assets/images/LogoBlackWhite.png"


type Props = {}

export default function Logo({}: Props) {
  return (
        <div className=""> 
           <img src={ImgLogo} className="w-16 h-16 inline-block" alt="" />
            <span className=" ml-2 font-bold text-lg text-black lg:text-2xl">HOTEL MAYANA</span>          
        </div>
  )
}