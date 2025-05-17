type Props = {
    errorServer : string
}

export default function ErrorServer({errorServer}: Props) {
  return (
    <div className="w-full flex justify-center">
    <span className="text-red-500 text-sm bg-red-500 bg-opacity-15 px-8 py-1 ">  {errorServer} </span>
  </div>
  )
}