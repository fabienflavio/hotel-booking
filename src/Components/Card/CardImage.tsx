type Props = {
    img?: string
    className ?: string
}

export default function CardImage({img,className}: Props) {
  return (
    <div className=" border-black w-full h-[400px]">
        <img src={`http://localhost:8000/${img}`} className={`object-cover w-full h-full rounded-3xl shadow-xl ${className}`} alt="" />
    </div>
  )
}