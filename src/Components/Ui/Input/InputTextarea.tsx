import { UseFormRegisterReturn } from "react-hook-form"

type Props = {
    label : string
    register : UseFormRegisterReturn
    Err : any
}

export default function InputTextarea({ register,Err,label}: Props) {
  return (
    <div className="mb-2">
        <label htmlFor="email" className="font-bold"> {label} </label>
        <textarea 
            {...register}
            placeholder={`Entrez votre ${label}`}
            className=" w-full border-b-4 py-2 h-40 pl-2 border-fuchsia-500 focus:outline-none focus:border-s-4 rounded-lg"
            id="email"
        />
        {Err && <p className="text-red-500 text-xs">🔺 {Err}</p>}
    </div>
  )
}