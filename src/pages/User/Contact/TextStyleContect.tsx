type Props = {
    icons: JSX.Element;
    h2 : string
    h3 : string
}
export default function TextStyleContect({icons,h2,h3}: Props) {
  return (
    <div className='flex items-center gap-4 mb-8'>
        <span className="inline-block py-2 text-2xl"> {icons}  </span>
        <div>
            <h2 className="text-xl"> {h2} </h2>
            <h3 className="font-light"> {h3} </h3>
        </div>
    </div>
  )
}