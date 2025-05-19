import { UseFormRegisterReturn } from "react-hook-form"

type Props = {
    label : string
    register : UseFormRegisterReturn
    Err : any
}

export default function InputTextarea({ register,Err,label}: Props) {
  return (
    <div className="mb-2 text-white">
        <label htmlFor="email" className="font-bold"> {label} </label>
        <textarea 
            {...register}
            placeholder={`Entrez votre ${label}`}
            className={`${Err ? "mb-0" : "mb-4"}  w-full min-w-[300px] rounded-lg border-b-4 py-2 pl-2   font-light placeholder:text-gray-200 placeholder:text-sm focus:outline-none focus:border-s-4 text-white bg-gray-100 bg-opacity-20 `}
            id="email"
        />
        {Err && <p className="text-red-500 text-xs">🔺 {Err}</p>}
    </div>
  )
}