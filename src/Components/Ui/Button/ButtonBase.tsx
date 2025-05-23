type Props = {
    label : string
}

export default function ButtonBase({label}: Props) {
  return (
    <button type="button" className="text-white border-2 border-black inline-block lg:px-8 lg:py-3 py-2 px-4 text-xs lg:text-base rounded-full cursor-pointer transition-all  bg-black hover:bg-white hover:text-black"
    >  {label} </button>
  )
}