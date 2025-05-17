type Props = {
  setShort : React.Dispatch<React.SetStateAction<string>>
}

export default function Trier({setShort}: Props) {
  return (
    <div className="flex flex-row my-4 max-[700px]:hidden">
        <h1>Trier par : </h1>
        <select className="h-6 rounded-lg ml-4 pl-2 bg-Primary text-white" onChange={(e) => setShort(e.target.value)}>
            <option value="name">Nom</option>
            <option value="prix">Moin chers</option>
            <option value="type">Type de Chambre</option>
        </select>
    </div>
  )
}