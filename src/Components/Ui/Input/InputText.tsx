import { useState } from "react"
import { UseFormRegisterReturn } from "react-hook-form"
import { BsEye, BsEyeSlash } from "react-icons/bs"

type Props = {
    label : string
    register : UseFormRegisterReturn
    Err : any
    type ?: string
    show ?: boolean 
}

export default function InputText({register,Err,label,type,show}: Props) {
  const  [showPassword,setShowPassword] = useState("password");
  return (
    <div className="my-2 relative w-full">
        <label htmlFor="email" className="text-gray-200 font-light"> {label} </label>
        <input
            {...register}
            placeholder={`Enter your ${label.toLowerCase()}`}
            type={show ? showPassword :  type  }
            className={`${Err ? "mb-0" : "mb-4"}  w-full min-w-[300px] rounded-lg border-b-4 py-2 pl-2   font-light placeholder:text-gray-400 placeholder:text-sm focus:outline-none focus:border-s-4 text-white bg-gray-100 bg-opacity-20 `}
            id="email"
        />
        {Err && <p className="text-red-500 text-xs mt-2">🔺 {Err}</p>}
        {show && (showPassword === "password" ? <BsEyeSlash className={`absolute right-3  cursor-pointer text-white ${Err ? '-translate-y-[56px]' : '-translate-y-12'} `}  onClick={() => setShowPassword("text")  } /> : 
        <BsEye className= {` absolute right-3   cursor-pointer text-white ${Err ? '-translate-y-[56px]' : '-translate-y-12'} `} onClick={() => setShowPassword("password")  } /> )  }
    </div>
  )
}