import { AiOutlineLoading } from "react-icons/ai";


type Props = {
  classCss?:string
  label ?: string
  loader ?: boolean
}

export default function InputSubmit( {classCss , label , loader} : Props) {
  return (
    <div className={` mt-4 ${classCss}`}>
      <button
       type="submit"
       className="border-b-4 border-black max-w-[150px] w-full rounded-xl bg-white text-black font-bold px-8 py-2 hover:bg-gray-200 cursor-pointer"
      >{label} {loader && <AiOutlineLoading className="inline-block animate-spin" /> } </button>
    </div>
  )
}