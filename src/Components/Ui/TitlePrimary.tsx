type Props = {
    title : string
}

export default function TitlePrimary({title}: Props) {
  return (
    <h1 className="text-4xl mt-4 mb-4 font-bold text-center text-violet-500 bg-Primary-Text">{title} </h1>
  )
}