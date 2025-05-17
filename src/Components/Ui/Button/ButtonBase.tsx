type Props = {
    label : string
}

export default function ButtonBase({label}: Props) {
  return (
    <button type="button" className="text-white border-2 border-black inline-block px-8 py-3 rounded-full cursor-pointer transition-all  bg-black hover:bg-white hover:text-black"
    >  {label} </button>
  )
}