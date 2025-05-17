type Props = {
    prix ?: number,
    totalDays : number
}

export default function CalculatePrice({prix,totalDays}: Props) {
  return (
    <div className="">
        <h1 className="text-xl font-bold">Prix Total</h1>
        {prix && totalDays > 0 && <h1 className="text-lg text-gray-500">{prix * totalDays} Ar</h1>}
    </div>
  )
}