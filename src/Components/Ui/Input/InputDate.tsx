import { UseFormRegisterReturn } from "react-hook-form"

type Props = {
    label : string
    register : UseFormRegisterReturn
    Err : any
    min : string
}

export default function InputDate({ register,Err,label,min}: Props) {
  return (
    <div className="mb-2">
        <label className="font-bold"> {label} </label>
        <input
            {...register}
            placeholder="Entrez votre Email"
            type="date"
            min={min}
            className="w-full border-b-4 py-2 pl-2 border-fuchsia-500 focus:outline-none focus:border-s-4 rounded-lg"
           
        />
        {Err && <p className="text-red-500 text-xs">🔺 {Err}</p>}
    </div>
  )
}