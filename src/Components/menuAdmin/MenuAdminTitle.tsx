import { IoHome } from 'react-icons/io5'
import { MdArrowForwardIos } from 'react-icons/md'
import ImgLogo from '../../assets/images/Logo.png'

type Props = {
    menu : string
}

export default function MenuAdminTitle({menu}: Props) {
  return (
        <div className="w-full flex flex-row justify-between bg-white p-4 rounded-l-3xl">
            <div>
              <p> <IoHome className="inline-block text-[#00CCFF] mr-2 " size={30} /> Home <MdArrowForwardIos className="inline-block mx-1" /> {menu} </p>
            </div>
            <img className="w-8 h-8" src={ImgLogo} alt="" />
            <p>Welcome Admin Fabien ,</p>
          </div>  )
}