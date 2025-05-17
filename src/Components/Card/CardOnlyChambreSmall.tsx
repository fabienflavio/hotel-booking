type Props = {
    Name?: string,
    type? : string,
    prix? : number
    id ?: number
}

export default function CardOnlyChambreSmall({ id,Name,type,prix}: Props) {
  return (
    <div key={id} className="w-full h-full">
        <h1 className="text-3xl bg-Primary-Text font-bold">Chambre {Name}</h1>
        <p className="text-xs mt-2 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni doloremque possimus ab iusto asperiores provident hic, dicta i</p>
        <div className="flex flex-row justify-between mt-4">
        <h1 className="text-center bg-white text-sm font-bold px-4 py-2 rounded-lg"> {type}</h1>
        <h1 className="text-center bg-white text-sm font-bold px-4 py-2 rounded-lg"> {prix} Ar</h1>
        </div>
  </div>
  )
}