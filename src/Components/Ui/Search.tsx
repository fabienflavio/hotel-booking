import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

type Props = {
  setSearch : React.Dispatch<React.SetStateAction<string>>
  setPage : React.Dispatch<React.SetStateAction<number>>
}

export default function Search({setSearch,setPage}: Props) {
  const [value,setValue] = useState("") 
  return (
    <div className="flex flex-row h-12 b max-[700px]:justify-center max-[700px]:w-full">
        <div className="">
            <input onChange={(e) => setValue(e.target.value)} type="text" className="py-2 border-b-4 focus:border-s-4 mt-1 max-[700px]:w-52 max-[700px]:text-sm w-60 border-fuchsia-500 bg-slate-100 rounded-lg focus:outline-none pl-2" placeholder="Recherche une produit" />
            <div className="bg-white absolute">
                
            </div>
        </div>
        <div className="bg-Primary rounded-e-md p-1 h-10 mt-1">
            <span className="text-white" onClick={() => {
              setPage(1) ; setSearch(value)
            } }><FaSearch  size={40} style={{ padding: 4, border: 2 }} /></span>
        </div>
    </div>
  )
}